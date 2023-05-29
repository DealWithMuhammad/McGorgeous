import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
 import Basket from "../components/Basket";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProducts";
// import Product from "@/components/Product";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import TransitionEffect from "../components/TransitionEffect";
 import Footer from "../components/Footer"
interface Props {
  categories: Category[];
 products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  console.log(categories, products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  
  

  return (
    <div className="bg-cover">
      <Head>
        <title>McGorgeous</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>

      <TransitionEffect/>
      <Header />

      <Basket />

      <main className="relative">
        <Landing />
        <Footer />
      </main>
     
    </div>
  );
};

export default Home;

// Backend Code
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
