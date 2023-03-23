import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Heart from '../../../images/Heart.svg'
import whiteHeart from '../../../images/whiteHeart.svg'
import { StyledButton } from './styles'


interface TIconButtonProps {
    active?: boolean
}


export default function IconLinkButton({ active }: TIconButtonProps) {
    console.log(active);
    return (
        <Link to='/favourite' >
            <StyledButton style={{ backgroundColor: active ? '#DD377D' : '#ECECEC' }}>
                <img src={active ? whiteHeart : Heart} alt='heart' />
            </StyledButton>
        </Link>
    )
}