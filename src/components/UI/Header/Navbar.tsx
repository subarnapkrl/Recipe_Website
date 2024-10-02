import { IoIosSearch } from "react-icons/io";
import { useHomePageStore } from "../../../store/store";
import { categories, links } from "../../../types";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { openModal, toggleModal } = useHomePageStore();

  const navigate = useNavigate();

  function handleClick(path: string) {
    navigate(path);
    toggleModal();
  }

  return (
    <nav className="bg-white p-3 ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        {/* Menu Icon */}
        <div className="flex items-center justify-around space-x-2 cursor-pointer">
          {openModal && (
            <div className="bg-green px-[20px] py-[20px] lg:px-[60px] lg:py-[60px] fixed top-0 left-0 md:w-[35vw] md:h-[100vh] z-50 transition-all duration-300 w-[100vw] h-screen">
              {/* Categories */}
              <div>
                <div className="flex items-center justify-between ">
                  <h6 className="text-beige shadow-md text-left uppercase">
                    Categories
                  </h6>
                  <svg
                    onClick={toggleModal}
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <path
                      d="M15.2842 14.2156C15.425 14.3578 15.504 14.5499 15.504 14.75C15.504 14.9501 15.425 15.1422 15.2842 15.2844C15.1408 15.423 14.9492 15.5005 14.7498 15.5005C14.5504 15.5005 14.3588 15.423 14.2154 15.2844L7.99982 9.05938L1.7842 15.2844C1.64084 15.423 1.44924 15.5005 1.24982 15.5005C1.05041 15.5005 0.858804 15.423 0.715449 15.2844C0.574613 15.1422 0.495605 14.9501 0.495605 14.75C0.495605 14.5499 0.574613 14.3578 0.715449 14.2156L6.94045 8L0.715449 1.78438C0.595852 1.63866 0.534733 1.45366 0.543981 1.26537C0.553228 1.07708 0.632181 0.898961 0.765482 0.76566C0.898783 0.632359 1.0769 0.553406 1.26519 0.544158C1.45348 0.534911 1.63848 0.59603 1.7842 0.715627L7.99982 6.94063L14.2154 0.715627C14.3612 0.59603 14.5462 0.534911 14.7345 0.544158C14.9227 0.553406 15.1009 0.632359 15.2342 0.76566C15.3675 0.898961 15.4464 1.07708 15.4557 1.26537C15.4649 1.45366 15.4038 1.63866 15.2842 1.78438L9.0592 8L15.2842 14.2156Z"
                      fill="#FBF5F1"
                    />
                  </svg>
                </div>
                <ul className="p-1 md:p-3 md:space-y-3">
                  {categories.map((list) => (
                    <li key={list.id} onClick={() => handleClick(list.path)}>
                      <h3 className="xl:text-h3 text-h4 text-left font-bold p-3 text-white">
                        {list.name}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Links */}
              <div className="space-y-2 mt-2">
                <h6 className="text-white shadow-md inline text-left uppercase">
                  Links
                </h6>
                <ul>
                  {links.map((link) => (
                    <li key={link.id}>
                      <h4
                        className="text-h4  p-3 text-white cursor-pointer"
                        onClick={() => handleClick(link.path)}
                      >
                        {link.name}
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div
            className="flex items-center justify-between space-x-2"
            onClick={toggleModal}
          >
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

            <h2 className="sm:text-h6 sm:font-bold sm:text-blue sm:tracking-wider hidden sm:block">
              Menu
            </h2>
          </div>
        </div>
        {/* Heading */}
        <div className="cursor-pointer">
          <div
            className="uppercase font-extrabold  md:text-h5 text-h6 text-blue tracking-wider md:tracking-widest"
            onClick={() => navigate("/")}
          >
            <h1>All You</h1>
            <h1>Can Eat</h1>
          </div>
        </div>
        {/* Search Icon */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/search")}
        >
          <IoIosSearch fill="blue" size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
