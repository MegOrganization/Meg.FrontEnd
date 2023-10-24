import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import TabBar from "./components/TabBar";
import { motion } from "framer-motion";


const variants = {
    open: {}

}


const Aside: React.FC = () => {
    useEffect(()=>{console.log("aside rendered.")},[])
    const [isAdminBarOpened, setIsAdminBarOpened] = useState(false);
    const [isConfiguracoesBarOpened, setIsConfiguracoesBarOpened] = useState(false);

    return (
    <>
        <div className={`bg-primary flex flex-col h-screen w-60 text-white`}>
            <div className="mt-5 ml-7 flex flex-col">
                <Link to="/" className="flex pb-5 items-center text-xl">
                    <AiOutlineBars className="mr-2"/>
                    <p>Meg.App</p>
                </Link>
            </div>
            <div id="tabs" className="flex flex-col gap-2">

            <TabBar title="Cadastros" routes={
                    [
                        {title:"Usuário", path:"/cadastro/usuario"}
                    ]}
                    icon={AiOutlineUsergroupAdd}
                    active={true}
                />

                <TabBar title="Administrador" routes={
                    [
                        {title:"Geral", path:"/admin"},
                        {title:"usuarios",path:"/admin/usuarios"},
                        {title:"Alunos", path:"/admin/alunos"}
                    ]}
                    icon={MdAdminPanelSettings}
                    active={true}
                />

                <TabBar title="Configurações" routes={
                    [
                        {title:"Geral", path:"/configuracoes"},
                        {title:"Usuarios",path:"/configuracoes/usuarios"},
                        {title:"Alunos", path:"/configuracoes/alunos"}
                    ]}
                    active={false}
                    icon={IoIosSettings} 
                />
                
            </div>
        </div>
    </>
    )
}

export default Aside;