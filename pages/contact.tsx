import TransitionEffect from '../components/TransitionEffect';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Head from 'next/head';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
  };

    return (
      <>
           <Head>
        <title>McGorgeous</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
              <TransitionEffect/>
            <Navbar/>
            
 <div className="flex items-center justify-center mb-8">
        <div className="relative w-full">
          <img
            src="/hero.jpg" // Replace with your own image URL
            alt="Banner Image"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40 text-white font-semibold text-4xl">
            Contact
          </div>
        </div>
          </div>
                <div className="flex items-center mx-4 mb-4">
        <AiOutlineHome className="text-gray-500 text-xl" />
        <AiOutlineRight className="text-gray-500 mx-2 text-xs" />
        <span className="text-gray-500 font-light text-sm">Home / Contact</span></div>




    <div className="flex md:px-28 pt-10 pb-10 px-4 items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4 text-center">GET IN TOUCH WITH US</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            <span>+62 12345677</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <span>qwerty@gmail.com</span>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
            </div>
            <Footer/>
            </>
  );
};

export default ContactForm;
