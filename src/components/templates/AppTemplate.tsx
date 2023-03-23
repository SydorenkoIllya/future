import { PropsWithChildren } from "react"

const AppTemplate: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <main style={{ margin: '0 50px', height: '100%' }}>{children}</main>
        </>
    )
}


export default AppTemplate;