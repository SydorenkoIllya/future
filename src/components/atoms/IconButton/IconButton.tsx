import Heart from '../../../images/Heart.svg'
import { StyledButton } from './styles'

interface IIconButtonProps {
    icon?: string
    func: (id: string) => void
    id: string
}

export default function IconButton({ icon, func, id }: IIconButtonProps) {
    return (
        <StyledButton onClick={() => func(id)}>
            <img src={icon ? icon : Heart} alt='heart' />
        </StyledButton>
    )
}