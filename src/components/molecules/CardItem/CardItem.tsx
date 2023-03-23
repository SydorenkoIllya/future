import IconButton from "../../atoms/IconButton/IconButton"
import { CardItemFragment } from "./CardItem.generated"
import { StyledButton, StyledCardDiv, StyledDescription, StyledDivWrapper, StyledImg, StyledName } from "./styles"

interface Props {
    card: CardItemFragment
}

interface TCardItemProps extends Props {
    img: string
    icon?: string,
    func: (id: string) => void,
    id: string
}

export default function CardItem({ card, img, icon, func, id }: TCardItemProps) {
    const { description, name } = card

    return (
        <StyledDivWrapper>
            <StyledImg src={img} alt="tripItem" />
            <StyledCardDiv>
                <StyledName>{name}</StyledName>
                <StyledDescription>{description}</StyledDescription>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <StyledButton>BUY</StyledButton>
                    <IconButton func={func} id={id} icon={icon} />
                </div>
            </StyledCardDiv>
        </StyledDivWrapper>
    )
}


