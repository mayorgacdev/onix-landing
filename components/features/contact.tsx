"use client";

import React, { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Enviando....");
    
    try {
      // Use the native form submission method - this is more reliable
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", "30475ce0-17f2-4074-b89c-39661a04ff25");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto."
        );
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error de conexión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="relative isolate bg-blue-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                  className="aspect-1155/678 w-[72.1875rem] bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Have questions or need help protecting your property from floods?
              Our team is here to help — whether you're looking for a custom
              solution, emergency support, or just want to learn more.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  Serving: St. Petersburg, Tampa, Fort Myers, Naples & nearby
                  areas
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a href="tel:+1 (239) 222-0810" className="hover:text-white">
                    +1 (239) 222-0810
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:info@onixstormshield.com"
                    className="hover:text-white"
                  >
                    info@onixstormshield.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Email Address
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Address
                </label>
                <div className="mt-2.5">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm/6 font-semibold text-white"
                >
                  City
                </label>
                <div className="mt-2.5">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Zip
                </label>
                <div className="mt-2.5">
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm/6 font-semibold text-white"
                >
                  State
                </label>
                <div className="mt-2.5">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Tell Us Anything About Your Project That Will Help
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Enter your message"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-end gap-4">
              {result && (
                <div
                  className={`text-sm ${
                    result.includes("exitosamente")
                      ? "text-green-400"
                      : result.includes("Enviando")
                      ? "text-blue-400"
                      : "text-red-400"
                  }`}
                >
                  {result}
                </div>
              )}
              <button
                type="submit"
                className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200 bg-button-dark hover:bg-indigo-400"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
