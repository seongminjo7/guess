import styled from "styled-components";
import useCart from "../context/useCart"

export default function CartItem({ products, index }) {

    const { addItemCart, removeCart } = useCart();

    console.log(products)
    console.log(index)

    const plusItem = () => {
        addItemCart.mutate({ ...products, quantity: 1 })
    }

    const minusItem = () => {
        if (products.quantity < 2) {
            alert('상품 갯수는 1보다 작을 수 없습니다.')
            return
        }
        addItemCart.mutate({ ...products, quantity: -1 })
    }

    const itemDelete = () => {
        removeCart.mutate(products.variantId)
    }

    return (
        <CartItemList>
            <ProductImg>
                <img src={products.imgs[0]} alt={products.title} />
            </ProductImg>

            <ProductMainInfo>
                <p className="title">{products.title} / {products.option}</p>
                <p className="price">{Number(products.price).toLocaleString()}원</p>
            </ProductMainInfo>

            <Quantity>
                <p className="quantityPrice">{(Number(products.price) * products.quantity).toLocaleString()}원</p>
                <p className="quantity">수량 : {products.quantity}개</p>
                <QuantityBtns>
                    <button type="button" onClick={minusItem}>-</button>
                    <button type="button" onClick={plusItem}>+</button>
                </QuantityBtns>
            </Quantity>

            <DeleteBtn>
                <button type="button" onClick={itemDelete}>삭제</button>
            </DeleteBtn>
        </CartItemList>
    )
}

const CartItemList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--main-black);

    p{
        margin: 0;
    }

    @media (max-width: 812px){
        flex-direction: column;
        gap: 20px;
        padding-bottom: 30px;
    }
`

const ProductImg = styled.li`
    width: 200px;
    flex-shrink: 0;

    img{
        width: 100%;
    }

    @media (max-width: 1024px){
        width: 150px;
    }

    @media (max-width: 812px){
        width: 300px;
    }
`

const ProductMainInfo = styled.div`
    flex: 1;
    padding: 0 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    
    .title{
        font-size: 1.5rem;
    }

    .price{
        font-weight: 600;
    }

    @media (max-width: 812px){
        font-size: 2rem;

        .title{
            font-size: 2.5rem;
        }
    }
`

const Quantity = styled.div`
    width: 200px;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;

    .quantityPrice{
        font-size: 1.3rem;
        font-weight: 800;
    }

    .quantity{
        font-size: 1.2rem;
    }

    @media (max-width: 1024px){
        width: 150px;
    }

    @media (max-width: 812px){
        .quantityPrice {
            order: 3;
            font-size: 2rem;
        }

        .quantity {
            order: 1;
            font-size: 2rem;
        }
    }
`
const QuantityBtns = styled.div`

    display: flex;
    gap: 8px;

    button{
        width: 36px;
        height: 36px;
        border: 1px solid var(--main-black);
        background-color: transparent;
        border-radius: 75px;
        font-size: 1.5rem;
    }   
    
    button:hover {
        background-color: var(--main-black);
        color: var(--main-white);
        cursor: pointer;
    }

    @media (max-width: 812px){
        order: 2;
    }
`
const DeleteBtn = styled.div`

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
            font-size: 2rem;
        }
    }
`
