import google from '../assets/google.png';
import disney from '../assets/disney.png';
import slack from '../assets/slack.png';
import youtube from '../assets/youtube.png';
import shopify from '../assets/shopify.png';
import hubspot from '../assets/hubspot.png';

function Hero() {
    return (
      <section id="home" className="text-center py-40 mx-10 md:mx-32">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Start Crafting Your 
        </h1>
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">
          Next Great Idea
        </h1>
        <p className="text-gray-600 mt-8">
          Simplifying the creation of landing pages, blog pages, 
        </p>
        <p className="text-gray-600 mb-8">
          application pages, and so much more!
        </p>
        <div className="relative inline-block">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition">
            Purchase Now
          </button>
          <span className="absolute -top-3 -right-6 bg-teal-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
            only $15/mo
          </span>
        </div>
        <div className="mt-2">
          <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition">Learn More</a>
        </div>
        <div className="mt-44 ">
          <p className="text-gray-800 mb-10 font-semibold">TRUSTED BY TOP-LEADING COMPANIES.</p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:mx-20 items-center">
            <img src={google} alt="Google" className="h-8" />
            <img src={disney} alt="Disney" className="h-8" />
            <img src={hubspot} alt="Hubspot" className="h-8" />
            <img src={youtube} alt="YouTube" className="h-8" />
            <img src={slack} alt="Slack" className="h-8" />
            <img src={shopify} alt="Shopify" className="h-8" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;