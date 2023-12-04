// Register.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID library
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    alamat: "",
    no_hp: "",
    userid: uuidv4(), // Generate UUID
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      // Simpan logika kirim data ke API di sini
      const response = await fetch(
        "https://655cb05b25b76d9884fdcad6.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle respons dari API
      if (response.ok) {
        // Registrasi berhasil, lakukan navigasi atau tindakan lainnya
        console.log("Registrasi berhasil");
      } else {
        // Registrasi gagal, tampilkan pesan error atau lakukan tindakan lainnya
        console.error("Registrasi gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div>
      <div className="container w-full mx-auto">
        <div className="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
          <div>
            <h1>Formulir Pendaftaran Akun</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:gap-4 gap-[20px] w-full px-[20px] py-[20px]">
        <form className="sm:grid sm:grid-cols-2 sm:gap-4" method="post">
          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">Nama:</label>
            <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
              <svg
                className="ml-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
              <div className="w-full">
                <input
                  className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                  type="text"
                  name="name"
                  placeholder="Jhon Tor"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">Username:</label>

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
                  className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                  type="text"
                  name="username"
                  placeholder="jhontor123"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">Email:</label>

            <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
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
                  placeholder="jhontor09@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">No HP/Telepon:</label>

            <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
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
                  type="text"
                  name="no_hp"
                  placeholder="081232141213"
                  value={formData.no_hp}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">Password :</label>

            <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
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
                  placeholder="PasswordAnda"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]">Alamat :</label>

            <div className="flex focus:outline-none items-center gap-3 border-[1px] border-gray-600 p-[10px] rounded-[10px]">
              <svg
                className="ml-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <div className="w-full">
                <input
                  className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                  type="text"
                  name="alamat"
                  placeholder="jl.contoh alamat no.1"
                  value={formData.alamat}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="container flex flex-col gap-2 justify-center items-center md:justify-end md:flex md:items-center mb-5">
            <button
              className="bg-blue-500 p-[10px] text-white w-full md:w-full rounded-md hover:bg-blue-700"
              type="button"
              onClick={handleRegister}
            >
              Daftar
            </button>
          </div>
          <div className="container mb-[20px] justify-center items-center flex">
            <div className="flex">
              <p className="mr-[5px]">Sudah Punya Akun ? </p>
              <Link className="text-blue-500" to={"/login"}>
                Masuk Disini
              </Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
