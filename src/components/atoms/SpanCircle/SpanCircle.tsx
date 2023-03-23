import { StyledSpan } from "./styles"

interface ISpanCircleProps {
    id: number,
    active: boolean
}
export default function SpanCircle({ active }: ISpanCircleProps) {


    return <StyledSpan active={active} />

} 