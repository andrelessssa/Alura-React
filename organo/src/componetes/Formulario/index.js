import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    
    const times = [
        'Programação',
        'Font-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log('FOrm foi submetido', nome, cargo, imagem,time)

    } 
    return (   
        <sectio className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o caminho da imagem"
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens = {times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                    
                    />
                <Botao>
                        Criar Card
                </Botao>
            </form>
        </sectio>
    )
}
export default Formulario