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
    return (   
        <sectio className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o caminho da imagem"/>
                <ListaSuspensa itens = {times}/>
                
            </form>
        </sectio>
    )
}
export default Formulario