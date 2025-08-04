import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do Dam Easy™ flood barriers work?",
    answer:
      "Dam Easy™ barriers create a watertight seal across doorways or other entry points. The unit expands to fit snugly between the walls of the opening and is locked in place, blocking up to 28 inches of water.",
  },
  {
    question: "Do I need tools or drilling to install them?",
    answer:
      "For single barrier installations, no tools or drilling are required. However, if multiple barriers are used to protect a wide opening, extension poles are added — these require anchor points to be drilled and secured for proper stability and sealing.",
  },
  {
    question: "What types of openings can be protected?",
    answer:
      "These barriers are ideal for standard doors, patio entrances, garage doors, and commercial entry points. For larger or custom openings, we offer additional components like half barriers and extension poles.",
  },
  {
    question: "How much water can the barriers hold back?",
    answer:
      "Each Dam Easy™ unit is designed to hold back up to 28 inches of water, assuming proper installation on a compatible surface.",
  },
  {
    question: "What if my doorway isn’t perfectly flat or level?",
    answer:
      "We inspect every property before installation. If the threshold doesn’t meet the height or sealing requirements, we can build a custom knee wall, extend steps, or make surface adjustments to ensure a secure fit.",
  },
  {
    question: "Are the barriers reusable?",
    answer:
      "Yes. Dam Easy™ barriers are built for repeated use and long-term protection. Simply remove, clean, and store them when not in use.",
  },
  {
    question: "Is there a warranty included?",
    answer:
      "All barriers include a manufacturer’s warranty, and ONIX StormShield Solutions offers additional local support for repairs, adjustments, or replacements when needed.",
  },
  {
    question: "Do you offer professional installation?",
    answer:
      "Absolutely. We have both a licensed General Contractor and a Structural Engineer on our team. We not only install the system but also make any required modifications to ensure proper functionality.",
  },
  {
    question: "How can I schedule a free demo?",
    answer:
      "To schedule your free in-home demo, simply fill out the contact form on our website. One of our specialists will reach out to confirm a date and time that works for you.",
  },
  {
    question: "How long does it take to complete installation?",
    answer:
      "Once you approve the quote, the barriers and installation are completed within 3 weeks. We’ll keep you updated throughout the process to ensure smooth scheduling and delivery.",
  },
];

export default function Questions() {
  return (
    <div className="bg-blue-dark">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
