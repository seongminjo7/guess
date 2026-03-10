import styled from "styled-components"
import ProductItem from "./ProductItem"

export default function CategoryProduct({ category, product }) {
    return (
        <Container>
            {/* <h2>{category}상품 페이지입니다.</h2> */}
            <ProductItem products={product} />
        </Container>
    )
}

const Container = styled.div`
    /* width: 100%; */
    /* max-width: 1600px; */
    /* margin: 0 auto; */
    padding: 180px 85px;

    @media (max-width: 812px){
        padding: 140px 40px 40px;
    }

    @media (max-width: 420px){
        padding: 140px 20px 40px;
    }
`