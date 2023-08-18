import './Formulario.css';
import CanpoTexto from './conponentes/CampoTexto';


const Formulario = () =>{
    <section>
        <form>
        <CanpoTexto label= "Nome" placeholder="Digite seu nome"/>
        <CanpoTexto label= "Cargo" placeholder="Digite seu cargo"/>
        <CanpoTexto label= "Imagem" placeholder="Digite o endereço da imagem"/>
        </form>
    </section>

}
export default Formulario