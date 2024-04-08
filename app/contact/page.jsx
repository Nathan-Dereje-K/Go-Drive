import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-4 md:mx-0">
        <div className="map-container md:w-1/2">
          <iframe
            className="w-full h-[600px] md:h-[700px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.0295419832296!2d38.73564631970063!3d9.038485486102853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16356165fbae8cf3%3A0x9d85adfc5cdd5f0c!2sKokeb%20Building!5e0!3m2!1sen!2set!4v1652865095487!5m2!1sen!2set"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="contact-form md:w-1/2 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4">
            Have questions or want to learn more about our services? Feel free
            to contact us by filling out the form below or visit us at our
            office. We'd love to hear from you!
          </p>
          <div className="mb-4">
            <strong>Address:</strong>
            <br />
            Ethiopia, Hayarat in front of Kokeb Building, 1st floor
            <br />
            P.O. Box 41397, Addis Ababa
          </div>
          <div className="mb-4">
            <strong>Phone:</strong> +251-123-456-789
            <br />
            <strong>Email:</strong> info@godrive.com
          </div>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
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
    </div>
  );
};

export default ContactPage;
