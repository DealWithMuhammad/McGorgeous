import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { FaPalette } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io';
import { TiStarburstOutline } from 'react-icons/ti';
import Navbar from "../components/Navbar"
import TransitionEffect from '../components/TransitionEffect';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from "next/image";
import Basket from '../components/Basket';

const about = () => {
    return (
      <>       
           <Head>
        <title>McGorgeous</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
            <TransitionEffect/>
        <Navbar />
        <Basket />
    <div className="container mx-auto px-4  md:py-5">
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-full">
          <img
            src="/street.jpg" // Replace with your own image URL
            alt="Banner Image"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40 text-white font-semibold text-4xl">
            ABOUT
          </div>
        </div>
          </div>
                <div className="flex items-center mb-4">
        <AiOutlineHome className="text-gray-500 text-xl" />
        <AiOutlineRight className="text-gray-500 mx-2 text-xs" />
        <span className="text-gray-500 font-light text-sm">Home / About</span>
      </div>
      <section className="mb-8">
        <h2 data-aos="fade-up" className=" text-[#405189] text-3xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-700">
          Welcome to my artistic world! I am McGorgeous a passionate painter who finds joy and inspiration in creating beautiful works of art. Art has been my lifelong passion, and I believe that it has the power to transcend boundaries and connect people on a deep, emotional level. With each brushstroke, I strive to convey the richness of human experiences, capturing moments of joy, introspection, and wonderment. Through my art, I invite viewers to embark on a visual journey that celebrates the beauty of our world and the intricacies of the human soul.
        </p>
      </section>
      <section className="mb-8">
        <h2 data-aos="fade-down" className="  text-[#405189] text-3xl font-bold mb-4">What I Do</h2>
        <div className="flex flex-col md:flex-row mb-8">
          <div data-aos="fade-right" className="w-full md:w-1/2 md:pr-4">
            <h3 className="text-xl font-semibold mb-2">Vibrant Colors</h3>
            <p className="text-gray-700 mb-4">I explore a wide range of colors and techniques, allowing me to create vibrant and visually appealing paintings. Colors have the ability to evoke emotions and set the tone for a piece of artwork. Whether it's a vivid sunset or a subtle play of light and shadow, I strive to capture the essence of a subject through the careful selection and application of colors.</p>
            <p className="text-gray-700">I believe that colors have the power to communicate and elicit responses from viewers, allowing them to connect with the artwork on a deeper level. Through my use of colors, I aim to create an immersive experience that engages the senses and sparks the imagination.</p>
          </div>
          <div data-aos="fade-up" className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <img
              src="/art.jpg" // Replace with your own image URL
              alt="Palette Image"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div data-aos="fade-right" className="w-full md:w-1/2 md:pr-4">
            <h3 className="text-xl font-semibold mb-2">Emotional Connection</h3>
            <p className="text-gray-700 mb-4">Art has the power to evoke emotions and create a profound impact on the viewer. I strive to establish an emotional connection with the audience through my artwork. Whether it's a portrait that captures the depth of human emotions or a landscape that evokes a sense of serenity, I want viewers to feel a range of emotions when they interact with my paintings.</p>
            <p className="text-gray-700">By portraying subjects with sensitivity and attention to detail, I aim to create a dialogue between the artwork and the viewer. I want my paintings to be a catalyst for introspection, inviting viewers to reflect on their own experiences, memories, and aspirations. Through this emotional connection, I hope to inspire and leave a lasting impression on those who engage with my art.</p>
          </div>
          <div data-aos="fade-up" className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <img
              src="/face.jpg" // Replace with your own image URL
              alt="Emotional Image"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 data-aos="fade-down" className=" text-[#405189] text-3xl font-bold mb-4">Vision and Mission</h2>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <TiStarburstOutline className="text-indigo-500 text-4xl" />
          </div>
          <div data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-gray-700">My vision is to create art that resonates with people, leaving a lasting impact on their hearts and minds. I aspire to push the boundaries of creativity, constantly exploring new techniques and ideas to evolve as an artist. Through my work, I aim to ignite a sense of wonder, provoke thought, and inspire individuals to see the beauty that surrounds them in everyday life.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <TiStarburstOutline className="text-indigo-500 text-4xl" />
          </div>
          <div data-aos="fade-right">
            <h3  className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-700">My mission is to continuously explore new horizons of creativity, pushing boundaries, and discovering innovative approaches to art. I am dedicated to honing my skills, refining my techniques, and seeking inspiration from diverse sources. By staying true to my artistic vision and sharing my unique perspective with the world, I hope to create a meaningful impact and contribute to the vibrant tapestry of the art community.</p>
          </div>
        </div>
      </section>
            </div>
    <Footer/>
        </>
            
  );
};

export default about;
