import styled from "styled-components"
import ProductDetail from "./ProductDetail"

export default function ProductItem({ products }) {
    return (
        <ProductList>
            {products && products.map(el => (
                <li key={el.id}>
                    <ProductDetail product={el} />
                </li>
            ))}
        </ProductList>
    )
}

const ProductList = styled.ul`
    height: fit-content;
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    li{
        flex-basis: calc(25% - 30px);
        flex-shrink: 0;
    }

    @media (max-width: 1024px){
        li {
            flex-basis: calc(50% - 20px);
        }
    }
    
        @media (max-width: 420px){
        li {
            flex: 0 0 calc(100%);
        }
    }
`