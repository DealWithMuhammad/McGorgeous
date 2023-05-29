import Image from "next/image";
import React from "react";
import Button from "./Button";
import Typewriter from 'typewriter-effect';
import Painting from '../assets/umbrella.jpg'
import { FaPortrait, FaMountain, FaPalette, FaPaintRoller, FaShapes, FaUserEdit } from 'react-icons/fa';
import TransitionEffect from "./TransitionEffect";
import Link from "next/link";

function Landing() {
  const about = "./about";
  return (
    <>
      <TransitionEffect/>
    <section className="top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-black tracking-wide lg:text-7xl xl:text-8xl">
            <span className="block span">WE PROVIDE YOU</span>
          <span className="block text-white">
            <Typewriter
                options={{
                  strings: ['DIVINE MASTERPIECES', 'SPIRITUAL CANVASES', 'SACRED ARTISTRY','PORTRAIT', 'LANDSCAPE' ],
                  autoStart: true,
                  loop: true,
                }}
              />
          </span>
        </h1>

          <div className="space-x-8">
            <Link href={about}>
            <button className="button text-white  font-bold overflow-hidden">
              <span className="button-child relative  z-10">Explore More</span>
              <span className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 opacity-0"></span>
              </button>
              </Link>
       </div>
      </div>
      </section>

 <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

{/* Section 1 */}
<section className="py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-4">Welcome to My <span className="text-[#405189]">Artist Studio</span></h2>
        <p className="text-lg text-gray-700 mb-6">
          At my artist studio, I am passionate about creating beautiful paintings that inspire and captivate. With my talent and commitment to excellence, I bring art to life in the most extraordinary ways.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're looking for a stunning portrait, a breathtaking landscape, or a unique custom artwork, I have the expertise and creativity to exceed your expectations. Step into the world of art and let me create something truly exceptional for you.
        </p>
      </div>
      <div data-aos="fade-left">
        <Image
          src={Painting} // Replace with the image URL for the artist
          alt="Artist"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</section>


        {/* Section 2 */}
<section className="py-10 bg-gray-200">
  <div className="container mx-auto px-4">
    <h4 data-aos="fade-down" className="text-[10px] font-bold text-center mb-1 text-grey-500">WHAT I OFFER</h4>
    <h2 data-aos="fade-down" className="text-2xl font-bold text-center mb-6 text-[#405189]"> Services</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li data-aos="fade-down-right">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                       <div className="flex flex-wrap"> 
                    
          <FaPortrait className="text-[#405189] text-4xl mr-4" />
                      <h3 className="text-lg font-bold">Portrait Painting</h3>
                      </div>
            <p className="mt-2">
              I specialize in creating stunning and lifelike portraits of individuals or groups, capturing their unique personalities and emotions.
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-down">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                       <div className="flex flex-wrap"> 
                    
          <FaMountain className="text-[#405189] text-4xl mr-4" />
                      <h3 className="text-lg font-bold">Landscape Painting</h3>
                      </div>
            <p className="mt-2">
              Experience the beauty of nature through our exquisite landscape paintings. We can transport you to serene
              and captivating outdoor scenes.
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-up-left">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                       <div className="flex flex-wrap"> 
          <FaPalette className="text-[#405189] text-4xl mr-4" />
                      <h3 className="text-lg font-bold">Still Life Painting</h3>
                      </div>
            <p className="mt-2">
I specialize in creating stunning still life compositions, capturing the intricate details and textures of objects in a way that evokes a sense of realism and beauty
            </p>
          </div>
        </div>
      </li>
      <li  data-aos="fade-down-right">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                       <div className="flex flex-wrap"> 
          <FaPaintRoller className="text-[#405189] text-4xl mr-4" />
                      <h3 className="text-lg font-bold">Mural Painting</h3>
                      </div>
            <p className="mt-2">
              Transform your space with our custom mural painting services. We can create unique and captivating murals
              that reflect your vision and enhance the ambiance of any environment.
            </p>
          </div>
        </div>
      </li>
      <li  data-aos="fade-up">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                       <div className="flex flex-wrap">
          <FaShapes className="text-[#405189] text-4xl mr-4" />
                      <h3 className="text-lg font-bold">Abstract Art</h3>
                      </div>
            <p className="mt-2">
              Dive into the world of abstract art with our innovative and thought-provoking creations. My abstract
              paintings can add a touch of creativity and intrigue to any space.
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-down-left">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                    <div className="flex flex-wrap">
          <FaUserEdit className="text-[#405189] text-[2rem] mr-4" />
                      <h3 className="text-lg font-bold">Custom Artwork</h3>
                      </div>
            <p className="mt-2">
              I also offer custom artwork services, where our artists can bring your unique ideas and inspirations to
              life. Whether it's a special request or a personalized piece, I can create a one-of-a-kind artwork just
              for you.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* section 3 */}
<section className="py-24">
  <div className="container mx-auto px-4">
    <div  data-aos="fade-down" style={{ position: "relative", textAlign: "center" }}>
  <h2 className="text-3xl font-bold mb-6 uppercase text-[#405189]">CUSTOM PAINTINGS</h2>
  <h2
    className="text-5xl font-bold absolute -top-1 left-0 uppercase opacity-10 w-full text-[#405189]"
  >
    CUSTOM PAINTINGS
  </h2>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div  data-aos="fade-right" className="flex items-center">
        <img
          src="/graffiti-geb9ce615b_1280.jpg" // Replace with the image URL for a custom painting example
          alt="Custom Painting"
          className="w-64 h-auto rounded-lg"
        />
      </div>
      <div  data-aos="fade-left">
        <h3 className="text-lg font-bold mb-2">Bring Your Ideas to Life</h3>
        <p className="text-gray-700 mb-4">
          I specialize in creating custom paintings based on your unique ideas and inspirations. Whether you have a specific concept in mind or just a general theme, I can bring your vision to life on canvas.
        </p>
        <ul className="flex flex-col space-y-2">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-gray-700">Collaborative approach to design</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <span className="text-gray-700">High-quality materials and techniques</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <span className="text-gray-700">Tailored to your preferences</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



        {/* Section 4 */}
<section className="py-10">
          <div className="container mx-auto px-4">
<div  data-aos="fade-down" style={{ position: "relative", textAlign: "center" }}>
  <h2 className="text-3xl font-bold mb-6 uppercase text-[#405189]">Projects</h2>
  <h2
    className="text-5xl font-bold absolute -top-1 left-0 uppercase opacity-10 w-full text-[#405189]"
  >
    Projects
  </h2>
</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div  data-aos="fade-right" className="relative">
        <img
          src="/hero.jpg" // Replace with the image URL for your project
          alt="Project 1"
          className="w-full h-auto object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <h3 className="text-lg font-bold mb-2">Project 1</h3>
            <p className="text-sm">Description of Project 1</p>
            <a href="#" className="text-blue-500 underline mt-2">View Details</a>
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className="relative">
        <img
          src="/church.jpg" // Replace with the image URL for your project
          alt="Project 2"
          className="w-full h-auto object-cover rounded-md"
        />
        <div  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <h3 className="text-lg font-bold mb-2">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
            <a href="#" className="text-blue-500 underline mt-2">View Details</a>
          </div>
        </div>
      </div>
      <div  data-aos="fade-left" className="relative">
        <img
          src="/cave.jpg" // Replace with the image URL for your project
          alt="Project 3"
          className="w-full h-auto object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <h3 className="text-lg font-bold mb-2">Project 3</h3>
            <p className="text-sm">Description of Project 3</p>
            <a href="#" className="text-blue-500 underline mt-2">View Details</a>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-6">
      <a href="./projects" className="bg-blue-500 text-white font-[500] py-2 px-4 rounded hover:bg-blue-600">View All Projects</a>
    </div>
  </div>
</section>

    </div>
      </>
  );
};

export default Landing;
