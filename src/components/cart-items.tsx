"use client"

import { Clock, X } from "lucide-react"
import useStore from "@/store/index.js";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Loader2 } from "lucide-react"
import { useEffect, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CartItemsEmpty } from "./cart-item-empty";

interface Product {
    id: string | null | undefined;
    title: String;
    price: Number;
    image: string | StaticImport;
    quantity: Number;
}

export function CartItems() {

    const {
        products,
        loading,
    } = useStore();

    if (loading) {
        return <Loader2 className="mr-2 h-12 w-12 animate-spin" />
    }

    if (!loading && !products.length) return (<CartItemsEmpty />);

    if (!loading && products.length)
        return (
            <ul
                role="list"
                className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
            >
                {products?.map((product: Product) => (
                    <li key={product?.id} className="flex py-4 sm:py-6">
                        <div className="shrink-0">
                            <Image
                                src={product.image}
                                alt="My Image"
                                width={200}
                                height={200}
                                className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-24 sm:w-24"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-sm">
                                            {product.title}
                                        </h3>
                                    </div>
                                    <p className="mt-1 text-sm font-medium">Price: $ {`${product.price}`}</p>
                                    <p className="mt-1 text-sm font-medium">Quantity: {`${product.quantity}`}</p>

                                </div>

                                {/* <div className="mt-4 sm:mt-0 sm:pr-9">
                                    <div className="absolute right-0 top-0">
                                        <Button
                                            variant="ghost"
                                            type="button"
                                            className="-mr-2 inline-flex p-2"
                                        // onClick={() => removeCartItem(product)}
                                        >
                                            <span className="sr-only">Remove</span>
                                            <X className="h-5 w-5" aria-hidden="true" />
                                        </Button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
}
