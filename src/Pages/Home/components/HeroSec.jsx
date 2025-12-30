import React from 'react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';

const HeroSec = () => {
    return (
        <section className='hero-sec section-border-bottom'>
            <div className="hero-media-wrapper" aria-hidden="true">
                <ParallaxWrapper offset={18}>
                    <video
                        src="/hero-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                </ParallaxWrapper>
            </div>
            <div className="container">
                <ScrollReveal direction='clip-fade-up' delay={0.2}>
                    <h1 className="title-text">
                        Meet the
                        <br /> Leaders in
                        Defense <br /> Innovation
                        and Resilience
                    </h1>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HeroSec;
