"use client";
import React, { useState } from "react";
import Image from "next/image";
import phoneImg from "@/assets/phone.png";
import mail from "@/assets/mail.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const clearForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setArea("");
  };

  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image
              src={phoneImg}
              alt="phone"
              className="h-[110px] w-auto mr-6"
            />
            <p className="text-xl">+91 1234567890</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">sahatanush511@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="bg-[#87bdd8]/10 p-6 rounded-xl max-w-[500px] w-full">
        <h2 className="text-5xl font-bold text-[#87bdd8] mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-white/70 mb-6">Send me a message</p>

        <form
        onSubmit={clearForm}
          className="space-y-4"
          action="https://getform.io/f/aejrdkxb"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="bg-[#87bdd8]/20 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#87bdd8]"
              placeholder="Enter Your Name"
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-[#87bdd8]/20 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#87bdd8]"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-[#87bdd8]/20 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#87bdd8] md:col-span-2"
              placeholder="Phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <textarea
            name="message"
            cols={30}
            rows={6}
            className="bg-[#87bdd8]/20 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#87bdd8]"
            placeholder="Your Message"
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-[#87bdd8] cursor-pointer hover:bg-[#609bb3] transition-all duration-200 text-white px-6 py-3 w-full font-semibold text-xl rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
