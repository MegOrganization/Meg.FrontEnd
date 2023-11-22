import React, {FC} from "react";
import Aside from "./Aside";
import MainHeader from "./components/MainHeader"; 
import {Routes, Route, Link} from 'react-router-dom';
import Usuario from "./pages/Cadastro/Usuario";
import Alert from "./components/Alert/Alert";

import {
    BrowserRouter,
  } from "react-router-dom";
import Admin from "./pages/Admin";

interface IProps{
    children?: React.ReactNode
}

const Root : FC<IProps> = (props: IProps ) => {
    return( 
        <>  
            <BrowserRouter>
                <Alert/>
                <Aside/>
                <div className="flex flex-1 flex-col">
                    <MainHeader />
                    <div className="bg-tertiary flex flex-1">
                        <Routes>    
                            <Route path="/" element={<></>}/>
                            <Route path="/admin" element={<Admin/>}/>
                            <Route path="/cadastro/usuario" element={<Usuario/>}/>
                        </Routes>
                    </div>
                </div> 
            </BrowserRouter>
        </>
    )
}

export default Root;