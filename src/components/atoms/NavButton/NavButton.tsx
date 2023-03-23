import { Link } from "react-router-dom"
import { SpanWrapper, StyledDiv, StyledP, StyledSpan } from "./styles";

interface TNavButtonProps {
    children: string,
    active: boolean,
    activeName: string,
    setActiveName: Function
}

export default function NavButton({ children, active, activeName, setActiveName }: TNavButtonProps) {

    const handleClick = (e: any) => {
        console.dir(e.target);
        if (e.target.textContent !== activeName && (e.target.localName === 'p' || e.target.localName === 'div')) {
            setActiveName(e.target.textContent)
        }
    }

    return (
        <Link to={children === 'HOME' ? '/' : ''}>
            <StyledDiv onClick={(e) => handleClick(e)}>
                <StyledP>{children}</StyledP>
                <SpanWrapper>
                    <StyledSpan active={active} />
                </SpanWrapper>
            </StyledDiv>
        </Link>

    )
}