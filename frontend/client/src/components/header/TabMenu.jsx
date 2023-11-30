import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TabMenu = ({ isLoggedIn, userId, username }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(getInitialSelectedIcon());

  function getInitialSelectedIcon() {
    // Mendapatkan path tanpa slash pertama
    const path = location.pathname.substring(1);

    // Menyesuaikan dengan ID icon yang sesuai dengan path
    if (path === "orderlist") return "iconOrderBook";
    if (path === "savedlist") return "iconSaved";
    if (path === "profile") return "iconProfile";
    // Jika tidak ada cocokan, default ke 'iconHome'
    return "iconHome";
  }

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  const isIconSelected = (iconId) => {
    return selectedIcon === iconId;
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      // Jika sudah login, arahkan ke halaman profil
      navigate(`/profile/${userId}/${username}`);
    } else {
      // Jika belum login, tampilkan pesan alert dan arahkan ke halaman login setelahnya
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="fixed w-full px-[30px] bottom-0 left-0 bg-blue-500">
        <nav className="w-full sm:w-[500px] mx-auto p-[15px]">
          <ul className="flex justify-between items-center">
            <li>
              <Link
                to="/"
                className={`gap-2 flex flex-col justify-center items-center text-lg ${
                  isIconSelected("iconHome") ? "text-white" : "text-blue-800"
                }`}
                onClick={() => handleIconClick("iconHome")}
              >
                <svg
                  id="iconHome"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className={`fill-current ${
                    isIconSelected("iconHome") ? "text-white" : "text-blue-800"
                  } text-2xl`}
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <p>Home</p>
              </Link>
            </li>

            <li>
              <Link
                to="/orderlist"
                className={`gap-2 flex flex-col justify-center items-center text-lg ${
                  isIconSelected("iconOrderBook")
                    ? "text-white"
                    : "text-blue-800"
                }`}
                onClick={() => handleIconClick("iconOrderBook")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className={`fill-current ${
                    isIconSelected("iconOrderBook")
                      ? "text-white"
                      : "text-blue-800"
                  } text-2xl`}
                >
                  <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                <p>Order list</p>
              </Link>
            </li>

            <li>
              <Link
                to="/savedlist"
                className={`gap-2 flex flex-col justify-center items-center text-lg ${
                  isIconSelected("iconSaved") ? "text-white" : "text-blue-800"
                }`}
                onClick={() => handleIconClick("iconSaved")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className={`fill-current ${
                    isIconSelected("iconSaved") ? "text-white" : "text-blue-800"
                  } text-2xl`}
                >
                  <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                </svg>
                <p>Saved</p>
              </Link>
            </li>

            <li>
              <Link
                to="/profile/${userId}/${username}"
                className={`gap-2 flex flex-col justify-center items-center text-lg font-semibold ${
                  isIconSelected("iconProfile") ? "text-white" : "text-blue-800"
                } ${isIconSelected("iconProfile")}`}
                onClick={handleProfileClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className={`fill-current ${
                    isIconSelected("iconProfile")
                      ? "text-white"
                      : "text-blue-800"
                  } text-2xl`}
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TabMenu;
