import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // const scrollToTop = () => {
    //     controls.start({ opacity: 0, y: -100, transition: { duration: 0.5 } });
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };
    const scrollToTop = () => {
        controls.start({ opacity: 0, y: -50, transition: { duration: 0.5 } });

        const scrollStep = -window.scrollY / (1000 / 15); // Adjust the duration by changing the 500 value
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10); // Adjust the interval for smoothness
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="btn btn-lg btn-primary btn-lg-square transition ease-in-out duration-300 back-to-top">
                    <i className="bi bi-arrow-up"></i>
                </motion.div>
            )}
        </>

    );
};

export default BackToTop;