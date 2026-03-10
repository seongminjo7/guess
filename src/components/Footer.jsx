import styled from "styled-components"
import facebook from "../image/sns_facebook.png"
import insta from "../image/sns_insta.png"
import blog from "../image/sns_blog.png"
import kakao from "../image/sns_kakao.png"

export default function Footer() {
    return (
        <FooterWrapper>
            <FTop>
                <p>SEXY, YOUNG, ADVENTUROUS</p>
                <SnsWrapper>
                    <li>
                        <a href="https://www.facebook.com/GUESSSouthKorea" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="게스 페이스북 페이지" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/guess/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="게스 인스타그램 페이지" />
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.naver.com/guess_korea" target="_blank" rel="noopener noreferrer">
                            <img src={blog} alt="게스 블로그" />
                        </a>
                    </li>
                    <li>
                        <a href="https://pf.kakao.com/_xoNUJV" target="_blank" rel="noopener noreferrer">
                            <img src={kakao} alt="게스 카카오톡 페이지" />
                        </a>
                    </li>
                </SnsWrapper>
            </FTop>
            <FMiddle>
                <li>
                    <h3>주소</h3>
                    <p>06181 서울특별시 강남구 테헤란로 534,
                        글라스타워빌딩 28층</p>
                </li>
                <li>
                    <h3>쇼핑몰 관련문의</h3>
                    <p>1544-7665</p>
                </li>
                <li>
                    <h3>운영 시간</h3>
                    <p>AM 09:00 - PM 06:00 (토, 일 공휴일 휴무)</p>
                </li>
                <li>
                    <h3>카카오톡 상담</h3>
                    <p>@게스코리아 (A/S 문의만 가능)</p>
                </li>
            </FMiddle>
            <FBottom>
                <p>This is a non-commercial recreation of an existing website, created for portfolio purposes only.</p>
            </FBottom>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    width: 100%;
    padding: 20px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    p,h3{
        margin: 0;
    }

    @media (max-width: 420px){
        padding: 20px;
    }

`

const FTop = styled.div`
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid var(--main-black);

    p{
        font-family: var(--sub-font);
        font-size: 1.5rem;
    }
`

const SnsWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

const FMiddle = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 225px;
    gap: 80px;
    border-bottom: 1px solid var(--main-black);

    li{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media (max-width: 1024px){
        height: 150px;
        /* gap: 30px; */
    }
    
    @media (max-width: 812px){
        flex-direction: column;
        gap: 5px;

        li{
            font-size:1.5rem;
            flex-direction: row;
            h3{
                /* display: none; */
            }
        }
    }
`
const FBottom = styled.div`
    align-self: flex-end;
    font-family: var(--sub-font);
        font-size: 1.5rem;
`
