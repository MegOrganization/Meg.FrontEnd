import { FC, useEffect, useState, useRef } from "react";
import InputText, {IInputText} from "./InputText";
import { validateCPF } from "../tools/utils";
import { motion } from "framer-motion";



interface IInputTextCPF extends IInputText {
    
}




const InputTextCPF:FC<IInputTextCPF> = (props: IInputTextCPF) => {
    const [isValid, setIsValid] = useState(false);
    const [cpf, setCpf] = useState("");
    const cpfRef = useRef<HTMLInputElement>(null);
    
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValid(validateCPF(e.target.value));
    }

    return(
        <>  
            <motion.div className="flex flex-col" 
            animate={
                {
                    x: isValid ? 0 : [1,-1,1,-1,1,-1]
                }}
            transition={{duration: 0.5}}
            >
                <InputText 
                    onChange={handleChanges}
                    placeholder={props.placeholder}
                    spellCheck={props.spellCheck} 
                    className={`${props.className} ${!isValid ? "outline-red-500 border-red-500" : "outline-green-500" }`}
                />
            </motion.div>
        </>
    )
}

export default InputTextCPF