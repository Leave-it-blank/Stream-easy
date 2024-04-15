
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const fonts=Poppins({
    subsets:["latin"],
    weight:["200" ,"300", "500", "600", "700", "800"],
});

export const Logo = ()=>{
    return(
        <div className="flex flex-col items-center gap-y-2">
            <div bg-white rounded-full p-2>
                <Image src="/streamezlogo.svg" 
                alt="Stream Easy Logo"
                height='200'
                width='200'
                />
            </div>
            <div className={cn("flex flex-col items-center", fonts.className,)}>
                <p className="text-black font-semibold text-xl">
                    Stream Easily!
                </p>
                <p>

                </p>
            </div>
        </div>
    );
};