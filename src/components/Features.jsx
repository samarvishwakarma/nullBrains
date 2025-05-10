function Features() {
    const features = [
      { icon: "fa-certificate", title: "Certifications", description: "Each of our plan will provide you and your team with certifications." },
      { icon: "fa-bell", title: "Notifications", description: "Send out notifications to all your customers to keep them engaged." },
      { icon: "fa-box", title: "Bundles", description: "High-quality bundles of awesome tools to help you out." },
      { icon: "fa-code", title: "Developer Tools", description: "Developer tools to help grow your application and keep it up-to-date." },
      { icon: "fa-cubes", title: "Building Blocks", description: "The right kind of building blocks to take your company to the next level." },
      { icon: "fa-ticket-alt", title: "Coupons", description: "Coupon system to provide special offers and discounts for your app." },
    ];
  
    return (
      <section className="py-20 bg-white text-center mx-10 md:mx-32" id="features">
        <h2 className="text-3xl font-bold text-gray-800 ">Our Features</h2>
        <p className="text-gray-600 mb-12">Check out our list of awesome features below.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <i className={`fa ${feature.icon} text-indigo-500 text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Features;