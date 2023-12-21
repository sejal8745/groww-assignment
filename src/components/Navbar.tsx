import React from "react";
// import Link from "next/link";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Image from "next/image";
// load from images folder
import Link from "next/link"
import logo from "../../public/logo.png";

const Navbar = () => {
    return (
        <>
             <div className="flex w-full overflow-x-auto py-4 bg-[#F9FAFB] dark:bg-[#374151]">
{/*             <div className="py-4 flex "> */}
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-2">
                    <div className="px-4 text-xl font-bold py-1">

                        <div className="flex items-center">
                            
                            <Image
                                src={logo}
                                alt="logo"
                                width={40}
                                height={40}
                                className="cursor-pointer pr-2"
                            />
                            <Link href="/">
                            <div className="text-2xl font-bold text-green">GROWW</div>
                                </Link>
                        </div>
                    </div>
                    <div className="pl-2 py-1">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
