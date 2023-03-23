import { MouseEventHandler } from "react"
import { StyledButton } from "./styles"

type TMiniButtonProps = {
    image: string,
    scroll: MouseEventHandler<HTMLButtonElement>
}

export default function MiniButton({ image, scroll }: TMiniButtonProps) {
    return (
        <StyledButton onClick={scroll}>
            <img src={image} alt="arrow" />
        </StyledButton>
    )
}