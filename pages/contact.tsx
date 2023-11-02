import Head from 'next/head';
import ContactIcon from './components/ContactIcon';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('All Fields Are Required.');
      return; // Prevent further execution
    }

    const response = await fetch(
      'http://localhost:8080/api/function/contact-message',
      {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      alert('Message sent. You rock!');
       // Reset the form data
       setFormData({ name: '', email: '', message: '' });
    } else {
      // Handle other cases (e.g., server errors) here.
      console.log("We've got some errors.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex justify-center items-center bg-white  font-['Inter']">
        <section className="mt-20 mb-20 w-full max-w-[90%] xl:max-w-[70%] ">
          <div>
            <div className="text-center">
              <p className=" text-zinc-600 text-sm lg:text-xl font-normal  leading-tight">
                Contact
              </p>
              <h1 className=" text-gray-900 text-base lg:text-6xl font-medium  leading-[56px]">
                Feel free to reach out to me
              </h1>
            </div>
            {/* contact form grid */}
            <div className="flex flex-col items-center justify-center lg:flex-row mt-5 lg:mt-20">
              {/* contact form */}
              <div className="w-full lg:w-1/2">
                <form className="">
                  {/* name input */}
                  <div className="mb-5 lg:mb-10">
                    <label
                      className="block text-gray-900 text-sm lg:text-xl font-normal leading-tight"
                      htmlFor="username"
                    >
                      What’s your name
                    </label>
                    <input
                      className="appearance-none border rounded-3xl w-full mt-4 py-4 px-5 placeholder-black text-gray-900 text-xs lg:text-base font-normal leading-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  {/* email input */}
                  <div className="mb-5 lg:mb-10">
                    <label
                      className="block text-gray-900 text-sm lg:text-xl font-normal leading-tight"
                      htmlFor="username"
                    >
                      What’s your email address
                    </label>
                    <input
                      className="appearance-none border rounded-3xl w-full mt-4 py-4 px-5 placeholder-black text-gray-900 text-xs lg:text-base font-normal leading-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  {/* textarea message */}

                  <div className="mb-5 lg:mb-10">
                    <label
                      className="block text-gray-900 text-sm lg:text-xl font-normal leading-tight"
                      htmlFor="message"
                    >
                      What’s your question
                    </label>
                    <textarea
                      id="message"
                      className=" block p-2.5 mt-4 w-full text-gray-900 text-xs lg:text-base font-normal rounded-3xl border  border-stone-300 placeholder-black"
                      rows={4}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="w-full  px-6 py-5 bg-gray-900 rounded-3xl justify-center items-center gap-3 inline-flex">
                    <button
                      className="text-white text-base font-normal w-full leading-none"
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* end contact form */}
              {/* start box(with email) */}
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
                <ContactIcon />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
