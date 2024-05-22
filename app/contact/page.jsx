import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page mx-auto px-4 py-7 md:py-16 lg:px-8 lg:mx-16">
      <h1 className="text-3xl text-orange-400 md:text-5xl font-bold text-center mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-4 md:mx-0">
        <div className="contact-form w-full md:w-1/2 bg-white shadow-md rounded-lg p-8">
          <h2 className="md:text-3xl text-xl font-bold mb-6 text-center">
            Get In Touch
          </h2>
          <div className="mb-6">
            <p className="text-gray-700">
              <strong>Phone:</strong> +251-911-13-04-16
              <br />
              <strong>Alt Phone:</strong> +251-713-44-04-16
              <br />
              <strong>Email:</strong> godriveitservice@gmail.com
            </p>
          </div>

          <p className="mb-6 text-gray-700 text-center">
            Have questions or want to learn more about our services? Feel free
            to contact us by filling out the form below or visit us at our
            office. We'd love to hear from you!
          </p>
          <div className="mb-6">
            <strong className="block mb-2">Address:</strong>
            <p className="text-gray-700">
              Ethiopia, Hayarat in front of Kokeb Building, 1st floor
              <br />
              P.O. Box 41397, Addis Ababa
            </p>
          </div>
          {/* this is the form container div */}
          <div className="p-2  border hover:border-slate-800 rounded-lg">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="map-container md:w-1/2 p-2 bg-zinc-400 rounded-md">
          <iframe
            className="w-full h-[600px] md:h-[700px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.0295419832296!2d38.73564631970063!3d9.038485486102853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16356165fbae8cf3%3A0x9d85adfc5cdd5f0c!2sKokeb%20Building!5e0!3m2!1sen!2set!4v1652865095487!5m2!1sen!2set"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
