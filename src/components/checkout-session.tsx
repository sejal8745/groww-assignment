"use client"

import { useEffect, useState } from "react"
import { CheckCheck, XCircle } from "lucide-react"
import Image from 'next/image'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "@/components/ui/button"
import useStore from "@/store";

interface Props { }
interface Product {
    id: string | null | undefined;
    title: String;
    price: Number;
    image: string | StaticImport;
    quantity: Number;
}

const getRandomDeliveryStatus = () => {
    const statuses = ['Delivered', 'In-transit', 'Shipped'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
};

export function CheckoutSession() {

    const {
        products
    } = useStore();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const productsArray = JSON.parse(localStorage.getItem('products')!)!;
        setOrders(productsArray);
    }, []);

    if (!orders) {
        return (
            <>
                <XCircle className="mx-auto h-10 w-10 text-red-400" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
                    You haven&#39;t ordered yet!
                </h1>
            </>
        )
    }

    return (
        <>
            <CheckCheck className="mx-auto h-10 w-10 text-lime-500 dark:text-lime-400" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-lime-500 dark:text-lime-400 sm:text-5xl">
                Order Successful!
            </h1>
            <h4 className="mt-5 leading-7">
                Thank you, for choosing us!
            </h4>
            <div className='max-w-3xl mx-auto mt-20'>
                <h1 className="text-3xl text-center font-semibold text-[#000000] mb-6">Your Orders</h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payment Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delivery Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order: Product) => (
                                <tr key={order?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <Image
                                            src={order.image}
                                            alt="My Image"
                                            width={200}
                                            height={200}
                                            className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-20 sm:w-20"
                                        />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {order.title}
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {`${order.quantity}`}
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                                        $ {`${order.price}`}
                                    </td>
                                    {/* <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td> */}
                                    <td className="px-6 py-4">
                                        <Button className="w-full bg-green-500 text-white">Paid</Button>

                                    </td>
                                    <td className="px-4 py-4">
                                        <Button className="w-full bg-orange-500 px-3.5 py-2.5 text-sm text-white">{getRandomDeliveryStatus()}</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </div>
            {/* <h3 className="mt-8 text-2xl leading-7">
                Thank you, <span className="font-extrabold">Name</span>!
            </h3>
            <p className="mt-8">
                Check your purchase email{" "}
                <span className="mx-1 font-extrabold text-indigo-500">Email</span> for
                your invoice.
            </p> */}
        </>
    );
}


{/* <td className="py-2 px-4">{order.quantity}</td>
                                <td className="py-2 px-4">${order.price}</td> */}
{/* <td className="py-2 px-4">
                                    {
                                        order.paid ? (
                                            <span className="text-green-500">Paid</span>
                                        ) : (
                                            <span className="text-red-500">Unpaid</span>
                                        )
                                    }
                                </td>
                                <td className="py-2 px-4">
                                    {
                                        order.delivered ? (
                                            <span className="text-green-500">Delivered</span>
                                        ) : (
                                            <span className="text-red-500">In transit</span>
                                        )
                                    }
                                </td> */}