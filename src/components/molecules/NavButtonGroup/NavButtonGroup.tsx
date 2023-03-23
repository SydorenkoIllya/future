import { PropsWithChildren } from "react";
import { StyledDiv } from "./styles";

export default function NavButtonGroup({ children }: PropsWithChildren): JSX.Element {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>


    )
}