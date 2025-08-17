import {
  CheckCircleIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="overflow-hidden bg-blue-dark py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Onix StormShield
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Your trusted partner in flood protection solutions across Florida.
            We combine innovation with proven technology to safeguard what
            matters most.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-indigo-400" />
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-white">
                Our Mission
              </h3>
            </div>
            <p className="mt-6 text-base/7 text-gray-300">
              To protect what matters most by providing reliable, accessible,
              and easy-to-install flood control solutions with exceptional
              customer-focused service.
            </p>
            <p className="mt-4 text-base/7 text-gray-300">
              We believe every home and business deserves the highest level of
              protection against flood damage, delivered with professionalism
              and care.
            </p>
          </div>

          <div className="lg:pr-4">
            <div className="flex items-center gap-3 mb-4">
              <UsersIcon className="h-8 w-8 text-indigo-400" />
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-white">
                Our Vision
              </h3>
            </div>
            <p className="mt-6 text-base/7 text-gray-300">
              To become the leading flood protection company in the U.S., known
              for innovation, social responsibility, and excellence in service.
            </p>
            <p className="mt-4 text-base/7 text-gray-300">
              We strive to set industry standards while building lasting
              relationships with our communities and customers.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Our Core Values
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
                <CheckCircleIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality</h4>
              <p className="text-sm text-gray-300">
                We never compromise on the quality of our products and services,
                ensuring the best protection for your property.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Reliability
              </h4>
              <p className="text-sm text-gray-300">
                Our systems are tested and proven to work when you need them
                most, providing peace of mind during storm season.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
                <UsersIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Service</h4>
              <p className="text-sm text-gray-300">
                Exceptional customer service is at the heart of everything we
                do, from initial consultation to ongoing support.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-20">
          <div className="bg-white/5 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
                  Years of Experience
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  With 4+ years of dedicated work in flood protection, storm
                  damage prevention, and property damage repair, our team has
                  already safeguarded and restored hundreds of properties across
                  Florida.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400">
                      200+
                    </div>
                    <div className="text-sm text-gray-300">
                      Properties Protected & Restored
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400">4+</div>
                    <div className="text-sm text-gray-300">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Expert Installation
                    </h4>
                    <p className="text-sm text-gray-300">
                      Professional installation by certified technicians
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">24/7 Support</h4>
                    <p className="text-sm text-gray-300">
                      Round-the-clock emergency response and support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Warranty Coverage
                    </h4>
                    <p className="text-sm text-gray-300">
                      Comprehensive warranty on all products and services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
