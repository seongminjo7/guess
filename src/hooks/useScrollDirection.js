// import { useState, useEffect } from 'react';

// const useScrollDirection = () => {
//     const [scrollDir, setScrollDir] = useState("up");
//     const threshold = 10; // 스크롤 감지 시작 위치
//     const delta = 5; // 최소 스크롤 이동 픽셀

//     useEffect(() => {
//         let lastScrollY = window.pageYOffset;
//         let ticking = false;

//         const updateScrollDir = () => {
//             const currentScrollY = window.pageYOffset;

//             if (Math.abs(currentScrollY - lastScrollY) < delta) {
//                 ticking = false;
//                 return;
//             }

//             if (currentScrollY > lastScrollY && currentScrollY > threshold) {
//                 setScrollDir("down"); // 아래로 스크롤
//             } else {
//                 setScrollDir("up"); // 위로 스크롤
//             }

//             lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
//             ticking = false;
//         };

//         const onScroll = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(updateScrollDir);
//                 ticking = true;
//             }
//         };

//         window.addEventListener("scroll", onScroll);

//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     return scrollDir;
// };

// export default useScrollDirection;

import { useState, useEffect } from "react";

const useScrollDirection = () => {
    const [scrollDir, setScrollDir] = useState("up");
    let lastScrollY = 0;

    useEffect(() => {
        lastScrollY = window.pageYOffset;

        const onScroll = () => {
            const currentScrollY = window.pageYOffset;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setScrollDir("down");
            } else {
                setScrollDir("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollDir;
};

export default useScrollDirection;
