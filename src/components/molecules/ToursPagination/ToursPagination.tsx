import PaginationArrow from "../../atoms/PaginationArrow/PaginationArrow";
import leftArrow from '../../../images/LeftArrow.svg'
import rightArrow from '../../../images/RightArrow.svg'
import { MouseEventHandler } from "react";
import { StyledArrowsWrapper, StyledP, StyledWrapped } from "./styles";

interface IToursPaginationProps {
    next: MouseEventHandler<HTMLButtonElement>
    prev: MouseEventHandler<HTMLButtonElement>
}

export default function ToursPagination({ next, prev }: IToursPaginationProps) {
    return (
        <StyledWrapped>
            <StyledP>POPULAR TOURS</StyledP>
            <StyledArrowsWrapper>
                <PaginationArrow scroll={prev} image={leftArrow} />
                <PaginationArrow scroll={next} image={rightArrow} />
            </StyledArrowsWrapper>
        </StyledWrapped>
    )
}