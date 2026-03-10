import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext"
import { useContext } from 'react';
import styled from "styled-components";

import cat1 from "../image/category1.png";
import cat2 from "../image/category2.png";
import cat3 from "../image/category3.png";
import cat4 from "../image/category4.png";

export default function MainCategory() {

    const { categoryList } = useContext(CategoryContext)

    return (
        <Navigation>
            <ul>
                {categoryList.includes('outerwear') && (
                    <li><Link to="/products/outerwear">OUTERWEAR</Link></li>
                )}
                {categoryList.includes('shirts') && (
                    <li><Link to="/products/shirts">SHIRTS</Link></li>
                )}
                {categoryList.includes('pants') && (
                    <li><Link to="/products/pants">PANTS</Link></li>
                )}
                {categoryList.includes('accessories') && (
                    <li><Link to="/products/accessories">ACCESSORIES</Link></li>
                )}
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
    width: 100%;
    padding: 81px 80px;
    box-sizing: border-box;

    ul{
        display: flex;
        flex-direction: column;
        width: 100%;

       li {
            display: flex;
            width: 100%;
            font-family: var(--sub-font);
            font-size: 12rem;
            font-weight: 400;
            position: relative;

            a {
                position: relative; /* z-index 적용 가능 */
                z-index: 1;         /* 글자를 이미지 위로 */
                display: flex;
                width: 100%;          /* li 전체 폭 차지 */
                justify-content: flex-start; /* 기본 왼쪽 */
                color: var(--main-black);
                cursor: pointer;
                text-decoration: none;
                transition: 300ms;
            }

            /* 짝수 li 글자 오른쪽 끝 */
            &:nth-child(even) a {
                justify-content: flex-end; /* flex-end로 오른쪽 정렬 */
            }
        
            /* hover 스타일 */
            &:hover a {
                color: var(--main-white);
            }

            /* 첫 번째 li 배경 이미지 레이어 */
            &::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-size: cover;
                background-position: center;
                opacity: 0;                  /* 기본 숨김 */
                transition: opacity 0.3s;    /* 부드럽게 나타나도록 */
                z-index: 0;                  /* a 아래 */
            }
            
            &:hover::before{
                opacity: 1;
            } 

            &:nth-child(1)::before {
                background-image: url(${cat1});
            }

            &:nth-child(2)::before {
                background-image: url(${cat2});
            }

            &:nth-child(3)::before {
                background-image: url(${cat3});
            }

            &:nth-child(4)::before {
                background-image: url(${cat4});
            }
        } 
    }

    @media (max-width: 1400px){
        ul{
            li {
            font-size: 8rem;
            }
        }
    }

    @media (max-width: 812px){
        padding: 60px 40px;
    }

    @media (max-width: 624px){
        ul{
            li {
                font-size: 6rem;
            }
        }
    }

        @media (max-width: 420px){
        padding: 20px;
    }
`