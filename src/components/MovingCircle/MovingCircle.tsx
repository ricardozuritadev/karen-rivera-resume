import { useCallback, useEffect, useRef } from "react";
import { useMotionValue, motion } from "framer-motion";

export default function MovingCircle() {
    const eyeRef = useRef<HTMLDivElement>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const radiusLargeCircle = 70;
    const radiusSmallCircle = 24;

    const mouseMoveHandler = useCallback(
        (event: MouseEvent) => {
            const rect = eyeRef.current?.getBoundingClientRect();
            if (!rect) return;

            // Coordenadas del centro del círculo grande
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Diferencias entre el puntero del mouse y el centro del círculo grande
            let deltaX = event.clientX - centerX;
            let deltaY = event.clientY - centerY;

            // Calcular la distancia del puntero al centro del círculo grande
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            // Restringir el movimiento del círculo pequeño dentro del borde interior del círculo grande
            const maxDistance = radiusLargeCircle - radiusSmallCircle; // Borde interior

            if (distance > maxDistance) {
                const angle = Math.atan2(deltaY, deltaX);
                deltaX = maxDistance * Math.cos(angle);
                deltaY = maxDistance * Math.sin(angle);
            }

            // Establecer las nuevas coordenadas del círculo pequeño con compensación para centrar el círculo pequeño
            cursorX.set(deltaX - radiusSmallCircle / 2);
            cursorY.set(deltaY - radiusSmallCircle / 2);
        },
        [cursorX, cursorY, radiusSmallCircle, radiusLargeCircle]
    );

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, [mouseMoveHandler]);

    return (
        <div className="moving-circle" ref={eyeRef}>
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY
                }}
                className="moving-circle__small"
            />
        </div>
    );
}
