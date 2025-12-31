import React from "react";
import Image from "../../../components/Image";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../../components/SecTitle";
import Button from "../../../components/Button/Button";

const SPEAKERS = [
    {
        name: "Lt. Gen. Aisha Donovan",
        designation: "Commander, Allied Innovation Task Force",
        image: "/images/speakers/1.jpg",
    },
    {
        name: "Dr. Mateo Sinclair",
        designation: "Founder, Sentinel Systems",
        image: "/images/speakers/2.jpg",
    },
    {
        name: "Adm. Rachel Whitaker",
        designation: "Strategic Advisor, North Atlantic Fleet",
        image: "/images/speakers/3.jpg",
    },
    {
        name: "Evan Brooks",
        designation: "Managing Partner, Horizon Defense Capital",
        image: "/images/speakers/4.jpg",
    },
    {
        name: "Valerie Chen",
        designation: "CEO, Atlas Quantum Shields",
        image: "/images/speakers/5.jpg",
    },
    {
        name: "Col. Ibrahim Saleh",
        designation: "Chief Strategist, Coalition Cyber Division",
        image: "/images/speakers/6.jpg",
    },
    {
        name: "Marta Delgado",
        designation: "Director, Frontier Supply Labs",
        image: "/images/speakers/7.jpg",
    },
    {
        name: "Dr. Julian Park",
        designation: "Head of Resilience, TerraGrid Analytics",
        image: "/images/speakers/8.jpg",
    },
];

const SpeakersSec = () => {
    return (
        <section className="speakers-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SecTitle mainTitle="Meet Our 2025 Speakers" />
                    </div>

                    <div className="col-12">
                        <div className="speakers-grid">
                            {SPEAKERS.map((speaker, index) => (
                                <ScrollReveal
                                    key={speaker.name}
                                    direction="clip-scale-in-downward"
                                    delay={0.2 + index * 0.05}
                                >
                                    <div className="speaker-card-wrapper">
                                        <article className="speaker-card">
                                            <div className="image-wrapper">
                                                <Image
                                                    src={speaker.image}
                                                    alt={`${speaker.name} portrait`}
                                                    width={800}
                                                    height={800}
                                                />
                                            </div>
                                            <div className="card-text-content">
                                                <h3 className="speaker-name">{speaker.name}</h3>
                                                <p className="speaker-role">{speaker.designation}</p>
                                            </div>
                                        </article>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className="btn-wrapper">
                            <Button
                                revealAnimation={true}
                                revealDelay={0.2}
                                textLabel={"View All Speakers"}
                                customClass={"bordered-transparent-2"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakersSec;
