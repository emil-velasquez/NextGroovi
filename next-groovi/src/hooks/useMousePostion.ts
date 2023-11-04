// https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/

import React, { useState } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    React.useEffect(() => {
        function updateMousePosition(ev: MouseEvent) {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        }

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        }
    }, []);

    return mousePosition;
}