import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategoryProduct } from "../api/firebase"
import CategoryProduct from "../components/CategoryProduct"

export default function CategoryPage() {

    const { category } = useParams([])

    const [product, setProduct] = useState([])
    useEffect(() => {
        getCategoryProduct(category).then(item => {
            setProduct(item)
        })
            .catch(error => {
                console.error(error)
            })
    }, [category])

    return (
        <>
            <CategoryProduct category={category} product={product} />
        </>
    )
}