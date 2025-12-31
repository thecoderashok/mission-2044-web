import React, { useEffect, useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import Image from "../../../components/Image";
import "flag-icons/css/flag-icons.min.css";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import Button from "../../../components/Button/Button";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const TESTIMONIALS = [
    {
        avatar: "/images/avatar-1.jpg",
        quote:
            "Mission 2044 played a critical role in reshaping how we think about long-term resilience. Beyond high-level discussions, it connected us with the right partners, policymakers, and innovators who understood the real vulnerabilities in our supply chain. The conversations we had here translated directly into actionable strategies and lasting collaborations that continue to strengthen our operations.",
        name: "Sara Kline",
        designation: "CEO, Bastion Dynamics",
        country: "us",
    },
    {
        avatar: "/images/avatar-3.jpg",
        quote:
            "What sets Mission 2044 apart is the depth and seriousness of dialogue. This is not a surface-level conference — it is a working forum where decision-makers, defense leaders, and technology pioneers engage in meaningful collaboration. The ideas exchanged here are grounded in reality and focused on implementation, making it one of the most impactful platforms for resilience planning I’ve experienced.",
        name: "Rear Adm. Marco Esparza",
        designation: "Director, Allied Resilience Command",
        country: "gb",
    },
    {
        avatar: "/images/avatar-2.jpg",
        quote:
            "As a founder, finding a space where investors, operators, and strategists genuinely listen is rare. Mission 2044 delivered exactly that. We didn’t just leave inspired — we left with clear direction, new partnerships, and tangible opportunities. The quality of engagement and the long-term vision of the community make this an invaluable experience for any serious builder.",
        name: "Priya Malhotra",
        designation: "Co-Founder, ArcLight Systems",
        country: "in",
    },
    {
        avatar: "/images/avatar-3.jpg",
        quote:
            "What sets Mission 2044 apart is the depth and seriousness of dialogue. This is not a surface-level conference — it is a working forum where decision-makers, defense leaders, and technology pioneers engage in meaningful collaboration. The ideas exchanged here are grounded in reality and focused on implementation, making it one of the most impactful platforms for resilience planning I’ve experienced.",
        name: "Rear Adm. Marco Esparza",
        designation: "Director, Allied Resilience Command",
        country: "ae",
    },
];


const TestimonialsSec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || !navPrevRef.current || !navNextRef.current) return;

        if (!swiper.params.navigation) {
            swiper.params.navigation = {};
        }

        swiper.params.navigation.prevEl = navPrevRef.current;
        swiper.params.navigation.nextEl = navNextRef.current;

        if (swiper.navigation) {
            if (swiper.navigation.destroy) {
                swiper.navigation.destroy();
            }
            if (swiper.navigation.init) {
                swiper.navigation.init();
            }
            if (swiper.navigation.update) {
                swiper.navigation.update();
            }
        }
    }, []);


    return (
        <section className="testimonials-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 heading-wrapper">
                        <SecTitle
                            subTitle="Testimonials"
                            mainTitle="What our attendees are saying"
                        />

                        <ScrollReveal direction="fade-up" delay={0.8}>
                            <div className="slide-buttons">
                                <button
                                    type="button"
                                    ref={navPrevRef}
                                    className="slide-btn prev"
                                    aria-label="Previous slide"
                                />
                                <button
                                    type="button"
                                    ref={navNextRef}
                                    className="slide-btn next"
                                    aria-label="Next slide"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="clip-fade-up" delay={0.4}>
                        <div className="col-12">
                            <div className="testimonials-carousel">
                                <SwiperCarousel
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    breakpoints={{
                                        768: { slidesPerView: 1.5, spaceBetween: 32 },
                                        991: { slidesPerView: 3, spaceBetween: 20 },
                                    }}
                                    showPagination={false}
                                    navigationBtns={false}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                >
                                    {TESTIMONIALS.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <article className="testimonial-card">
                                                <span
                                                    className="quote-icon"
                                                    style={{
                                                        maskImage: `url(/icons/quote.png)`,
                                                        WebkitMaskImage: `url(/icons/quote.png)`,
                                                    }}
                                                />
                                                <div className="avatar">
                                                    <Image
                                                        src={testimonial.avatar}
                                                        alt={`${testimonial.name} headshot`}
                                                        width={96}
                                                        height={96}
                                                    />
                                                </div>
                                                <p className="quote-text">
                                                    {testimonial.quote}
                                                </p>
                                                <div className="meta-wrapper">
                                                    <h3 className="name-text">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="role-text">
                                                        <span className={`fi fi-${testimonial.country}`}></span>
                                                        {testimonial.designation}
                                                    </p>
                                                </div>
                                            </article>
                                        </SwiperSlide>
                                    ))}
                                </SwiperCarousel>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="col-12 btn-wrapper">
                        <Button
                            revealAnimation={true}
                            revealDelay={0.8}
                            textLabel={"View More"}
                            customClass={"bordered-transparent-2"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSec;
