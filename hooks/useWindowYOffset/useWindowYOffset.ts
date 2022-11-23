import React, { useEffect, useState } from 'react'

export const useWindowYOffset = () => {
    const [pageYOffset, setPageYOffset] = useState(0);

    useEffect(() => {
        const updatePageYOffset = () => setPageYOffset(window.scrollY);

        window.addEventListener("scroll", updatePageYOffset);

        return () => window.removeEventListener("scroll", updatePageYOffset);
    }, [pageYOffset]);

    return pageYOffset;
}
