import logo from "../image/logo.png"
import MainMenu from "./MainMenu"
import User from "./User"
import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection.js';


export default function Header() {
    const scrollDirection = useScrollDirection();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    // 스크롤이 'down'일 때만 'header-hidden' 클래스 적용
    const headerClass = scrollDirection === 'down' ? 'header-hidden' : '';

    return (
        <HeaderContainer className={headerClass}>
            <LogoWrapper>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="게스 로고 이미지" />
                    </Link>
                </Logo>
            </LogoWrapper>
            <NavigationWrapper>
                <PcNav>
                    <MainMenu />
                    <User />
                </PcNav>

                <MobileNavWapper>
                    <Ham onClick={() => setIsOpen(prev => !prev)}>
                        <span class="line01"></span>
                        <span class="line02"></span>
                        <span class="line03"></span>
                    </Ham>

                    <MobileNav $isOpen={isOpen}>
                        <User />
                        <MainMenu />
                    </MobileNav>
                </MobileNavWapper>
            </NavigationWrapper>
        </HeaderContainer>
    )
}

const NavigationWrapper = styled.div`
    height: 84px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 27px;
    border-bottom: 1px solid var(--main-black);
    box-sizing: border-box;
    transition: transform 0.3s ease-in-out;
    background-color: var(--main-white);

    @media (max-width: 812px){
        height: 60px;
    }
`;

const HeaderContainer = styled.header`
    position: fixed;
    top: 0; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    z-index: 9999;
    height: 168px; /* 84 + 84 */
    overflow: hidden; 

    /* 스크롤 다운 시 NavigationWrapper 숨김 */
    &.header-hidden > ${NavigationWrapper} {
        transform: translateY(-84px);
    }

    /* hover 시 다시 표시 */
    &.header-hidden:hover > ${NavigationWrapper} {
        transform: translateY(0); 
    }

    @media (max-width: 812px){
        height: 120px; /* 84 + 60 */
        overflow: visible;

        &.header-hidden > ${NavigationWrapper} {
            transform:none;
        }

        &.header-hidden:hover > ${NavigationWrapper} {
            transform: none; 
        }
    }
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--main-black);
    box-sizing: border-box;
    z-index: 10000; 
    background-color: var(--main-white);

    @media (max-width: 812px){
        height: 60px;
    }
`;

const Logo = styled.h1`
    width: 170px;
    cursor: pointer;

    a{
        display: block;
        width: 100%;
        height: 100%;
    }

    img{
        width: 100%;
        height: auto;
    }

    @media (max-width: 812px){
        width: 120px; 
    }
`;

const PcNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 812px){
        display: none;
    }
`

const MobileNavWapper = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 812px){
        display: flex;
    }
`

const MobileNav = styled.div`
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    height: calc(100vh - 120px);
    background-color: var(--main-white);
    box-sizing: border-box;
    padding: 10px 30px;

    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

    @media (min-width: 813px){
        display: none;
    }
`

const Ham = styled.div`
    display: none;
    width: 28px;
    height: 28px;
    position: relative;
    cursor: pointer;

    span {
        display: block;
        width: 100%;
        height: 3px;
        background: var(--main-black);
        position: absolute;
        left: 0;
        transition: 0.3s ease;
        border-radius: 3px;
    }

    .line01 { top: 4px; }
    .line02 { top: 13px; }
    .line03 { top: 22px; }

    @media (max-width: 812px){
        display: block;
    }
`
