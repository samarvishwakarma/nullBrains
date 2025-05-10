import { useState } from 'react';

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative">
      <button onClick={toggleSearch} className="text-gray-600 hover:text-blue-600 transition">
        <i className="fas fa-search"></i>
      </button>
      <div
        className={`absolute top-12 right-0 w-64 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;