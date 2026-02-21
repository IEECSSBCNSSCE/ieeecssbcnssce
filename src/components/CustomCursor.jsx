import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX - 6);
            cursorY.set(e.clientY - 6);
        };

        const handleHover = (e) => {
            const target = e.target;
            if (target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="custom-cursor hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.15)' : 'white',
                    backdropFilter: isHovering ? 'blur(4px)' : 'none',
                    border: isHovering ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                }}
            />
            <motion.div
                className="custom-cursor-follower hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: -14,
                    translateY: -14,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
