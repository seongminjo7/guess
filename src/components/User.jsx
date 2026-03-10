/* 나중에 다시 해야함 */
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { googleLogin, googleLogout, onUserState } from "../api/firebase";
import UserData from "./UserData";
import { SlLogin, SlLogout } from "react-icons/sl";

export default function User() {

    const [user, setUser] = useState();
    const login = () => {
        googleLogin().then(setUser)
    }

    const logout = () => {
        googleLogout().then(setUser)
    }

    useEffect(() => {
        onUserState((user) => {
            setUser(user);
        })
    }, []);

    return (
        <UserContainer>
            <CartBtn>
                <Link to='/cart'>
                    <p>&#91;</p>CART<p>&#93;</p>
                </Link>
            </CartBtn>
            <UserInfoWrapper>
                {user && user.isAdmin &&
                    <Link to='/products/upload'>업로드</Link>
                }
                {user ? (
                    <>
                        {/* <UserData user={user} /> */}
                        <button className="logoutBtn" onClick={logout}>LOGOUT <SlLogout /></button>
                    </>
                ) : (
                    <button className="loginBtn" onClick={login}>LOGIN <SlLogin /></button>
                )}
            </UserInfoWrapper>
        </UserContainer>
    )
}

const UserContainer = styled.div`
    height: 100%;
    display: flex;
    gap: 10px;
    font-size: 1.2rem;
    color: var(--main-black);
    align-items: center;

    @media (max-width: 812px){
        justify-self: flex-end;
        height: fit-content;
        font-size: 2.5rem;
    }
`

const CartBtn = styled.div`
                
            a{
                color: var(--main-black);
                transition: 500ms;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
                text-decoration: none;
                transform-origin: center;

                /* &:hover{
                    font-weight: 900;
                    transform: translateX(-0.05em) scale(1.01);
                } */

                p{
                    opacity: 0;
                    color: #EB1F2E;
                    font-weight: 900;
                }

                &:hover p{
                    opacity: 1;
                }
            }
            
`

const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    a{
        text-decoration: none;
        color: var(--main-black);
    }
    button{
        border: none;
        background-color: var(--main-white);
        border-radius: 75px;
        display: flex;
        gap: 10px;
        font-size: 1rem;
        cursor: pointer;
    }

    @media (max-width: 812px){
        button {
            font-size: 2.2rem;
        }
    }
`