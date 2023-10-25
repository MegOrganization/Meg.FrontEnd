import { FC } from "react";
import InputText from "../../components/InputText";
import InputTextCPF from "../../components/InputTextCPF";
import {AiOutlineUserAdd} from "react-icons/ai";
import SubmitButton, { ESubmitButtonType } from "../../components/SubmitButton";

const Usuario: FC = () => {
    return(
        <div className="flex flex-1 flex-col m-5 p-5 bg-white border-2 border-quaternary rounded gap-4">
            <form>
                <div className="flex items-center mb-2 text-secondary font-bold">
                    <AiOutlineUserAdd className="mr-2"/>
                    <h1>Inserir Aluno</h1>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-secondary mb-2 ">Nome Aluno</h4>
                    <InputText placeholder="Fulano da Silva" spellCheck={false} 
                        required type="text" validationMsg="Batata frita."/>
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
                        <InputText placeholder="fulano@detal.com" spellCheck={false} type="email" required/>
                    </div>

                    <div className="flex flex-1 flex-col">
                        <h4 className="text-secondary mb-2">CPF</h4>
                        <InputTextCPF placeholder="CPF" spellCheck={false} type="text" required/>
                    </div>
                </div>
                <div className="flex flex-1 justify-end mr-2 mt-4">
                    <SubmitButton className="w-20 h-11 mr-2" value="Resetar" type={ESubmitButtonType.reset}/>
                    <SubmitButton className="w-28 h-11" value="Confirmar" type={ESubmitButtonType.submit}/>
                </div>
            </form>
        </div>
    )

}

export default Usuario;