import React from 'react';
import HeroSection from '../../HeroSection';
import { Two, Four } from '../LearnMore/Data';

function LearnMore() {
    return (
        <>
            <HeroSection {...Four} />
            <HeroSection {...Two} />
        </>
    );
}

export default LearnMore;
