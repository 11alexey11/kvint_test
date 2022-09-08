import { useEffect, useState } from "react";

const useMountTransition = (isMounted, unmountDelay) => {
    const [hasTransition, setHasTransition] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (isMounted && !hasTransition) {
            setHasTransition(true);
        } else if (!isMounted && hasTransition) {
            timeoutId = setTimeout(() => setHasTransition(false), unmountDelay);
        }

        return () => {
            clearTimeout(timeoutId);
        }

    }, [isMounted, hasTransition, unmountDelay]);

    return hasTransition;
};

export default useMountTransition;