import React from 'react'
import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
 import Basket from "../components/Basket";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProducts";
// import Product from "@/components/Product";
import { getSession } from "next-auth/react";
 import type { Session } from "next-auth";
import TransitionEffect from '../components/TransitionEffect';

interface Props {
  categories: Category[];
 products: Product[];
  session: Session | null;
}

const projects = ({ categories, products }: Props) => {
  console.log(categories, products);

    const showProducts = (category: number) => {
        return products
            .filter((product) => product.category._ref === categories[category]._id)
            .map((product) => <Product product={product} key={product._id} />);
    };
    return (
        <>
               <Head>
        <title>Maria-Waseem</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
            <Navbar />
            <TransitionEffect />
            <Basket />
                <section className="bg-[#0d183a]">
                    <div className="space-y-10 py-16">
                        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                            New Promos
                        </h1>

                        <Tab.Group>
                            <Tab.List className="flex justify-center">
                                {categories.map((category) => (
                                    <Tab
                                        key={category._id}
                                        id={category._id}
                                        className={({ selected }) =>
                                            `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                                                ? "borderGradient bg-[#35383C] text-white"
                                                : "border-b-2 border-[#35383C] text-[#747474]"
                                            }`
                                        }
                                    >
                                        {category.title}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                                <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                                <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                                <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </section>
            </>
        );
    };

export default projects;
    

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
       products,
      session,
    },
  };
};
