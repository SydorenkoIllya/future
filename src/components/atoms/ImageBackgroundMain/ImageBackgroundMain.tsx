import { useState } from 'react'
import Banner1 from '../../../images/Banner1.svg'
import Banner2 from '../../../images/Banner2.svg'
import Banner3 from '../../../images/Banner3.svg'
import ScrollDownButton from '../../molecules/ScrollDownButton/ScrollDownButton'
import SpanCircle from '../SpanCircle/SpanCircle'
import { CirclesWrapper, StyledButton, StyledImg, StyledMainText, StyledSpan, Wrapper } from './styles'

interface IButtonsArr {
    id: number,
    active: boolean
}

const images = [Banner1, Banner2, Banner3]

export default function ImageBackgroundMain() {
    const [activeButton, setActiveButton] = useState<number>(1)
    const [buttons, setButtons] = useState<IButtonsArr[]>([{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: false }])

    function handleClick(id: number) {
        const arr = buttons.map(i => {
            if (i.id === id && !i.active) {
                setActiveButton(i.id)
                return {
                    ...i,
                    active: true
                }
            } else if (i.id === id && i.active) {
                return i;
            } else {
                return {
                    ...i,
                    active: false
                };
            }
        })
        setButtons(arr)

    }
    return (
        <div style={{ position: 'relative', minHeight: '740px' }}>
            <Wrapper>
                <StyledMainText>THE SPACE IS WAITING FOR</StyledMainText>
                <CirclesWrapper>
                    {buttons.map((i, index) => {
                        return <StyledButton key={index} onClick={() => handleClick(i.id)}><SpanCircle id={i.id} active={i.active} /></StyledButton>
                    })}
                </CirclesWrapper>
                <StyledSpan>YOU</StyledSpan>
            </Wrapper>
            <ScrollDownButton />
            <StyledImg alt='Main Banner' src={images[activeButton - 1]} />
        </div>
    )
}