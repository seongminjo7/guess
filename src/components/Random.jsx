import { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { CategoryContext } from "../context/CategoryContext"
import ProductDetail from "./ProductDetail";


export default function Random({ products = [] }) {
    const { categoryList } = useContext(CategoryContext);
    const [pickedProducts, setPickedProducts] = useState([]);

    const isPicked = useRef(false);

    useEffect(() => {
        if (products.length === 0) return;
        if (isPicked.current) return;

        const result = categoryList
            .map((category) => {
                const filtered = products.filter(
                    (product) =>
                        product.category?.toLowerCase() === category.toLowerCase()
                );

                if (filtered.length === 0) return null;

                return filtered[Math.floor(Math.random() * filtered.length)];
            })
            .filter(Boolean);

        setPickedProducts(result);
        isPicked.current = true;
    }, [products, categoryList]);

    if (pickedProducts.length === 0) return null;

    return (
        <RandomWrapper>
            <TopText>
                <span>I GUESS</span>
                <p>you might like...</p>
            </TopText>

            <BottomSlide>
                {pickedProducts.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
            </BottomSlide>
        </RandomWrapper>
    );
}

const RandomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 120px 0 120px 0;

    @media (max-width: 1400px){
        padding: 120px 0 40px 0;
    }

    @media (max-width: 1024px){
        padding: 0;
        padding-top: 120px;
    }

    @media (max-width: 812px){
        padding-top: 40px;
    }

    @media (max-width: 420px){
        padding: 20px;
    }
`

const TopText = styled.div`
    position: relative;
    font-family: var(--random-font);
    padding-left: 70px;

    span{
        position: absolute;
        left: 70px;
        top: 0;
        font-size: 2rem;
    }

    p{
        width: fit-content;
        font-size: 12rem;
        
        margin: 0;
        padding: 0;
        line-height: 1;
        display: inline-block;
    }

    @media (max-width: 1400px){

        span{
            font-size: 1.8rem;
        }

        p{
            font-size: 8rem;
        }
    }

    @media (max-width: 812px){
        padding-left: 40px;

        span{
            left: 40px;
        }
    }

    @media (max-width: 624px){

        span{
            font-size: 1.4rem;
        }

        p{
            font-size: 6rem;
        }
    }

    @media (max-width: 420px){
        padding: 0;

        span{
            left: 0;
        }
    }
`

const BottomSlide = styled.div`
    display: flex;
    gap: 70px;
    padding: 0 70px;

    @media (max-width: 1400px){
        gap: 30px;
    }

    @media (max-width: 812px){
        flex-wrap: wrap;
        padding: 0 40px;
        gap: 20px;

        div{
            flex: 0 0 calc(50% - 10px);
        }
    }

    @media (max-width: 420px){
        padding: 0;

        div{
            flex: 0 0 calc(100%);
        }
    }
`;
