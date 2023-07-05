import { Center } from "./Center"

export const CenterWrapper = ({children} : {children: React.ReactNode}) => {
    return <div className="w-full h-1/2 bg-darkest">
       {children}
    </div>
}