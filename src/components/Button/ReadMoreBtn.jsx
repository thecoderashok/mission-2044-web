import React from 'react'
import "./styles.scss";
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import { useClassNames } from '../../hook/useClassNames';
import TransitionLink from '../TransitionLink';

const ReadMoreButton = ({ textLabel, hoverLabel, link = "#", customClass, revealDelay = 0, revealAnimation = false, direction = "fade-up", ...props }) => {

    const classes = useClassNames();

    const BaseButton = (
        <TransitionLink
            href={link}
            className={classes("read-more-btn", customClass)}
            {...props}
        >
            <span className="text-label">
                <span data-text={hoverLabel ? hoverLabel : textLabel} className="text-inner">
                    <span>{textLabel}</span>
                    <span className="hidden-hover-text-spacer">
                        {hoverLabel}
                    </span>
                </span>
            </span>
            <span className="icon"></span>
        </TransitionLink>
    )


    if (revealAnimation) {
        return (
            <ScrollReveal loadGsap={true} direction={direction} offset={40} duration={0.8} delay={revealDelay}>
                <div className="btn-wrapper">
                    {BaseButton}
                </div>
            </ScrollReveal>
        );
    }

    return BaseButton;
}

export default ReadMoreButton;
