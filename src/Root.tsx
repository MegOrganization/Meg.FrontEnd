import React, {FC} from "react";
import Aside from "./Aside";
import MainHeader from "./components/MainHeader"; 
import {Routes, Route, Link} from 'react-router-dom';

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
                <Aside/>
                <div className="flex flex-1 flex-col">
                    <MainHeader />
                    <div className="bg-tertiary flex flex-1">
                        <Routes>    
                            <Route path="/admin" element={<Admin/>}/>
                            <Route path="/" element={<></>}/>
                        </Routes>
                    </div>
                </div> 
            </BrowserRouter>
        </>
    )
}

export default Root;