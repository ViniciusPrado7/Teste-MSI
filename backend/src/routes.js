const express = require('express');
const PessoaFisicaController = require('./controllers/PessoaFisicaController');
const router = express.Router();

router.post('/pessoa', PessoaFisicaController.cadastrarPessoa);
router.get('/pessoas', PessoaFisicaController.lerTodasPessoa);
router.get('/pessoa/:cpf', PessoaFisicaController.lerPessoaCpf);
router.put('/pessoa/:cpf', PessoaFisicaController.editarPessoa);
router.delete('/pessoa/:cpf', PessoaFisicaController.deletarPessoa);

module.exports = router;