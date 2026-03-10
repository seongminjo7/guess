import styled from "styled-components";
import useCart from "../context/useCart"
import CartItem from "../components/CartItem";

export default function MyCart() {

    const { cartInfo: { data: products } } = useCart();

    const isItem = products && products.length > 0;

    console.log(products)

    const totalPrice = products?.reduce((acc, cur) => {
        return acc + Number(cur.price) * cur.quantity;
    }, 0)

    return (
        <Container>
            {!isItem && <EmptyText>장바구니에 상품이 없습니다.</EmptyText>}

            {isItem && (
                <>
                    <CartList>
                        {products && products.map((el, idx) => (
                            <CartItem key={el.id} products={el} index={idx} />
                        ))}
                    </CartList>

                    <TotalBox>
                        <p>총 합계:<span> {totalPrice.toLocaleString()}원</span></p>
                    </TotalBox>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1400px;
    /* width: 100%; */
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1400px){
        min-height: calc(100vh - 290px);
    }

    @media (max-width: 812px){
        min-height: calc(100vh - 480px);
        display: block;
        padding: 0 40px 20px 40px;
    }
    
    @media (max-width: 420px){
        padding: 0 20px 20px;
    }
`

const EmptyText = styled.p`
    margin-top: 200px;
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
`

const CartList = styled.ul`
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    
    & > *:last-child {
        border-bottom: none;
    }

    @media (max-width: 812px){
        width: 100%;
        margin-top: 120px;
    }
`

const TotalBox = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    padding-top: 180px;
    position: sticky;
    top: 0;
    font-size: 1.5rem;
    
    span{
        font-weight: 800;
    }

    @media (max-width: 812px){
        width: 100%;
        padding-top: 0;
        justify-content: flex-end;
        border-top: 2px solid var(--main-black);
    }

    @media (max-width: 590px){
        font-size: 2.5rem;
    }
`