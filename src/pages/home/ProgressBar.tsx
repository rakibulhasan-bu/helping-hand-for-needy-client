import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
    ariaValuenow: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ ariaValuenow }) => {
    // const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView();

    const animationVariants = {
        visible: { width: `${ariaValuenow}%`, transition: { duration: 1 } },
        hidden: { width: 0 },
    };

    const animationState = inView ? 'visible' : 'hidden';

    return (
        <div ref={ref} className="progress">
            <motion.div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={ariaValuenow}
                aria-valuemin={0}
                aria-valuemax={100}
                initial="hidden"
                animate={animationState}
                variants={animationVariants}
            >
                <span>{ariaValuenow}%</span>
            </motion.div>
        </div>
    );
};

export default ProgressBar;
