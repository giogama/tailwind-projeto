import { ReactNode } from "react"

interface PaginaProps {
    children?: ReactNode
}

export function Pagina(props: PaginaProps) {
    return (
        <div>{props.children}</div>
    )
}