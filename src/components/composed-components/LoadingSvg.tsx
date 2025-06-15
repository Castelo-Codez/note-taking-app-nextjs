import {Loader} from "lucide-react";

export default function LoadingSvg() {
    return (
        <div className="  absolute z-50 w-full h-full flex flex-col  justify-center items-center">
            <Loader width={30} />
            <p className=" text-[25px]">loading...</p>
        </div>
    );
}
