import productivityImage from '../assets/productivity.webp';
import settingsImage from '../assets/settings.webp';

function Productivity() {
    return (
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className=' box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 pb-5'>
          <div className='box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10'>
            <img
              src={productivityImage}
              alt="Productivity Illustration"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
            />
          </div>
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">Boost Productivity</h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Maximize productivity and growth
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Speed past your competition
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Learn the top techniques
              </li>
            </ul>
          </div>
        </div>
        <div className='box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16'>
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">Automated Tasks</h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the leaders in the industry.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Automated task management workflow
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Detailed analytics for your data
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i> Some awesome integrations
              </li>
            </ul>
          </div>
          <div className='box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2'>
            <img
              src={settingsImage}
              alt="Tasks Illustration"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Productivity;