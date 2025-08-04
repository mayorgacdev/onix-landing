export default function About() {
  return (
    <div className="overflow-hidden bg-blue-dark py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-white">About us</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-400 sm:text-5xl">
            On a mission
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-white">
            At ONIX StormShield Solutions, we specialize in flood protection
            with innovative, fast, and effective systems to safeguard homes and
            businesses. With a background in construction and a passion for
            safety, we deliver peace of mind before, during, and after the
            storm.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-400">
              Our mission
            </h2>
            <p className="mt-6 text-base/7 text-white">
              To protect what matters most by providing reliable, accessible,
              and easy-to-install flood control solutions with exceptional
              customer-focused service.
            </p>
            <p className="mt-8 text-base/7 text-white"></p>
          </div>

          <div className="lg:pr-4">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-400">
              Our vision
            </h2>
            <p className="mt-6 text-base/7 text-white">
              To become the leading flood protection company in the U.S., known
              for innovation, social responsibility, and excellence in service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
