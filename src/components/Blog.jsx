import refresh_design from '../assets/refresh_design.png';
import orange from '../assets/orange.png';
import game from '../assets/game.webp';
import work from '../assets/work.png';
import food from '../assets/food.webp';
import book from '../assets/book.jpg';


function Blog() {
    const posts = [
      {
        category: "Resources",
        title: "Refreshing Designs",
        description: "Quench satisfying designs to help you stir up emotion and tell a story.",
        image: refresh_design,
        bgColor: "bg-indigo-400",
        bg2Color: "bg-indigo-600",
        textColor: "text-indigo-400",
      },
      {
        category: "Lifestyle",
        title: "Healthier Lifestyle",
        description: "Living a healthier lifestyle will help with your productivity and your mindset.",
        image: orange,
        bgColor: "bg-orange-400",
        bg2Color: "bg-orange-600",
        textColor: "text-orange-400",
      },
      {
        category: "Entertainment",
        title: "Gaming Evolution",
        description: "Learn about the evolution of gaming and how it started a revolution.",
        image: game,
        bgColor: "bg-yellow-400",
        bg2Color: "bg-yellow-600",
        textColor: "text-yellow-400",
      },
    ];
    const posts2 = [
      {
        category: "Inspiration",
        title: "Best Workstations of the Year",
        description: "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
        image: work,
        bgColor: "bg-indigo-400",
      },
      {
        category: "Food",
        title: "Eating for Productivity",
        description: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
        image: food,
        bgColor: "bg-red-400",
      },
      {
        category: "Resources",
        title: "A Design Mind-set",
        description: "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
        image: book,
        bgColor: "bg-blue-400",
      },
    ];
  
    return (
      <section className="py-20 bg-white mx-10 md:mx-32" id="blog">
        <h2 className="text-3xl font-bold text-gray-800 px-6">The Project Blog</h2>
        <p className="text-gray-600 mb-12 px-6">Designs and layouts to help you with your app.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {posts.map((post, index) => (
            <div key={index} className={`${post.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition`}>
              <img src={post.image} alt={post.title} className={`${post.bg2Color} w-full h-50 object-cover shadow-inner`} />
              <div className="p-6 relative">
                <span className={`text-xs ${post.textColor} uppercase bg-white rounded-2xl font-semibold py-2 px-5 absolute -top-4`}>{post.category}</span>
                <h3 className="text-4xl font-bold text-white mt-2">{post.title}</h3>
                <p className="text-white mt-2">{post.description}</p>
              </div>
            </div>
          ))}
          {posts2.map((post, index) => (
            <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition`}>
              <img src={post.image} alt={post.title} className={`bg-gray-50 w-full h-40 object-cover shadow-inner`} />
              <div className="p-6 relative">
                <span className={`text-xs text-white uppercase ${post.bgColor} rounded-2xl font-semibold py-2 px-5 absolute -top-4`}>{post.category}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Blog;