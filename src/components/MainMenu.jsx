import styled from "styled-components"
import { CategoryContext } from "../context/CategoryContext"
import { Link } from "react-router-dom"
import React, { useContext } from 'react';

export default function MainMenu() {

    const { categoryList } = useContext(CategoryContext)

    return (
        <Navigation>
            <ul>
                {categoryList.map((el, idx) => (
                    <li key={idx}>
                        <Link to={`/products/${el}`}>
                            <p>&#91;</p>{el.toUpperCase()}<p>&#93;</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
    
    ul{
        display: flex;
        align-items: center;
        width: fit-content;
        font-size: 1.2rem;

        li{
            display: flex;
            align-items: center;
            
            a{
                color: var(--main-black);
                transition: 500ms;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                text-decoration: none;
                transform-origin: center;

                &:hover{
                    font-weight: 900;
                    transform: translateX(-0.05em) scale(1.01);
                }

                p{
                    opacity: 0;
                    color: #EB1F2E;
                    font-weight: 900;
                }

                &:hover p{
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 812px){
        ul{
            flex-direction: column;
            align-items: flex-start;
            font-size: 3rem;
        }
    }
`