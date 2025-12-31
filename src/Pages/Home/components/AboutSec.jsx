import React from "react";
import Image from "../../../components/Image";
import TextSplit from "../../../components/TextSplit";
import Button from "../../../components/Button/Button";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../../components/SecTitle";

const AboutSec = () => {
    return (
        <>
            <section className="about-us-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 content-wrapper">
                            {/* <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                <div className="image-box">
                                    <Image
                                        src={"/images/about-sec-img-1.jpg"}
                                        width={800}
                                        height={800}
                                    />
                                </div>
                            </ScrollReveal> */}
                            <div className="text-wrapper text-center">
                                <SecTitle
                                    subTitle="About Us"
                                    mainTitle="What is Mission 2044"
                                />

                                <ScrollReveal direction="clip-fade-up" delay={0.3}>
                                    <p className="size-large">
                                        This is the community shaping the future of Defense
                                        Innovation and Resilience. <br /> <b>MISSION 2044</b> is
                                        the premier global event series at the intersection of
                                        Defense Innovation, Civil and Industrial Resilience, and
                                        Critical Infrastructure.
                                    </p>
                                </ScrollReveal>

                                <ScrollReveal direction="clip-fade-up" delay={0.35}>
                                    <p>
                                        We bring together founders, startups, SMEs, VCs, private
                                        equity, defense primes, military leaders, policymakers, and
                                        thought leaders from allied nations to accelerate
                                        innovation, strengthen supply chains, and build resilience
                                        across the ecosystems that underpin our security.
                                    </p>
                                </ScrollReveal>

                                <Button
                                    revealAnimation={true}
                                    revealDelay={0.8}
                                    textLabel={"Mission Statement"}
                                    customClass={"bordered-transparent-2"}
                                />

                                {/* <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                    <div className="image-box">
                                        <Image
                                            src={"/images/about-sec-img-2.jpg"}
                                            width={800}
                                            height={800}
                                        />
                                    </div>
                                </ScrollReveal> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSec;
