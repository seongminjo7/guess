import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";
import { useState } from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function ProductDetailPage() {
    const { addItemCart } = useCart()

    const state = useLocation().state; // useLocation = 여러가지 정보를 가져올 때 / Params = 한가지나 단순한 id값 같은 것만 받아올 때
    // console.log(state)

    const { id, imgs, title, price, option, category, colors, description } = state

    const setOpt = option.split(',').map(opt => opt.trim())
    const [selected, setSelected] = useState(setOpt && setOpt[0]);
    const [success, setSuccess] = useState(); // 장바구니 아이템 전송 여부

    const selectOpt = (e) => {
        setSelected(e.target.value)
        console.log(selected)
    }
    const addCart = () => {
        const product = { id, imgs, title, price, option: selected, quantity: 1 }

        addItemCart.mutate(product, {
            onSuccess: () => {
                console.log("✅ Firebase 저장 성공");
            },
            onError: (err) => {
                console.log("❌ Firebase 저장 실패", err);
            }
        })
    }


    return (
        <Container>
            <DatailInner>

                <DetailImg>
                    <div className="top">
                        <img src={imgs[0]} />
                        <img src={imgs[1]} />
                    </div>

                    <div className="full">
                        <img src={imgs[2]} />
                    </div>

                    <div className="half">
                        <img src={imgs[3]} />
                        <img src={imgs[4]} />
                    </div>

                    <div className="half">
                        <img src={imgs[5]} />
                        <img src={imgs[6]} />
                    </div>
                </DetailImg>

                <DetailText>
                    <h3>{title}</h3>
                    <p className="price">{Number(price).toLocaleString()}</p>
                    <DetailEct>
                        <div className="deliveryCharge"><p>배송비</p><p>30,000원 이상 구매시 무료배송</p></div>
                        <div className="deliveryScheduled"><p>배송예정</p><p>2일 이내 출고(주말, 공휴일 제외)</p></div>
                    </DetailEct>

                    <DetailOtp>
                        <div className="optBtns">
                            {setOpt && setOpt.map((opt, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className={selected === opt ? "active" : ""}
                                    onClick={() => setSelected(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </DetailOtp>

                    <DetailBtns>
                        <Link to='/cart'>
                            <button className="buyBtn" onClick={addCart}>BUY <FaPlus /></button>
                        </Link>
                        <button className="cartBtn" onClick={addCart}>CART <IoCartOutline /></button>
                    </DetailBtns>

                </DetailText>

            </DatailInner>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 80px 0;

    @media (max-width: 1024px){
        font-size: 14px;
    }
    @media (max-width: 812px){
        padding: 50px 0;
    }
`

const DatailInner = styled.div`
    /* width: 100%; */
    max-width: 1780px;
    margin: 0 auto;
    padding: 0 70px;

    display: flex;
    gap: 96px;
    align-items: flex-start;

    @media (max-width: 1400px){
        gap: 60px;
    }

    @media (max-width: 1024px){
        gap: 40px;
    }

    @media (max-width: 812px){
        flex-direction: column-reverse;
        padding: 0 40px;
    }

    @media (max-width: 420px){
        padding: 0 20px;
    }
`

const DetailImg = styled.div`
    width: 60%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    img{
        width: 100%;
        display: block;
    }

    .top, .half{
        display: flex;

        img{
            width: 50%;
            background-color: #EDEDED;
        }
    }

    @media (max-width: 812px){
        width: 100%;
        padding-top: 40px;
    }
`

const DetailText = styled.div`
    width: 40%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;

    h3{
        font-size: 2rem;
        position: relative;
        width: 100%;
        margin: 0;

        &::after{
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--main-black);
            margin-top: 20px;
        }
    }

    p{
        margin: 0;
    }

    p.price{
        font-weight: 200;
        font-size: 2rem;
        font-style: italic;
        padding: 40px 0 40px 6px;
        
    }

    @media (max-width: 812px){
        position: relative;
        width: 100%;
        padding-top: 100px;
                h3{
            font-size: 3rem;
        }

        p.price{
            font-size: 3rem;
        }
    }

`

const DetailEct = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    gap: 10px;

    border: none;
    border-top: 1px solid rgba(12, 12, 12, 0.2);
    border-bottom: 1px solid rgba(12, 12, 12, 0.2);

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 812px){
        font-size: 2.2rem;
    }
`

const DetailOtp = styled.div`
    margin-top: 30px;

    .optBtns {
        display: flex;
        align-items: center;
        gap: 18px;
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(12, 12, 12, 0.2);
        background: transparent;

        font-size: 1.2rem;
        font-weight: 200;
        cursor: pointer;

        transition: 0.2s;
    }

    button.active {
        background: var(--main-black);
        color: var(--main-white);
        border: none;
    }

    button:hover {
        border: 1px solid var(--main-black)
    }

    @media (max-width: 1024px){
        button {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 812px){
        button{
            font-size: 2.2rem;
        }
    }
`;

const DetailBtns = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 22px;
  align-self: flex-end;

  a{
    text-decoration: none;
  }

  button{
    border: 1px solid var(--main-black);
    background-color: transparent;
    padding: 8px 30px;
    border-radius: 75px;
    display: flex;
    gap: 10px;
    font-size: 1rem;
  }

    button:hover {
    background-color: var(--main-black);
    color: var(--main-white);
    cursor: pointer;
  }

      @media (max-width: 812px){
        button{
            font-size: 1.5rem;
        }
    }
`