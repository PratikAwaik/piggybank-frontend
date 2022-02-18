import React from "react";

const Main = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="section-1 flex justify-center items-center w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="text-blue font-bold text-5xl leading-snug mb-8">
              Powerfully Simple <br />{" "}
              <span className="bg-pink-200 px-2 rounded-md">Business</span>{" "}
              Banking
            </h2>
            <p className="leading-tight mb-8 text-xl text-gray-600">
              Built for small business owners, entrepreneurs, <br />
              and freelancers. No hidden fees, no hassle.
            </p>

            <div className="flex items-center">
              <div className="flex items-center py-2 px-5 mr-5 text-blue rounded-md border border-slate-300 shadow-md cursor-pointer">
                <i className="ri-apple-fill text-4xl mr-2"></i>
                <p className="text-xs">
                  Download on the <br />
                  <span className="text-xl font-bold">App Store</span>
                </p>
              </div>

              <div className="flex items-center py-2 px-5 mr-5 text-blue rounded-md border border-slate-300 shadow-md cursor-pointer">
                <i className="ri-google-play-fill text-4xl mr-2"></i>
                <p className="text-xs">
                  GET IT ON <br />
                  <span className="text-xl font-bold">Google Play</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./landing.png"
              className="landing-illustration"
              alt="Landing Page illustration"
            />
          </div>
        </div>
      </section>

      <section className="section-2 my-6" id="how-it-works">
        <div className="w-full text-center text-blue font-bold text-4xl mb-6">
          How It Works
        </div>
        <div className="flex items-center justify-between px-5">
          <div className="w-1/3 text-center mx-4">
            <div className="w-full mb-4 flex items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full font-bold">
                1
              </span>
            </div>
            <h3 className="text-blue-800 font-bold text-xl mb-2">Register</h3>
            <p className="text-gray-600">
              Register yourself as a Piggy Bank user
            </p>
          </div>
          <div className="w-1/3 text-center mx-4">
            <div className="w-full mb-4 flex items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full font-bold">
                2
              </span>
            </div>
            <h3 className="text-blue-800 font-bold text-xl mb-2">
              Configure your Piggy Bank
            </h3>
            <p className="text-gray-600">
              Configure your Piggy Bank by adding your business bank details
            </p>
          </div>
          <div className="w-1/3 text-center mx-4">
            <div className="w-full mb-4 flex items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full font-bold">
                3
              </span>
            </div>
            <h3 className="text-blue-800 font-bold text-xl mb-2">Success</h3>
            <p className="text-gray-600">
              Use all of Piggy Bank's features and take your business to the
              moon
            </p>
          </div>
        </div>
      </section>

      <section className="section-3 my-20" id="features">
        <div className="w-full text-center text-blue font-bold text-4xl">
          Some of our Wonderful features
        </div>
        <div className="mx-auto w-10/12 my-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2 mx-10">
              <p className="text-4xl text-blue font-bold mb-5">
                Wonderful & effortless way to view your balance
              </p>
              <p className="text-gray-600 mb-5">
                Awesome visual and design of your card that we hope will help
                you understand more quickly to your card information. Also, it
                looks cool, right?
              </p>
              <button
                type="button"
                className="px-5 py-3 border-2 border-blue-800 font-bold text-blue rounded-3xl hover:bg-blue-800 hover:text-white tracking-wide"
              >
                Learn More
              </button>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src="./landing-balance.png"
                className="landing-balance-illustration"
                alt="Landing Balance"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-10/12 my-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2 flex justify-center">
              <img
                src="./landing-limiter.png"
                className="landing-limiter-illustration"
                alt="Landing Limiter"
              />
            </div>
            <div className="w-1/2 mx-10">
              <p className="text-4xl text-blue font-bold mb-5">
                Keep an eye to your Expenses with our Limiter
              </p>
              <p className="text-gray-600 mb-5">
                Introducing the Limiter, as the name you can expect it's just a
                limiter for your expenses. It helps you limit your expenses so
                that you can focus more on other essential parts of your
                business.
              </p>
              <button
                type="button"
                className="px-5 py-3 border-2 border-blue-800 font-bold text-blue rounded-3xl hover:bg-blue-800 hover:text-white tracking-wide"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="my-20">
        <div className="border-2 shadow-xl rounded-lg">
          <div className="w-full text-center text-blue font-bold text-4xl my-6">
            Need some help? Contact Us!
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex flex-col items-start w-1/2 mr-4">
                <label htmlFor="name" className="mb-1 font-bold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-transparent border-2 rounded-md outline-none focus-within::bg-transparent focus:border-blue-800"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col items-start w-1/2 mr-4">
                <label htmlFor="email" className="mb-1 font-bold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-transparent border-2 rounded-md outline-none focus-within::bg-transparent focus:border-blue-800"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex flex-col items-start w-full mb-4">
              <label htmlFor="message" className="mb-1 font-bold text-lg">
                Message
              </label>
              <textarea
                rows={6}
                className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white border-2 border-solid border-gray-300 rounded focus:bg-white focus:border-blue-800 focus:outline-none"
                id="message"
              ></textarea>
            </div>
            <button
              type="button"
              className="flex items-center px-5 py-2 border-2 border-blue-800 font-bold text-blue rounded-2xl hover:bg-blue-800 hover:text-white tracking-wide"
            >
              <i className="ri-send-plane-line mr-2"></i>Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
