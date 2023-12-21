import Link from "next/link"

import { CheckoutSession } from "@/components/checkout-session"

interface Props { }

export default async function Page() {
    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <CheckoutSession />
            </div>
        </main>
    )
}
