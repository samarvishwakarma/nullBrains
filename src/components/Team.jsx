import person_1 from '../assets//teams/1.png';
import person_2 from '../assets//teams/2.png';
import person_3 from '../assets//teams/3.png';
import person_4 from '../assets//teams/4.png';
import person_5 from '../assets//teams/5.png';
import person_6 from '../assets//teams/6.png';
import person_7 from '../assets//teams/7.png';
import person_8 from '../assets//teams/8.png';

function Team() {
    const teamMembers = [
      { name: "Freddy Smith", role: "CEO and Founder", image: person_1, bgColor: "bg-blue-100", bg2Color: "bg-blue-300", },
      { name: "Carl Jones", role: "CTO and Co-Founder", image: person_2, bgColor: "bg-orange-100", bg2Color: "bg-orange-300", },
      { name: "Susan Peterson", role: "Marketing Directory", image: person_3, bgColor: "bg-yellow-100", bg2Color: "bg-yellow-300", },
      { name: "Tommy Barnes", role: "Designer", image: person_4, bgColor: "bg-gray-100", bg2Color: "bg-gray-300", },
      { name: "Ron Johnson", role: "Senior Developer", image: person_5, bgColor: "bg-indigo-100", bg2Color: "bg-indigo-300", },
      { name: "Pete Tompkins", role: "Web Developer", image: person_6, bgColor: "bg-green-100", bg2Color: "bg-green-300", },
      { name: "Kelly Richards", role: "Sales Manager", image: person_7, bgColor: "bg-pink-100", bg2Color: "bg-pink-300", },
      { name: "Alexis Jordan", role: "Affiliate Manager", image: person_8, bgColor: "bg-red-100", bg2Color: "bg-red-300", },
    ];
  
    return (
      <section className="relative py-20 bg-white text-center shadow-bottom" id="team">
        <div className="relative overflow-hidden">
          <div
            className="absolute left-1/2 transform translate-x-1/2 w-72 h-16 bg-blue-200 bg-opacity-50 rounded-full z-1 
                      md:w-96 md:h-20 
                      lg:w-[500px] lg:h-24"
          ></div>
          <div className="flex text-left flex-col flex-shrink mx-10 md:mx-32">
            <p className="text-indigo-500 font-medium text-sm">OUR TEAM</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-12">An incredible team of <br/> amazing individuals</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-6 mx-10 md:mx-32">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center pb-5">
              <div key={index} className={`rounded-tr-none rounded-full h-40 w-40 ${member.bgColor} mx-auto mb-2 flex`}>
                <img src={member.image} alt={member.name} className={`rounded-full h-36 w-36 ${member.bg2Color} ml-2 self-center content-center`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Team;