"use client"

import React, { useState } from 'react'
import { IoCard } from "react-icons/io5";
import { FaGooglePay } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Upi from "@/components/upi"
import CreditCard from "@/components/creditCard"


export default function Paymentmethods() {

    const [mode, setMode] = useState("upi");

    const handleClick = (mode: string) => {
        setMode(mode);
    };

    return (
        <div >
            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">

                        <ul role='list'>

                            <li className="flex py-4 sm:py-6">
                                <Button onClick={() => handleClick("upi")} className='w-full'>
                                    <FaGooglePay />
                                    UPI
                                </Button>
                            </li>
                            <li className="flex py-4 sm:py-6">
                                <Button onClick={() => handleClick("card")} className='w-full'>
                                    <IoCard />
                                    Card
                                </Button>
                            </li>
                        </ul>
                    </section>
                    {mode === 'upi' ? <Upi /> : <CreditCard />}
                    {/* <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    
                </div> */}
                </div>


            </main>

        </div>
    )
}
