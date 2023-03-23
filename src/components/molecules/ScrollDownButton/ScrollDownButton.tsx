import Arrow from '../../../images/Arrow.svg'
import { StyledHeader, StyledImg, StyledWrapper } from './styles'

export default function ScrollDownButton() {
    const scrollDown = () => {
        window.scroll({ top: 9999 })
    }
    return (
        <StyledWrapper onClick={scrollDown}>
            <StyledHeader>Explore tours</StyledHeader>
            <StyledImg src={Arrow} alt="arrow" />
        </StyledWrapper>
    )
}