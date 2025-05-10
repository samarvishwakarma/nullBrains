function Footer() {
    return (
      <footer className="py-12 bg-white text-center border-t" id="contact">
        <ul className="flex justify-center space-x-6 mb-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Blog</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Team</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Terms</a></li>
        </ul>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
        <p className="text-gray-600">© 2021 SomeCompany, Inc. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;