const db = require('../db');

module.exports = {
    cadastrarPessoa: async(cpf, nome, email, idade) => {
        try {
            const [results] = await db.query('INSERT INTO pessoaFisica (cpf, nome, email, idade) VALUES (?, ?, ?, ?)', [cpf, nome, email, idade]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    lerTodasPessoas: async() => {
        try {
            const [results] = await db.query('SELECT * FROM pessoaFisica');
            return results;
        } catch (error) {
            throw error;
        }
    },

    lerPessoaCpf: async(cpf) => {
        try {
            const [results] = await db.query('SELECT * FROM pessoaFisica WHERE cpf = ?', [cpf]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    editarPessoa: async(cpf, nome, email, idade) => {
        try {
            const [results] = await db.query('UPDATE pessoaFisica SET nome = ?, email = ?, idade = ? WHERE  cpf = ?', [nome, email, idade, cpf]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    deletarPessoa: async(cpf) => {
        try {
            const [results] = await db.query('DELETE FROM pessoaFisica WHERE cpf = ?', [cpf]);
            return results;
        } catch (error) {
            throw error;
        }
    },
}