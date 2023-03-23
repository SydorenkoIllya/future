import { useEffect, useState } from "react";
import CardItem from "../../molecules/CardItem/CardItem";
import { useExampleQueryQuery } from "./CardItemGroup.generated";
import Card1 from '../../../images/Card1.png'
import Card2 from '../../../images/Card2.png'
import Card3 from '../../../images/Card3.png'
import ToursPagination from "../../molecules/ToursPagination/ToursPagination";
import { useRecoilState } from "recoil";
import { counterSlides, itemsArr } from '../../../state/recoilAtoms'
import { StyledDiv, StyledWrapper } from "./styles";

interface IQueryItem {
    id: string,
    description: string,
    name: string,
    img: string,
    isLiked: boolean
}

const imgs = [Card1, Card2, Card3, Card1, Card2, Card3]

export default function CardItemGroup() {

    const [_counterSlides, setCounterSlides] = useRecoilState(counterSlides)
    const [_itemsArr, setItemsArr] = useRecoilState(itemsArr)

    const [offset, setOffset] = useState<number>(0)

    const { data } = useExampleQueryQuery({
        variables: {
            limit: 3,
            offset: 0
        }
    })
    useEffect(() => {
        if (data?.rockets && data.rockets.length && _itemsArr.length === 0) {
            const cardsArr = data.rockets.map((i: any, index) => {
                return {
                    ...i,
                    img: imgs[index],
                    isLiked: false
                }
            })
            setItemsArr([...cardsArr, ...cardsArr].map((i, index) => ({ ...i, id: String(index) })))
        }
        setCounterSlides(0)
        //eslint-disable-next-line
    }, [data?.rockets])


    function next() {
        if (_counterSlides >= _itemsArr.length - 3) return
        setCounterSlides(_counterSlides + 1)
        setOffset(offset - 400)

    }
    function prev() {
        console.log(_counterSlides);
        if (_counterSlides === 0) return
        setCounterSlides(_counterSlides - 1)
        setOffset(offset + 400)
    }

    function likeToggle(id: string) {
        const arr = _itemsArr.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    isLiked: !i.isLiked
                };
            } else {
                return i;
            }
        })
        setItemsArr(arr)
    }

    return (
        <>
            <ToursPagination next={next} prev={prev} />
            <StyledWrapper>
                <StyledDiv offset={offset}>
                    {_itemsArr.map((item: IQueryItem) => {
                        return <CardItem func={likeToggle} key={item.id} card={{ description: item.description, name: item.name }} img={item.img} id={item.id} />
                    })}
                </StyledDiv>
            </StyledWrapper>

        </>

    )
}

