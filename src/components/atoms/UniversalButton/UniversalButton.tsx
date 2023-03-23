import { StyledButton } from "./styles"

type TUnvirsalButtonProps = {
    children: string,
    width: number
}



export default function UniversalButton({ children, width }: TUnvirsalButtonProps) {
    return (
        <StyledButton width={width}>{children}</StyledButton>
    )
}