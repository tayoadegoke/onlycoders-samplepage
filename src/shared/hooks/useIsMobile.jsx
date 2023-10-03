import { useLayoutEffect, useState } from 'react'

function useIsMobile() {

    const [isMobile, setIsMobile] = useState((window.innerWidth < 768));
    useLayoutEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return isMobile;
};



export default useIsMobile
