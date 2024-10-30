import React, { useEffect, useState } from 'react'
import { BtnForm, Container, ContainerForms, ContainerLabelInput, Formulario, InputForm, LabelTxt, StyledError, StyledSuccess, Titulo } from '../styles/styles'
import { CiUser, CiMail, CiClock1 } from "react-icons/ci";
import axios from 'axios';

function Home() {
    const [pessoas, setPessoas] = useState([])
    const [error, setError] = useState('');

    const [cpfCadastro, setCpfCadastro] = useState('');
    const [nomeCadastro, setNomeCadastro] = useState('');
    const [mailCadastro, setMailCadastro] = useState('');
    const [idadeCadastro, setIdadeCadastro] = useState('');
    const [errorCadastro, setErrorCadastro] = useState('');
    const [successCadastro, setSuccessCadastro] = useState('');

    const [cpfEditar, setCpfEditar] = useState('');
    const [nomeEditar, setNomeEditar] = useState('');
    const [mailEditar, setMailEditar] = useState('');
    const [idadeEditar, setIdadeEditar] = useState('');
    const [errorEditar, setErrorEditar] = useState('');
    const [successEditar, setSuccessEditar] = useState('');

    const [cpfDeletar, setCpfDeletar] = useState('');
    const [errorDeletar, setErrorDeletar] = useState('');
    const [successDeletar, setSuccessDeletar] = useState('');

    const handleCadastrar = async (e) => {
        e.preventDefault();

        setErrorCadastro('');
        setSuccessCadastro('');

        try {
            const resp = await axios.post('http://localhost:3001/api/pessoa', {
                cpf: cpfCadastro,
                nome: nomeCadastro,
                email: mailCadastro,
                idade: idadeCadastro,
            });

            if (resp.data.error) {
                setErrorCadastro(resp.data.error);
                setSuccessCadastro('');
            } else {
                setSuccessCadastro('Cadastro realizado');
                setCpfCadastro('');
                setNomeCadastro('');
                setMailCadastro('');
                setIdadeCadastro('');
            }
        } catch (error) {
            setErrorCadastro('Erro ao cadastrar Pessoa.')
        }
    }

    const handleEditar = async (e) => {
        e.preventDefault();

        setErrorEditar('');
        setSuccessEditar('');

        try {
            const resp = await axios.put(`http://localhost:3001/api/pessoa/${cpfEditar}`, {
                nome: nomeEditar,
                email: mailEditar,
                idade: idadeEditar,
            });

            if (resp.data.error) {
                setErrorEditar(resp.data.error);
                setSuccessEditar('');
            } else {
                setSuccessEditar('Pessoa editada.');
                setErrorEditar('');
                setCpfEditar('');
                setNomeEditar('');
                setMailEditar('');
                setIdadeEditar('');
            }
        } catch (error) {
            setErrorEditar('Erro ao editar pessoa.');
            setSuccessEditar('');
        }
    }

    const handleDeletar = async (e) => {
        e.preventDefault();

        setErrorDeletar('');
        setSuccessDeletar('');

        try {
            const resp = await axios.delete(`http://localhost:3001/api/pessoa/${cpfDeletar}`);

            if (resp.data.error) {
                setErrorDeletar(resp.data.error);
                setSuccessDeletar('');
            } else {
                setSuccessDeletar('Pessoa deletada.');
                setErrorDeletar('');
                setCpfDeletar('')
            }
        } catch (error) {
            setErrorDeletar('Erro ao deletar pessoa.');
            setSuccessDeletar('');
        }
    }

    useEffect(() => {
        const fetchDadosPessoas = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/api/pessoas');
                setPessoas(resp.data.result);
            } catch (error) {
                setError('Erro ao ler as pessoas.');
            }
        }
        fetchDadosPessoas();
    }, []);

    return (
        <Container>
            <Titulo>CRUD</Titulo>
            <ContainerForms>
                <Formulario onSubmit={handleCadastrar}>
                    <Titulo>Cadastrar</Titulo>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="cpf">
                            <CiUser />
                        </LabelTxt>
                        <InputForm type="text" name='cpf' placeholder='CPF' value={cpfCadastro} onChange={(e) => setCpfCadastro(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="nome">
                            <CiUser />
                        </LabelTxt>
                        <InputForm type="text" name='nome' placeholder='Nome' value={nomeCadastro} onChange={(e) => setNomeCadastro(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="mail">
                            <CiMail />
                        </LabelTxt>
                        <InputForm type="text" name='mail' placeholder='Mail' value={mailCadastro} onChange={(e) => setMailCadastro(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="idade">
                            <CiClock1 />
                        </LabelTxt>
                        <InputForm type="text" name='idade' placeholder='Idade' value={idadeCadastro} onChange={(e) => setIdadeCadastro(e.target.value)} />
                    </ContainerLabelInput>
                    {errorCadastro && <StyledError>{errorCadastro}</StyledError>}
                    {successCadastro && <StyledSuccess>{successCadastro}</StyledSuccess>}
                    <BtnForm type='submit'>Cadastrar</BtnForm>
                </Formulario>

                <Formulario onSubmit={handleEditar}>
                    <Titulo>Editar</Titulo>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="cpf">
                            <CiUser />
                        </LabelTxt>
                        <InputForm type="text" name='cpf' placeholder='CPF' value={cpfEditar} onChange={(e) => setCpfEditar(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="nome">
                            <CiUser />
                        </LabelTxt>
                        <InputForm type="text" name='nome' placeholder='Nome' value={nomeEditar} onChange={(e) => setNomeEditar(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="mail">
                            <CiMail />
                        </LabelTxt>
                        <InputForm type="text" name='mail' placeholder='Mail' value={mailEditar} onChange={(e) => setMailEditar(e.target.value)} />
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="idade">
                            <CiClock1 />
                        </LabelTxt>
                        <InputForm type="text" name='idade' placeholder='Idade' value={idadeEditar} onChange={(e) => setIdadeEditar(e.target.value)} />
                    </ContainerLabelInput>
                    {errorEditar && <StyledError>{errorEditar}</StyledError>}
                    {successEditar && <StyledSuccess>{successEditar}</StyledSuccess>}
                    <BtnForm type='submit'>Editar</BtnForm>
                </Formulario>

                <Formulario onSubmit={handleDeletar}>
                    <Titulo>Deletar</Titulo>
                    <ContainerLabelInput>
                        <LabelTxt htmlFor="cpf">
                            <CiUser />
                        </LabelTxt>
                        <InputForm type="text" name='cpf' placeholder='CPF' value={cpfDeletar} onChange={(e) => setCpfDeletar(e.target.value)} />
                    </ContainerLabelInput>
                    {errorDeletar && <StyledError>{errorDeletar}</StyledError>}
                    {successDeletar && <StyledSuccess>{successDeletar}</StyledSuccess>}
                    <BtnForm type='submit'>Deletar</BtnForm>
                </Formulario>
            </ContainerForms>
            {error ? (
                <StyledError>{error}</StyledError>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(pessoas) && pessoas.map(pessoa => (
                            <tr key={pessoa.cpf}>
                                <td>{pessoa.cpf}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.email}</td>
                                <td>{pessoa.idade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Container>
    )
}

export default Home