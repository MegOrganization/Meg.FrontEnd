import { FC } from "react"


enum ESubmitButtonType{
    "submit",
    "reset"

}

interface ISubmitButton {
    value: string,
    className?: string,
    type?: ESubmitButtonType

}

const SubmitButton: FC<ISubmitButton> = (props: ISubmitButton) => {
    return(
    <>
        <input type={props.type==ESubmitButtonType.reset ? "reset" : "submit"} value={props.value} className={`
        ${props.className} 
        text-white 
        rounded 
        justify-center 
        items-center 
        transition-all
        hover:bg-secondary 
        ${props.type==ESubmitButtonType.reset ? 
            `
            bg-red-500
            hover:bg-red-700
            `
            :
            `
            bg-primary
            hover:bg-secondary
            `
        }
        `}
        
        />
    </>
    )
}

export {ESubmitButtonType}
export default SubmitButton