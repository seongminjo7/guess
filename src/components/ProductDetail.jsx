import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductDetail({ product }) {
    const navigate = useNavigate();
    const detailNavigate = () => {
        navigate(`/products/detail/${product.id}`,
            {
                state: {
                    title: product.title,
                    id: product.id,
                    imgs: product.imgs,
                    price: product.price,
                    option: product.option,
                    category: product.category,
                    colors: product.colors,
                    description: product.description
                }
            })
    }

    const [hover, setHover] = useState(false);

    return (
        <DetailItem onClick={detailNavigate}>
            <ImgBox
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img
                    src={
                        hover && product.imgs?.[1]
                            ? product.imgs[1]
                            : product.imgs[0]
                    }
                    alt={product.title}
                />
            </ImgBox>
            <TextBox>
                <About>
                    <p className="title">{product.title}</p>
                    <p className="price">{Number(product.price).toLocaleString()}</p>
                </About>
            </TextBox>
        </DetailItem>
    )
}

const DetailItem = styled.div`
height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 25px;
    cursor: pointer;
`

const ImgBox = styled.div`
    background-color: #ededed;

    img{
        display: block;
        width: 100%;
        transition: opacity 300ms ease;
    }
`

const TextBox = styled.div`
    width: 100%;
    display: flex;
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p{
        margin: 0;
    }

    .title{
        font-weight: 600;
        font-size: 1.5rem;
    }

    .price{
        font-size: 1.2rem;
    }

    @media (max-width: 812px){
        .title{
            font-size: 2rem;
        }   

        .price{
            font-size: 1.8rem;
        }
    }
`