import {Input} from "../ui/input";

export default function Search() {
    return (
        <Input
            placeholder="search by title,content or tags"
            className=" placeholder:text-[0.7rem]"
        />
    );
}
