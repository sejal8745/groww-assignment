"use client"
import React, { useState } from 'react'
import upi_logo from "../../public/upi_icon.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { specialCharacters, upiServices } from "@/constants/variables";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Upi = () => {
    const router = useRouter()
    const [upiId, setUpiId] = useState<string>("")

    const validateUpi = async (upi: string) => {
        if (!upi.includes("@")) {
            toast.error("UPI Id is invalid")
            return
        }
        if (upi.split("@").length > 2) {
            toast.error("UPI Id is invalid")
            return
        }
        if (upi.includes(" ")) {
            toast.error("UPI Id is invalid")
            return
        }
        if (
            specialCharacters
                .split("")
                .some((char) => upi.split("@")[0].includes(char))
        ) {
            toast.error("UPI Id is invalid")
            return
        }
        if (!upiServices.includes(upi.split("@")[1])) {
            toast.error("UPI Id is invalid")
            return
        }
        router.push('/success')
    };

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-1000 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <Image alt="upi_logo" src={upi_logo} width={100} height={100} className="mb-8 mx-auto my-auto" />
            <Input
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => { setUpiId(e.target.value) }}
                className="input-field m-2"
            />
            <Button className="w-full" onClick={() => validateUpi(upiId)}>Proceed to Payment</Button>
        </section>
    )
}

export default Upi

