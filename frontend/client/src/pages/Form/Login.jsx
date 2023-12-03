import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Gantilah URL_API dengan URL sesuai API Anda
    const URL_API = "https://655cb05b25b76d9884fdcad6.mockapi.io/users";

    // Menggunakan fetch untuk mengambil data pengguna dari API
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data Pengguna:", data);
        // Contoh sederhana autentikasi
        const user = data.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          setLoggedIn(true);
          setError("");

          // Simpan nama pengguna di localStorage
          localStorage.setItem("username", username);

          // Lakukan navigasi ke halaman home setelah login berhasil
          navigate("/");
        } else {
          setLoggedIn(false);
          setError("Username atau password salah.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Terjadi kesalahan saat mengambil data pengguna.");
      });
  };

  return (
    <div className="md:w-screen md:h-screen w-screen h-screen">
      <div className="container w-full mx-auto">
        <div className="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
          <div>
            <h1>Silakan Masuk Akun</h1>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="flex flex-col sm:gap-4 gap-[20px] w-screen h-auto px-[20px] py-[20px] sm:items-center sm:justify-center sm:w-full">
        <form className="items-center flex flex-col ">
          {/* username */}
          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]" htmlFor="username">
              Username:
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
              <div className="w-full">
                <input
                  className="focus:outline-none focus:outline-blue-300 focus:rounded-sm text-black py-[5px] px-[10px] w-full"
                  type="text"
                  placeholder="Masukan username anda."
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* password */}
          <div className="container flex flex-col mb-[20px]">
            <label className="mb-[10px]" htmlFor="username">
              Password:
            </label>

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
                  placeholder="Masukan password anda."
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* button login */}
          <div className="container flex flex-col gap-2 mx-[20px] justify-center items-center md:justify-end md:flex md:items-center mb-5">
            <button
              className="bg-blue-500 p-[10px] text-white w-full md:w-full rounded-md hover:bg-blue-700"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

        <div className="container mb-[20px] justify-center items-center flex">
            <div className="flex">
              <p className="mr-[5px]">Belum Punya Akun ? </p>
              <Link className="text-blue-500" to={"/register"}>
                Daftar Disini
              </Link>
            </div>
          </div>

          <Footer/>
    </div>
  );
};

export default Login;
