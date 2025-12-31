import React from "react";
import Image from "../../../components/Image";
import SecTitle from "../../../components/SecTitle";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const LEADER_LOGOS = Array.from({ length: 62 }, (_, index) => ({
    src: `/images/leaders/logo-${index + 1}.png`,
}));

const LeadersSec = () => {
    return (
        <section className="leaders-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SecTitle mainTitle="Attended by Industry Leaders" />
                    </div>

                    <ScrollReveal direction="fade-in" delay={0.4} duration={1.2}>
                        <div className="col-12 carousel-col">
                            <SwiperCarousel
                                slidesPerView={7}
                                spaceBetween={20}
                                speed={6000}
                                autoplay
                                autoplayDelay={0}
                                loop
                                allowTouchMove={false}
                                simulateTouch={false}
                                navigationBtns={false}
                                showPagination={false}
                            >
                                {LEADER_LOGOS.map((item, index) => (
                                    <SwiperSlide key={`row1-${index}`}>
                                        <div className="logo-item">
                                            <Image src={item.src} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </SwiperCarousel>

                            <SwiperCarousel
                                slidesPerView={7}
                                spaceBetween={20}
                                speed={6000}
                                autoplay
                                autoplayDelay={0}
                                reverseDir
                                loop
                                allowTouchMove={false}
                                simulateTouch={false}
                                navigationBtns={false}
                                showPagination={false}
                            >
                                {LEADER_LOGOS.map((item, index) => (
                                    <SwiperSlide key={`row2-${index}`}>
                                        <div className="logo-item">
                                            <Image src={item.src} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </SwiperCarousel>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default LeadersSec;
