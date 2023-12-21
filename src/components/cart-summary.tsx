"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import useStore from "@/store";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Button } from "@/components/ui/button"
import Link from "next/link";

import { useRouter } from "next/navigation";

interface Product {
    id: string | null | undefined;
    title: String;
    price: number;
    image: string | StaticImport;
    quantity: number;
}

interface Props {
    data: {
        products: Product[],
        paymentMethods: string[]
    }
}

export function CartSummary(props: Props) {
    const router = useRouter();
    const {data} = props
    const {
        products,
        setState,
        loading,
        paymentMethods
    } = useStore();

    useEffect(() => {
        setState(data)
    },[data, setState])

    const [subTotal, setSubTotal] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const shippingEstimate = products.length ? 50 : 0;

    useEffect(() => {
        let cost = 0;
        products.forEach((product: Product) => {
            cost += parseFloat((product.quantity * product.price).toFixed(4));
        });
        setSubTotal(parseFloat(cost.toFixed(4)));
        cost = cost > 0 ? cost + shippingEstimate : 0;
        setTotal(parseFloat(cost.toFixed(4)))
    }, [products, shippingEstimate]);

    function onCheckout() {
        localStorage.clear();
        localStorage.setItem("products", JSON.stringify(products))
        localStorage.setItem("paymentMethods", JSON.stringify(paymentMethods))
        router.push(`/payment`);
    }

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-1000 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 id="summary-heading" className="text-lg font-medium">
                Order summary
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium">$ {subTotal}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                    <dt className="flex items-center text-sm">
                        <span>Shipping estimate</span>
                    </dt>
                    <dd className="text-sm font-medium">$ {shippingEstimate}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                    <dt className="text-base font-medium">Order total</dt>
                    <dd className="text-base font-medium">$ {total}</dd>
                </div>
            </dl>

            <div className="mt-6">
                {loading ? (
                    <Button className="w-full">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                    </Button>
                ) : (
                    <Link href="/payment">
                        <Button className="w-full" onClick={onCheckout}>Proceed</Button>
                    </Link>
                )}
            </div>
        </section >
    )
}
