import React from 'react';
import HeroSection from '../../HeroSection';
import Service from '../../Service';
import { One, Two, Four } from "./Data";

function Home() {
    return (
        <>
            <HeroSection {...One} />
            <HeroSection {...Four} />
            <Service />
            <HeroSection {...Two} />
        </>
    )
}

export default Home;
