import { useEffect, useRef } from "react";

const Canvas = ({ draw }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        try {
            draw(context);
            console.info("Render Success!");
        } catch {
            console.error("Render Error!");
        }
    }, [draw]);

    return (
        <canvas ref={canvasRef} id="main-canvas" width="1820" height="1024" />
    );
};

export default Canvas;
