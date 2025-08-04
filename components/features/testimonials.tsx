import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaUser } from "@react-icons/all-files/fa/FaUser";

const featuredTestimonial = {
  body: "The owner was at my house and help me install I live in St Pete beach. They worked like a charm no water in the house absolutely amazing! I'm a testimonial for sure I think I've already gotten you so many customers from talking about them to people I know. Let me know if you want me to do a verbal testimonial about them",
  author: {
    name: "Stephen Carrol",
    handle: "stephencarrol",
    imageUrl: FaUser,
    logoUrl: FaFacebook,
  },
};
const testimonials = [
  [
    [
      {
        body: "I didn’t know much about flood barriers until I reached out to ONIX StormShield Solutions. They took the time to explain my options, showed up on time, and delivered exactly what they promised. Great service all around.",
        author: {
          name: "Lisa H.",
          location: "Marco Island, FL",
          handle: "lisah",
          imageUrl: FaUser,
        },
      },
      {
        body: "The owner was at my house and help me install I live in St Pete beach. They worked like a charm no water in the house absolutely amazing! I'm a testimonial for sure I think I've already gotten you so many customers from talking about them to people I know. Let me know if you want me to do a verbal testimonial about them",
        author: {
          name: "Stephen Carrol",
          handle: "stephencarrol",
          imageUrl: FaUser,
        },
      }
    ],
    [
      {
        body: "We had a terrible flood last year, so we decided to protect our home before the next storm. Joseling from ONIX StormShield Solutions was amazing — professional, knowledgeable, and genuinely cared. The install was clean and quick, and the barriers look great.",
        author: {
          name: "Claudia L.",
          location: "Naples, FL",
          handle: "claudia",
          imageUrl: FaUser,
        },
      },
    ],
  ],
  [
    [
      {
        body: "The ONIX StormShield team built a custom knee wall for one of our doors and installed the barriers on all our openings. Everything blends perfectly with the house. Great craftsmanship and attention to detail.",
        author: {
          name: "David T.",
          location: "Tampa, FL",
          handle: "davidt",
          imageUrl: FaUser,
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "We were so worried about flooding this season, but the team at ONIX StormShield Solutions made the whole process smooth and stress-free. They explained everything clearly, did a professional installation, and now we feel much safer. Highly recommended!",
        author: {
          name: "Susan G.",
          location: "Treasure Island, FL",
          handle: "susang",
          imageUrl: FaUser,
        },
      },
      {
        body: "ONIX StormShield Solutions came out, assessed our home, and had the barriers installed quickly and cleanly. The quality of the product and the installation was excellent. We feel confident going into this storm season.",
        author: {
          name: "Michael R.",
          location: "St. Petersburg, FL",
          handle: "michaelr",
          imageUrl: FaUser,
        },
      },
    ],
  ],
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-blue-dark pt-24 pb-32 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-1313/771 w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-white">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-white sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-blue-light ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-white sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <featuredTestimonial.author.imageUrl className="size-10 flex-none rounded-full" />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <featuredTestimonial.author.logoUrl className="h-10 w-auto flex-none text-blue-500" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-blue-light p-6 ring-1 shadow-lg ring-gray-900/5"
                    >
                      <blockquote className="bg-blue-light">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <testimonial.author.imageUrl className="size-10 rounded-full" />

                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
