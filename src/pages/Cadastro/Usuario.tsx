import { FC } from "react";
import InputText from "../../components/InputText";
import InputTextCPF from "../../components/InputTextCPF";
import {AiOutlineUserAdd} from "react-icons/ai";

const Usuario: FC = () => {
    return(
    <div className="flex flex-1 flex-col m-5 p-5 bg-white border-2 border-quaternary rounded gap-4">
        <div className="flex items-center mb-2 text-secondary font-bold">
            <AiOutlineUserAdd className="mr-2"/>
            <h1>Inserir Aluno</h1>
        </div>
        <div className="flex flex-col">
            <h4 className="text-secondary mb-2 ">Nome Aluno</h4>
            <InputText placeholder="Fulano da Silva" spellCheck={false} type="text"/>
        </div>
        <div className="flex flex-row gap-3">
            
            <div className="flex flex-1 flex-col">
                <h4 className="text-secondary mb-2 ">Data Nascimento</h4>
                <InputText placeholder="99/99/9999" spellCheck={false} type="date"/>
            </div>

            <div className="flex flex-1 flex-col">
                <h4 className="text-secondary mb-2 ">Gênero</h4>
                <InputText placeholder="Feminino" spellCheck={false} type="text"/>
            </div>

            <div className="flex flex-1 flex-col">
                <h4 className="text-secondary mb-2 ">Responsável</h4>
                <InputText placeholder="Ciclano de Tal" spellCheck={false} type="text"/>
            </div>

        </div>
        <div className="flex flex-row gap-3">
            
            <div className="flex flex-1 flex-col">
                <h4 className="text-secondary mb-2 ">Email</h4>
                <InputText placeholder="fulano@detal.com" spellCheck={false} type="email"/>
            </div>

            <div className="flex flex-1 flex-col">
                <h4 className="text-secondary mb-2">CPF</h4>
                <InputTextCPF placeholder="CPF" spellCheck={false} type="text"/>
            </div>

        </div>
    </div>)

}

export default Usuario;