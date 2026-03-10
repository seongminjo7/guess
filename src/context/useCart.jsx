import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./AuthContext";
import { updateCart, getCart, deleteCart } from "../api/firebase";

export default function useCart() {

    const { uid } = useAuthContext();
    console.log(uid);
    // 리액트에서 데이터 가져오고 업데이트

    const queryclient = useQueryClient();

    const cartInfo = useQuery({
        queryKey: ['cart', uid || ""],
        queryFn: () => getCart(uid),
        enabled: !!uid
    })

    const addItemCart = useMutation({
        mutationFn: (product) => updateCart(uid, product),
        onSuccess: () => {
            queryclient.invalidateQueries(['cart', uid])
            // 최신 상태로 업데이트 ( 쿠키값 초기화 시켜서 상품 정보를 항상 최신으로 )
        }
    })
    // useMutation 장바구니에 상품 추가하는 업데이트 작업

    const removeCart = useMutation({
        mutationFn: (id) => deleteCart(uid, id),
        onSuccess: () => {
            queryclient.invalidateQueries(['cart', uid])
        }
    })

    return { cartInfo, addItemCart, removeCart }
}