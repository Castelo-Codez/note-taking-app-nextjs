"use client";
import {useRouter} from "next/navigation";
import {useGlobalState} from "../providers/state-provider";
import {Input} from "../ui/input";

export default function Search() {
    const store = useGlobalState();
    //@ts-expect-error
    const {searchKeyword, setNewsearchKeyword} = store.searchKeywordHandler;
    //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler;
    const router = useRouter();
    return (
        <Input
            value={searchKeyword}
            onChange={(e) => {
                router.replace("http://localhost:3000/notes/search");
                setNewsearchKeyword(e.target.value);
                setNewCurrentRoute(`Search:${e.target.value}`);
            }}
            placeholder="search by title,content or tags"
            className=" placeholder:text-[0.7rem]"
        />
    );
}
