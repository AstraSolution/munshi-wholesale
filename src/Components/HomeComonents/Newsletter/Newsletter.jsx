export default function Newsletter() {
  return (
    <div className="bg-[url('https://as2.ftcdn.net/v2/jpg/04/65/81/67/1000_F_465816712_bJPZ9ahoO71J0H2SLxBCWHN3LxyHMwIf.jpg')] bg-[#000000c2] bg-blend-overlay">
      <div className="container mx-auto py-12 sm:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-white">
              Stay Updated with Our{" "}
              <span className="text-yellow-700">Newsletter</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 lg:w-1/2 mx-auto">
              Subscribe to our newsletter and get the latest news, updates, and
              insights in the world of hardware tech.
            </p>
          </div>

          <form className="flex items-center justify-center mt-5 w-full">
            <input
              type="email"
              className="px-4 py-4 rounded-lg w-3/4 lg:w-1/2"
              placeholder="Enter your email"
            />
            <div>
              <button
                type="submit"
                className="bg-yellow-700 font-semibold px-4 py-4 -ml-3 rounded-tr-lg rounded-br-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
