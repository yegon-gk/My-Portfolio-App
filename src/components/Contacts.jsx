import React from "react";

const Contacts = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-orange-600">
        Contacts
      </h1>
      <form
        action="https://getform.io/f/5c803425-557d-4f94-b929-8e979614ba75"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-2 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Name:</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Phone No:</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="number"
              name="phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Email:</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Subject:</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Message:</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-500"
              name="message"
              rows="10"
            ></textarea>
          </div>
          <button className="text-white mt-4 w-full p-4 bg-orange-600 border-2 rounded-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
