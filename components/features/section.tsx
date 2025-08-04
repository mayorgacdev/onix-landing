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
    name: "Supply & Installation of Flood Barrier Systems",
    description:
      "We supply and install a wide range of flood protection systems, including Dam Easy, Garrison’s Hammerhead™ barriers, and other advanced solutions.",
    icon: HomeIcon,
    gradient: "from-teal-500 to-cyan-500",
    textColor: "text-teal-400",
  },
  {
    name: "Maintenance & Reinstallation",
    description:
      "We provide seasonal maintenance and reinstallation services to ensure your system remains effective year-round, especially before hurricane season.",
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
    name: "Emergency Installation & Deployment Support",
    description:
      "We offer emergency installation or deployment services for barrier systems when storms are approaching — even if you're not present.",
    icon: BoltIcon,
    gradient: "from-red-500 to-red-600",
    textColor: "text-red-600",
  },
  {
    name: "Commercial & Multi-Unit Protection",
    description:
      "We develop scalable solutions for businesses, apartment complexes, and public buildings — ensuring code compliance and long-term flood resilience.",
    icon: BuildingOfficeIcon,
    gradient: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-600",
  },
  {
    name: "Remote Monitoring & Alerts (Partnership/Tech Integration Idea)",
    description:
      "Through our partner network, we can help set up water sensors or smart flood alerts to notify you if water levels rise near your property",
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
            Our Services
          </p>
          <p className="mt-6 text-lg/8 text-white">
            ONIX StormShield Solutions offers expert supply and installation of
            advanced flood barriers, along with seasonal maintenance and
            emergency deployment services. We protect homes and commercial
            properties, ensuring year-round readiness. Our scalable systems suit
            both residential and multi-unit buildings. Through partners, we also
            offer smart flood monitoring and alerts for added peace of mind.
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
