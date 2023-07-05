import { useNavigate } from "react-router-dom"

export const HeaderItem = ({text, path} : {text: string, path: string}) => {
    const navigate = useNavigate()
    return <div onClick={() => navigate(path)}className="w-[20%] text-white hover:bg-light hover:text-black border-2 rounded-xl h-1/2 flex flex-column items-center justify-center">{text}</div>
}