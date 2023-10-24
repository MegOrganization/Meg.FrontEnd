import { motion } from "framer-motion";
import { ElementType, FC, useState } from "react";
import { IconType } from "react-icons";
import { RiArrowDropRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";



interface IRoute{
    path: string,
    title: string
}

interface ITabBar{
    icon: ElementType,
    arrowIcon?: ElementType,
    title: string,
    routes: IRoute[],
    transitionDuration?: number,
    routesLeftPadding?: number,
    titleLeftPadding?: number
}



const TabBar: FC<ITabBar> = (props: ITabBar) => {
    const [isBarOpened, setIsBarOpened] = useState(false);
    return (
    <>
        <div id="admin">
                    <div onClick={()=>{setIsBarOpened(i => !i)}} className={`flex flex-row cursor-pointer ${props.titleLeftPadding ? props.titleLeftPadding : 'pl-5'} `}>
                        <div className="headerBar flex items-center">
                            <props.icon className="mr-2"/>
                            <a>{props.title}</a>
                        </div>
                        <motion.div className="self-center" animate={{ rotate: isBarOpened ? 90 : 0}}>
                            <RiArrowDropRightFill className="text-2xl"/> 
                        </motion.div>
                    </div>
                    <motion.div className="h-0 overflow-hidden" animate={{height: isBarOpened ? "auto" : 0}} transition={{duration: props.transitionDuration? props.transitionDuration : 0.15}}>
                    <div className="flex flex-col">
                        <div className={`flex flex-col ${props.routesLeftPadding ? props.routesLeftPadding : 'pl-12'}`}>
                            {props.routes.map(route=>{
                                return(<Link to={route.path}>{route.title}</Link>)
                            })}
                        </div>
                    </div>
                    </motion.div>
                </div>
    </>)

}

export default TabBar;