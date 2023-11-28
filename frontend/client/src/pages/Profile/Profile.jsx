import React from "react";
import TabMenu from "../../components/header/TabMenu";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  return (
    <div>
      <div class="container w-full mx-auto  ">
        {/* info login */}
        <div class="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
          <div>
            <h1>Info Profil Anda</h1>
          </div>
        </div>
      </div>
      {/* form */}
      <div class="profile container mx-auto">
        <div class="w-[110px] bg-blue-900 my-[30px] p-[30px] rounded-full justify-center items-center mx-auto flex">
          <svg
            class="w-[50px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
        {/* batas */}
        <div class="flex flex-col sm:gap-4 gap-[20px] w-full px-[20px] py-[20px]">
          <form
            class="sm:grid sm:grid-cols-2 sm:gap-4"
            id="form-profile"
            action=""
            method="post"
          >
            {/* username */}
            <div class="container flex flex-col mb-[20px]">
              <label class="mb-[10px]" for="username">
                Username
              </label>
              <div class="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  class="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <div class="w-full">
                  <input
                    class="focus:outline-none text-black py-[5px] px-[10px] w-full"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div class="container flex flex-col mb-[20px]">
              <label class="mb-[10px]" for="email">
                Email
              </label>
              <div class="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  class="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <div class="w-full">
                  <input
                    class="focus:outline-none text-black py-[5px] px-[10px] w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contoh@gmail.com"
                  />
                </div>
              </div>
            </div>
            {/* no hp */}
            <div class="container flex flex-col mb-[20px]">
              <label class="mb-[10px]" for="noHP">
                No Hp/Telepon
              </label>
              <div class="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  class="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
                <div class="w-full">
                  <input
                    class="focus:outline-none text-black py-[5px] px-[10px] w-full"
                    type="number"
                    name="noHP"
                    id="noHP"
                    placeholder="081234567890"
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div class="container flex flex-col">
              <label class="mb-[10px]" for="passworde">
                Password
              </label>
              <div class="flex items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
                <svg
                  class="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
                <div class="w-full">
                  <input
                    class="focus:outline-none text-black py-[5px] px-[10px] w-full"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password123"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* button */}
          <div class="w-full flex flex-col sm:flex sm:flex-row mt-[20px] mb-[50px] gap-2">
            <button class="w-full border-[1px] border-black rounded-[10px] bg-blue-800 text-white py-[10px]">
              Ubah Data
            </button>

            <button class="w-full border-[1px] border-black rounded-[10px] bg-blue-400 text-white py-[10px]">
              Keluar Akun
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <TabMenu />
    </div>
  );
};

export default Profile;
