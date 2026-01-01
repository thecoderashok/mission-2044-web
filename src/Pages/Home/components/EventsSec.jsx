import React from "react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../../components/SecTitle";
import Image from "../../../components/Image";
import Button from "../../../components/Button/Button";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";

const EVENTS = [
    {
        title: "Allied Innovation Summit",
        date: "March 18, 2026",
        location: "Washington, DC",
        image: "/images/about-sec-img-1.jpg",
    },
    {
        title: "Mission 2044 Field Series",
        date: "May 7, 2026",
        location: "London, UK",
        image: "/images/about-sec-img-2.jpg",
    },
    {
        title: "Resilience & Supply Chain Forum",
        date: "July 12, 2026",
        location: "Sydney, AUS",
        image: "/images/about-sec-img-1.jpg",
    },
    {
        title: "Resilience & Supply Chain Forum",
        date: "July 12, 2026",
        location: "Sydney, AUS",
        image: "/images/about-sec-img-1.jpg",
    },
];

const EventsSec = () => {
    return (
        <section className="events-sec pt-0">
            <div className="container">
                <SecTitle subTitle="Join us" mainTitle="What's Next?" />
                <div className="events-carousel">
                    <SwiperCarousel
                        slidesPerView={4}
                        spaceBetween={15}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            991: { slidesPerView: 4, spaceBetween: 15 },
                        }}
                        navigationBtns={false}
                        showPagination={false}
                    >
                        {EVENTS.map((event, index) => (
                            <SwiperSlide key={event.title}>
                                <ScrollReveal
                                    direction="clip-fade-up"
                                    delay={0.2 + index * 0.08}
                                >
                                    <article className="event-card">
                                        <div className="image-wrapper">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={640}
                                                height={400}
                                            />
                                        </div>
                                        <div className="text-content">
                                            <div className="card-meta">
                                                <span>{event.date}</span>
                                                <span>{event.location}</span>
                                            </div>
                                            <h3 className="title-text">{event.title}</h3>
                                            <Button
                                                textLabel="Learn more"
                                                customClass="bordered-transparent-2"
                                            />
                                        </div>
                                    </article>
                                </ScrollReveal>
                            </SwiperSlide>
                        ))}
                    </SwiperCarousel>
                </div>
            </div>
        </section>
    );
};

export default EventsSec;
