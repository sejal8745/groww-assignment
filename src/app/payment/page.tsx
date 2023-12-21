import Paymentmethods from "@/components/Paymentmethods"

export default function page() {
    return (
        <div>
            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Payments
                </h1>
                <div className="mt-12">
                    <Paymentmethods />

                </div>

            </main>
        </div>
    )
}