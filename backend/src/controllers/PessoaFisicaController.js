const PessoaFisicaService = require('../services/PessoaFisicaService');

module.exports = {
    cadastrarPessoa: async (req, res) => {
        let json = { error: '', result: {} };

        let { cpf, nome, email, idade } = req.body;

        if (cpf && nome && email && idade) {
            try {
                let verificarCpf = await PessoaFisicaService.lerPessoaCpf(cpf);
                if (verificarCpf.length > 0) {
                    json.error = 'Pessoa já cadastrada no sistema';
                } else {
                    await PessoaFisicaService.cadastrarPessoa(cpf, nome, email, idade);
                    json.result = 'Pessoa cadastrada com sucesso';
                }
            } catch (error) {
                json.error = 'Erro ao cadastrar Pessoa' + error.message;
            }
        } else {
            json.error = 'Todos os campos são obrigatórios';
        }
        res.json(json);
    },

    lerTodasPessoa: async (req, res) => {
        let json = { error: '', result: [] };

        const pessoas = await PessoaFisicaService.lerTodasPessoas();

        if (pessoas) {
            try {
                json.result = pessoas;
            } catch (error) {
                json.error = 'Erro ao ler pessoas.' + error.message;
            }
        } else {
            json.error = 'Nenhuma pessoa encontrada.'
        }
        res.json(json);
    },

    lerPessoaCpf: async (req, res) => {
        let json = { error: '', result: [] };

        let cpf = req.params.cpf;

        if (cpf) {
            try {
                const pessoa = await PessoaFisicaService.lerPessoaCpf(cpf);
                json.result = pessoa;
            } catch (error) {
                json.error = 'Erro ao buscar pessoa.' + error.message;
            }
        } else {
            json.error = 'Nenhuma pessoa encontrada';
        }
        res.json(json);
    },

    editarPessoa: async (req, res) => {
        let json = {error: '', result: {} };

        let cpf = req.params.cpf;

        let { nome, email, idade } = req.body;

        if (cpf && nome && email && idade) {
            try {
                let verificarCpf = await PessoaFisicaService.lerPessoaCpf(cpf);
                if (verificarCpf.length > 0) {
                    await PessoaFisicaService.editarPessoa(cpf, nome, email, idade);
                    json.result = 'Pessoa editada.';
                } else {
                    json.error = 'Pessoa não encontrada com este cpf';
                }
            } catch (error) {
                json.error = 'Erro ao atualizar pessoa.' + error.message;
            }
        } else {
            json.error = 'Todos os campos são obrigatórios';
        }
        res.json(json);
    },

    deletarPessoa: async (req, res) => {
        let json = { error: '', result: [] };

        let cpf = req.params.cpf;

        if (cpf) {
            try {
                let verificarCpf = await PessoaFisicaService.lerPessoaCpf(cpf);
                if (verificarCpf.length > 0) {
                    await PessoaFisicaService.deletarPessoa(cpf);
                    json.result = 'Pessoa deletada.';
                } else {
                    json.error = 'Pessoa não encontrada com este CPF.';
                }
            } catch (error) {
                json.error = 'Erro ao deletar pessoa.' + error.message;
            }
        } else {
            json.error = 'Todos os campos são obrigatórios';
        }
        res.json(json);
    }
}