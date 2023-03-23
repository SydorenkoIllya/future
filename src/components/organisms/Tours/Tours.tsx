// import ToursPagination from "../molecules/ToursPagination";
import CardItemGroup from "../CardItemGroup/CardItemGroup";
import threeDots from '../../../images/ThreeDots.svg'
import { StyledDiv } from "./styles";
export default function Tours() {
    return (
        <StyledDiv>
            <CardItemGroup />
            <img style={{}} src={threeDots} alt="" />
        </StyledDiv>
    )
}