import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
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
                <Link to="/" className="flex pb-5 items-center">
                    <AiOutlineBars className="mr-2"/>
                    <p>Meg.App</p>
                </Link>
            </div>
            <div id="tabs" className="flex flex-col gap-2">
                <div id="admin">
                    <div onClick={()=>{setIsAdminBarOpened(i => !i)}} className="flex flex-row pl-5 cursor-pointer">
                        <a>Administrador </a>
                        <motion.div className="self-center" animate={{ rotate: isAdminBarOpened ? 90 : 0}}>
                            <RiArrowDropRightFill/> 
                        </motion.div>
                    </div>
                    <motion.div animate={{scaleX: isAdminBarOpened ? 1 : 0}}>
                    <div className="flex flex-col pl-10">
                        <div className={`flex flex-col ${isAdminBarOpened ? 'block' : 'hidden'}`}>
                            <Link to="/admin">Geral</Link>
                            <Link to="/usuarios">Usuarios</Link>
                            <Link to="/alunos">Alunos</Link>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <div id="Config">
                    <div onClick={()=>{setIsConfiguracoesBarOpened(i => !i)}} className="flex flex-row pl-5 cursor-pointer">
                        <a>Configuracoes</a>
                        <motion.div className="self-center" animate={{ rotate: isConfiguracoesBarOpened ? 90 : 0}}>
                            <RiArrowDropRightFill/> 
                        </motion.div>
                    </div>
                    <motion.div animate={{scaleX: isConfiguracoesBarOpened ? 1 : 0}} >
                        <div className="flex flex-col pl-10">
                            <div className={`flex flex-col ${isConfiguracoesBarOpened ? 'block' : 'hidden'}`}>
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