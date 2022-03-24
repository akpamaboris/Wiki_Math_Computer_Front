export const Footer = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="my-3 text-3xl font-bold md:text-4xl font-heading">
            By Boris Akpama{" "}
          </h2>
          <p className="leading-relaxed text-blueGray-400">
            Contact Me for more.
          </p>
          <div className="mt-8">
            <a
              className="block px-8 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
              href="https://www.linkedin.com/in/borisakpama/"
              data-removed="true"
            >
              LinkedIn
            </a>
            <a
              className="block px-8 py-4 text-xs font-semibold leading-none text-center bg-white border rounded sm:inline-block text-blueGray-500 hover:text-blueGray-600 border-blueGray-200 hover:border-blueGray-300"
              href="https://github.com/akpamaboris"
              data-removed="true"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
