import { useState } from "react";
import IconLinkButton from "../../atoms/IconLinkButton/IconLinkButton";
import LogoSpaceX from "../../atoms/LogoSpaceX/LogoSpaceX";
import NavButton from "../../atoms/NavButton/NavButton";
import UniversalButton from "../../atoms/UniversalButton/UniversalButton";
import NavButtonGroup from "../../molecules/NavButtonGroup/NavButtonGroup";
import { StyledAsideDiv, StyledNav, StyledOpacity } from "./styles";


interface TNavbarProps {
    active?: boolean
}

export default function NavBar({ active }: TNavbarProps) {
    const NavButtonsNames: string[] = ['HOME', 'TOURS', 'ABOUT', 'HELP']
    const [activeName, setActiveName] = useState<string>(NavButtonsNames[0])

    return (
        <>
            <StyledOpacity />
            <StyledNav>
                <LogoSpaceX />
                <NavButtonGroup>
                    <NavButtonGroup>
                        {NavButtonsNames.map((item, i) => {
                            return <NavButton key={i} children={item} active={activeName === item ? true : false} activeName={activeName} setActiveName={setActiveName} />
                        })}
                    </NavButtonGroup>
                </NavButtonGroup>
                <StyledAsideDiv>
                    <IconLinkButton active={active} />
                    <UniversalButton width={163} children='SIGN IN' />
                </StyledAsideDiv>
            </StyledNav>
        </>
    )
}