import {useGlobalState} from "../providers/state-provider";

export default function CurrentRoute() {
    const store = useGlobalState();
    //@ts-expect-error
    const [currentRoute] = store.currentRouteHandler;
    return (
        <>
            <h1 className="capitalize"> {currentRoute}</h1>
        </>
    );
}
