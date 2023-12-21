"use client"
import React, { useState } from 'react'
import card_logo from "../../public/card_logo.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


const CreditCard = () => {
    const router = useRouter()
    const [cardNumber, setCardNumber] = useState<string>("")
    const [cardHolder, setCardHolder] = useState<string>("")
    const [cvv, setCVV] = useState<string>("")
    const [expiryDate, setExpiryDate] = useState<Date>()

    const validateCardDetails = () => {
        const currentDate = new Date()
        if (!cardNumber.length || !cardHolder.length || !cvv.length || !expiryDate) {
            toast.error("Please enter all the details")
            return
        }
        else if (cvv.length !== 3) {
            toast.error("Please enter correct CVV")
            return
        }
        else if (currentDate > expiryDate) {
            toast.error("Please enter the correct expiry date")
            return
        }
        else if (cardNumber !== '' || cardNumber !== null) {
            if (cardNumber.length !== 16) {
                toast.error("Please enter a Valid Card Number")
                return
            }
        }
        router.push('/success')
    }

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-1000 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <Image alt="card_logo" src={card_logo} width={100} height={100} className="mb-8 mx-auto my-auto" />
            <Input
                type="text"
                placeholder="Card Holder Name"
                value={cardHolder}
                onChange={(e) => { setCardHolder(e.target.value) }}
                className="input-field m-2 text-transform: uppercase"
            />
            <Input
                type='number'
                placeholder="CARD NUMBER"
                value={cardNumber}
                onChange={(e) => { setCardNumber(e.target.value) }}
                className="input-field m-2"
            />
            <div className="flex flex-col md:flex-row md:justify-between">
                <Input
                    type='Date'
                    placeholder="Expiry Date"
                    value={expiryDate ? expiryDate.toISOString().split('T')[0] : undefined}
                    onChange={(e) => { setExpiryDate(new Date(e.target.value)); }}
                    className="input-field m-2"
                />
                <Input
                    type='number'
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => { setCVV(e.target.value) }}
                    className="input-field m-2"
                />
            </div>
            <Button className="w-full" onClick={() => validateCardDetails()}>Proceed to Payment</Button>
        </section>
    )
}

export default CreditCard;

