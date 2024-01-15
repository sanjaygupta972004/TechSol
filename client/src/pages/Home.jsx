import Analytics from "../components/Analytics";
import { home, home2 } from "../images/image";

export const Home = () => {
  return (
    <>
      <main>
        <section className="bg-gray-100 py-8 md:py-12">
          <div className="container mx-auto grid grid-cols-1 md:pr-5 md:grid-cols-2 gap-8 md:gap-10">
            <div className="flex flex-col justify-center px-4 md:px-0">
              <p className="text-xl md:text-3xl text-gray-700 mb-2 md:mb-0">We are the World Best IT Company</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">Welcome to Paul Technical</h1>
              <p className="text-lg md:text-2xl text-gray-500 mb-4 md:mb-5">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Paupa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-5">
                <a href="/contact" className="bg-gray-900 text-white rounded-md font-medium hover:bg-cyan-400 hover:text-black p-1">Connect Now</a>
                <a href="/services" className="bg-gray-900 text-white rounded-md font-medium hover:bg-cyan-400 hover:text-black p-1">Learn More</a>
              </div>
            </div>

            <div className="flex justify-center items-center bg-cyan-800 p-1">
              <img
                src={home}
                alt="coding together"
                className=" md:w-auto h-auto rounded-sm"
              />
            </div>
          </div>
        </section>
        <Analytics />

        <section className="bg-gray-100 py-8 md:py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center bg-cyan-600 p-1">
              <img
                src={home2}
                alt="coding together"
                className="md:w-auto h-auto rounded-sm"
              />
            </div>

            <div className="flex flex-col justify-center px-4 md:px-3 ">
              <p className="text-lg md:text-2xl text-gray-600 mb-2 md:mb-0">We are here to help you</p>
              <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3 md:mb-4">Get Started Today</h1>
              <p className="text-base md:text-xl text-gray-400 mb-4 md:mb-6">
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Paul Technical can help your business thrive in
                the digital age.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-5">
                <a href="/contact" className="bg-gray-900 text-white rounded-md font-medium hover:bg-cyan-400 hover:text-black p-1">Connect Now</a>
                <a href="/services" className="bg-gray-900 text-white rounded-md font-medium hover:bg-cyan-400 hover:text-black p-1">Learn More</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
