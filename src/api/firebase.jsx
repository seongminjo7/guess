import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { get, getDatabase, ref, remove } from "firebase/database";
import { set } from "firebase/database";
import { v4 as uuid } from 'uuid'
import { keyValue } from "../util/CartKey";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const provider = new GoogleAuthProvider();
const auth = getAuth()


// 구글 자동 로그인 방지
provider.setCustomParameters({
    prompt: 'select_account'
})

// 구글 로그인
export async function googleLogin() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        return user
    } catch (error) {
        console.error(error)
    }
}

// 구글 로그아웃
export async function googleLogout() {
    try {
        await signOut(auth) // 기존의 정보를 초기화 해주는 hook
    } catch (error) {
        console.error(error)
    }
}

// 새로고침해도 로그인 유지
export function onUserState(callback) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const updateUser = await adminUser(user)
                callback(updateUser)
            } catch (error) {
                console.error(error)
            }
        } else {
            callback(null)
        }
    })
    // onAuthStateChanged 시용자의 인증 상태 변화를 체크
}

async function adminUser(user) {
    try {
        const snapshot = await get(ref(database, 'admin'));
        if (snapshot.exists()) {
            const admins = snapshot.val()
            const isAdmin = admins.includes(user.email)
            return { ...user, isAdmin }
        }
        return user
    } catch (error) {
        console.error(error)
    }
}

// 상품 정보를 파이어베이스에 업로드
export async function addProduct(product) {
    const id = uuid()
    return set(ref(database, `products/${id}`), {
        ...product,
        id,
        imgs: product.imgs
    })
}

// 상품 가져오기
export async function getProduct() {
    const snapshot = await get(ref(database, 'products'))
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    } else {
        return []
    }
}

// 카테고리별 상품 가져오기
export async function getCategoryProduct(category) {
    return get(ref(database, 'products')).then(snapshot => {
        if (snapshot.exists()) {
            const allProduct = Object.values(snapshot.val());
            const fillterProduct = allProduct.filter(product => product.category === category)
            return fillterProduct
        }
    })
}

// 장바구니 리스트 불러오기
export async function getCart(userId) {
    try {
        const snapshot = await (get(ref(database, `cart/${userId}`)));
        if (snapshot.exists()) {
            const item = snapshot.val()
            return Object.entries(item).map(([id, value]) => ({ id, ...value })).filter(Boolean);
        } else {
            return []
        }
    } catch (error) {
        console.error(error);
    }
}

// 장바구니 정보 업데이트
export async function updateCart(userId, product) {
    const variantId = keyValue({ id: product.productId ?? product.id, option: product.option });

    const itemRef = ref(database, `cart/${userId}/${variantId}`);

    const snap = await get(itemRef);
    const prev = snap.exists() ? snap.val() : null;

    const prevQty = Number(prev?.quantity) || 0;
    const itemDelta = Number(product.quantity) || 1;
    const nextQty = prevQty + itemDelta;

    if (nextQty < 1) nextQty = 1;

    await set(itemRef, {
        ...product,
        id: product.productId ?? product.id,   // ⭐ 원래 상품 id 유지
        productId: product.productId ?? product.id,
        variantId,                             // ⭐ variantId 따로 저장
        quantity: nextQty,
    });
}

export async function deleteCart(userId, variantId) {
    return remove(ref(database, `cart/${userId}/${variantId}`))
}