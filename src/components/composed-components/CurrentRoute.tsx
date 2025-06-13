import {useGlobalState} from "../providers/state-provider";

export default function CurrentRoute() {
    const store = useGlobalState();
    //@ts-expect-error
    const {currentRoute} = store.currentRouteHandler;

    return (
        <>
            <h1 className="capitalize">
                {currentRoute.length > 30
                    ? `Search:${currentRoute.slice(
                          currentRoute.indexOf(":") + 1,
                          21
                      )}...`
                    : currentRoute}
            </h1>
        </>
    );
}
