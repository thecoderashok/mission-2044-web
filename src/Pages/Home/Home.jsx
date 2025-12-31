import React from 'react'
import HeroSec from './components/HeroSec'
import AboutSec from './components/AboutSec'
import EventsSec from './components/EventsSec'
import SpeakersSec from './components/SpeakersSec'
import TestimonialsSec from './components/TestimonialsSec'
import LeadersSec from './components/leadersSec'

const Home = () => {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <EventsSec />
            <SpeakersSec />
            <TestimonialsSec />
            <LeadersSec />
        </>
    )
}

export default Home;
