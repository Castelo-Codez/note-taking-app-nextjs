import * as React from "react";

const MOBILE_BREAKPOINT = 992;

export function useIsLargeScreen() {
    const [largeScreen, setlargeScreen] = React.useState<boolean | undefined>(
        undefined
    );

    React.useEffect(() => {
        const mql = window.matchMedia(
            `(min-width: ${MOBILE_BREAKPOINT - 1}px)`
        );
        const onChange = () => {
            setlargeScreen(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setlargeScreen(window.innerWidth < MOBILE_BREAKPOINT);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!largeScreen;
}
