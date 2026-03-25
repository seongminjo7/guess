import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSwipers } from "../context/SwiperContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);


export default function MainVisual() {

    const wrapperRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 813px)", () => {
            const swiperEl = swiperRef.current;

            return gsap.fromTo(
                swiperEl,
                { width: "100%" },
                {
                    width: "70%",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                    ease: "none"
                }
            );
        });

        return () => mm.revert();
    }, []);

    const { swipers } = useSwipers();

    return (
        <MainVisualWrapper ref={wrapperRef}>
            <SwiperWrapper
                ref={swiperRef}
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
            >
                {swipers.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} alt={slide.id} />
                        <MainMoreWrapper>
                            <p>{slide.title}</p>
                            <Link to={slide.moreLink}>
                                view more <span>&#43;</span>
                            </Link>
                        </MainMoreWrapper>
                    </SwiperSlide>
                ))}
            </SwiperWrapper>
        </MainVisualWrapper>
    )
}

const MainVisualWrapper = styled.div`
    width: 100%;
    height: 350vh;
    position: relative;

    @media (max-width: 812px){
        height: 100vh;
    }
`

const SwiperWrapper = styled(Swiper)`
    /* margin-top: 84px;
    position: sticky;
    top: 168px;

    .swiper-slide {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        color: #333;

        img{
            width: 100%;
        }
    } */

         margin-top: 84px;
    position: sticky;
    top: 168px;

    height: calc(100vh - 168px);

    .swiper,
    .swiper-wrapper,
    .swiper-slide {
        height: 100%;
    }

    .swiper-slide {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (max-width: 812px){
        top: 144px;
        height: calc(100vh - 144px);
    }

    @media (max-width: 812px){
        top: 100px;
        height: calc(100vh - 100px);
    }
`;

const MainMoreWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--main-white);
    font-family: var(--sub-font);
    align-items: center;

    p{
        font-size: 4rem;
        box-sizing: border-box;
        border-bottom: solid 6px var(--main-white);
        margin: 0;
    }

    a{
        color: var(--main-white);
        text-decoration: none;
        /* font-family: var(--price-font); */
        font-size: 1.5rem;
        /* font-weight: 300; */

        span{
            vertical-align: -3px;
        }
    }
    
    @media (max-width: 1400px){
        p {
            font-size: 4rem;
        }
    }

     @media (max-width: 350px){
        p {
            font-size: 3.5rem;
        }
     }
`