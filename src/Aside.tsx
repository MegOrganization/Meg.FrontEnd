import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';


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
                <div id="admin">
                    <div onClick={()=>{setIsAdminBarOpened(i => !i)}} className="flex flex-row pl-5 cursor-pointer">
                        
                        <div className="headerBar flex items-center">
                            <MdAdminPanelSettings className="mr-2"/>
                            <a>Administrador </a>
                        </div>
                        <motion.div className="self-center" animate={{ rotate: isAdminBarOpened ? 90 : 0}}>
                            <RiArrowDropRightFill className="text-2xl"/> 
                        </motion.div>
                    </div>
                    <motion.div className="h-0 overflow-hidden" animate={{height: isAdminBarOpened ? "auto" : 0}} transition={{duration: 0.15}}>
                    <div className="flex flex-col pl-12">
                        <div className={`flex flex-col`}>
                            <Link to="/admin">Geral</Link>
                            <Link to="/usuarios">Usuarios</Link>
                            <Link to="/alunos">Alunos</Link>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <div id="Config">
                    <div onClick={()=>{setIsConfiguracoesBarOpened(i => !i)}} className="flex flex-row pl-5 cursor-pointer">
                        
                        <div className="headerBar flex items-center">
                            <IoIosSettings className="mr-2"/>
                            <a>Configuracoes</a>
                        </div>
                        <motion.div className="self-center" animate={{ rotate: isConfiguracoesBarOpened ? 90 : 0}}>
                            <RiArrowDropRightFill className="text-2xl"/> 
                        </motion.div>
                    </div>
                    <motion.div className="h-0 overflow-hidden" animate={{height: isConfiguracoesBarOpened ? "auto" : 0}}  transition={{duration: 0.15}}>
                        <div className="flex flex-col pl-12">
                            <div className={`flex flex-col `}>
                                <Link to="/admin">Blabla</Link>
                                <Link to="/usuarios">Blabla</Link>
                                <Link to="/alunos">Blablabla</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Aside;