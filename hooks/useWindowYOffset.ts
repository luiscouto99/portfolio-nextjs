import React, { useEffect, useState } from 'react'

export const useWindowYOffset = () => {
    const [pageYOffset, setPageYOffset] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => setPageYOffset(window.scrollY));

        return () => {
            window.removeEventListener("scroll", () =>
                setPageYOffset(window.scrollY)
            );
        };
    }, [pageYOffset]);

    return pageYOffset;
}
