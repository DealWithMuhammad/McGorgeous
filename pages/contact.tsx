import TransitionEffect from '../components/TransitionEffect';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Head from 'next/head';
import Basket from '../components/Basket';
import { client } from "../client"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

    return (
      <>
           <Head>
        <title>Maria-Waseem</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
              <TransitionEffect/>
        <Navbar />
        <Basket />
            
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


          <h2 className="text-2xl head-text font-semibold mb-4 text-center">GET IN TOUCH WITH US</h2>


  {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
        )}
        

        
            <Footer/>
            </>
  );
};

export default ContactForm;
