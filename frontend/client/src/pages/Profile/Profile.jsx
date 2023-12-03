import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabMenu from "../../components/header/TabMenu";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  const Navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    no_hp: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUsername = localStorage.getItem("username");

        if (storedUsername) {
          const response = await fetch(
            `https://655cb05b25b76d9884fdcad6.mockapi.io/users?username=${storedUsername}`
          );
          const data = await response.json();

          if (data.length > 0) {
            const userFromAPI = data[0];
            setUserData({
              username: userFromAPI.username,
              email: userFromAPI.email,
              no_hp: userFromAPI.no_hp,
              password: userFromAPI.password,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditSave = async () => {
    if (isEditing) {
      try {
        // Lakukan permintaan PUT ke backend dengan data pengguna yang diperbarui
        const response = await fetch(
          `https://655cb05b25b76d9884fdcad6.mockapi.io/users/${userData.userid}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userData.username,
              email: userData.email,
              no_hp: userData.no_hp,
              password: userData.password,
            }),
          }
        );

        if (response.ok) {
          console.log("Data pengguna diperbarui !");
        } else {
          console.error("Gagal menyimpan perubahan...");
        }
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }

    // Toggle kembali antara mode pengeditan dan mode tampilan
    setIsEditing((prevEditing) => !prevEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    Navigate("/");
    window.location.reload();
  };

  return (
    <div className="">
      <div className="container w-full mx-auto">
        <div className="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
          <div>
            <h1>Info Profil Anda</h1>
          </div>
        </div>
      </div>

      <div className="profile container mx-auto">
        <div className="w-[110px] bg-blue-900 my-[30px] p-[30px] rounded-full justify-center items-center mx-auto flex">
          <svg
            className="w-[50px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>

        <div className="flex flex-col sm:gap-4 gap-[20px] w-full px-[20px] py-[20px]">
          <form
            className="sm:grid sm:grid-cols-2 sm:gap-4"
            id="form-profile"
            action=""
            method="post"
          >
          {/* username */}
            <div className="container flex flex-col mb-[20px]">
              <label className="mb-[10px]" htmlFor="username">
                Username
              </label>
              <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  className="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <div className="w-full ">
                  <input
                    className={`focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full ${
                      isEditing ? "" : "cursor-not-allowed"
                    }`}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={userData.username}
                    readOnly={!isEditing}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* email */}
            <div className="container flex flex-col mb-[20px]">
              <label className="mb-[10px]" htmlFor="email">
                Email
              </label>
              <div className="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  className="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    readOnly={!isEditing}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* no hp */}
            <div className="container flex flex-col mb-[20px]">
              <label className="mb-[10px]" htmlFor="no_hp">
                No Hp/Telepon
              </label>
              <div className="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  className="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                    type="number"
                    name="no_hp"
                    id="no_hp"
                    value={userData.no_hp}
                    readOnly={!isEditing}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div className="container flex flex-col">
              <label className="mb-[10px]" htmlFor="password">
                Password
              </label>
              <div className="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  className="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                    type="password"
                    name="password"
                    id="password"
                    value={userData.password}
                    readOnly={!isEditing}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

          </form>
        </div>

        <div className="flex flex-col gap-2 mx-[20px] justify-center items-center md:pr-[20px] md:justify-end md:flex md:items-end mb-5">
          <button
            className="bg-blue-500 p-[10px] text-white w-full md:w-[200px] rounded-md hover:bg-blue-700"
            onClick={handleEditSave}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            className="bg-red-500 p-[10px] text-white w-full md:w-[200px] rounded-md hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
      <TabMenu />
    </div>
  );
};

export default Profile;
