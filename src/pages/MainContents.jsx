import { data, Route, Routes } from "react-router-dom";
import { SwiperProvider } from "../context/SwiperContext";
import MainVisual from "../components/MainVisual";
import MainCategory from "../components/MainCategory";
import Random from "../components/Random";
import { useEffect, useState } from "react";
import { getProduct } from "../api/firebase";

export default function MainContents() {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProduct().then((data)=> setProducts(data))
    })

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <SwiperProvider>
                            <MainVisual />
                        </SwiperProvider>
                        <Random products={products} />
                        <MainCategory />
                    </>
                }
            />
        </Routes>
    )
}