import { createContext, useContext } from "react";
import main1 from "../image/main1.jpg";
import main2 from "../image/main2.jpg";
import main3 from "../image/main3.jpg";

const SwiperContext = createContext();

export const SwiperProvider = ({ children }) => {
    const swipers = [
        {
            id: 1,
            title: '2026 DENIM STYLE',
            image: main1,
            moreLink: "/products/denim",
        },
        {
            id: 2,
            title: 'White Day Gift',
            image: main2,
            moreLink: "/products/accessories",
        },
        {
            id: 3,
            title: 'WINTER COLLECTION',
            image: main3,
            moreLink: "/products/outerwear"
        },
    ]

    return (
        <SwiperContext.Provider value={{ swipers }}>
            {children}
        </SwiperContext.Provider>
    )
}

export const useSwipers = () => useContext(SwiperContext)