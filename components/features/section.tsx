import {
  HomeIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  BoltIcon,
  BuildingOfficeIcon,
  BellAlertIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Free On-Site Assessment",
    description:
      "Personalized evaluations to identify flood risks and recommend optimal protection systems for your property.",
    icon: HomeIcon,
    gradient: "from-teal-500 to-cyan-500",
    textColor: "text-teal-400",
  },
  {
    name: "Barrier Installation",
    description:
      "Professional installation of advanced systems like Dam Easy and Garrison's Hammerhead™ — even in your absence.",
    icon: WrenchScrewdriverIcon,
    gradient: "from-green-500 to-green-600",
    textColor: "text-green-600",
  },
  {
    name: "Maintenance Services",
    description:
      "Seasonal service to ensure continued protection, especially before hurricane season.",
    icon: CalendarDaysIcon,
    gradient: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Emergency Response",
    description:
      "Rapid deployment for emergency setups when storms are imminent and time is critical.",
    icon: BoltIcon,
    gradient: "from-red-500 to-red-600",
    textColor: "text-red-600",
  },
  {
    name: "Commercial Solutions",
    description:
      "Scalable flood protection solutions for businesses, apartments, and public buildings.",
    icon: BuildingOfficeIcon,
    gradient: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-600",
  },
  {
    name: "Smart Monitoring",
    description:
      "Smart flood sensors and alert systems via partner integrations for proactive protection.",
    icon: BellAlertIcon,
    gradient: "from-indigo-500 to-indigo-600",
    textColor: "text-indigo-600",
  },
];


export default function Section() {
  return (
    <div className="bg-blue-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-white">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Lorem ipsum title
          </p>
          <p className="mt-6 text-lg/8 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-indigo-500"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
