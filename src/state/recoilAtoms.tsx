import { atom } from "recoil";

export type TItemsArr = {
    id: string,
    description: string,
    name: string,
    img: string
    isLiked: boolean
}

export const counterSlides = atom({
    key: 'counterSlides',
    default: 0
})

export const itemsArr = atom<TItemsArr[]>({
    key: 'itemsArr',
    default: []
})