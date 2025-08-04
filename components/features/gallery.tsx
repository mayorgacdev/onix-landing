import React from "react";

export default function Gallery() {
  return (
    <div className=" bg-blue-dark ">
      <h2 className="text-3xl font-bold text-white text-center ">
        Our Gallery
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:pr-8">
        <p className="text-base/7 leading-relaxed text-white/80 text-justify p-5 mt-3">
          At ONIX JM StormShield Solutions, we help you stay one step ahead of
          the storm. Our Dam Easy™ barriers provide a reliable and professional
          flood protection system that’s built to perform — and built to last.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image1.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image2.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image3.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image4.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image5.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image6.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image7.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image8.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image9.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image10.jpg"
            alt="gallery-photo"
          />
        </div>
       
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image12.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-100 max-w-full rounded-lg"
            src="/assets/image13.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
}
