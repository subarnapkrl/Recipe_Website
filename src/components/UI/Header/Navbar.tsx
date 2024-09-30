const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Menu Icon */}
        <div className="flex items-center justify-around space-x-2">
          <svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75Z"
              fill="#2F5FC7"
            />
          </svg>

          <h2 className="text-xl tracking-wider color-blue ">Menu</h2>
        </div>
        {/* heading */}
        <div>
          <h1>All You Can Eat</h1>
        </div>
        {/* Search Icon */}
        <div>
          <h3>Search</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
