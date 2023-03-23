import CardItem from "../../molecules/CardItem/CardItem";
import Delete from '../../../images/Delete.svg'
import { itemsArr, TItemsArr } from "../../../state";
import { useRecoilState } from "recoil";
import { StyledAltText, StyledClear, StyledWrapper } from "./styles";



export default function FavouriteList() {
    const [_itemsArr, setItemsArr] = useRecoilState(itemsArr)

    function deleteLiked(id: string) {
        const arr = _itemsArr.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    isLiked: false
                };
            } else {
                return i;
            }
        })
        setItemsArr(arr)
    }


    const likedItems = _itemsArr.filter(item => item.isLiked)
    function clearAll() {
        setItemsArr(_itemsArr.map(i => ({ ...i, isLiked: false })))
    }
    return (
        <>
            {likedItems.length === 0 ? <StyledAltText>Add something to favourites!</StyledAltText> :
                <>
                    <StyledClear onClick={clearAll}>Clean all</StyledClear>
                    <StyledWrapper>
                        {likedItems.map((i: TItemsArr) => {
                            return <CardItem func={deleteLiked} key={i.id} id={i.id} card={{ name: i.name, description: i.description }} img={i.img} icon={Delete} />
                        })}
                    </StyledWrapper>
                </>
            }

        </>
    )
}