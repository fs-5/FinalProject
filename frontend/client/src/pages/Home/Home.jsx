import React, { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Wallpaper from "../../components/header/Wallpaper";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import TabMenu from "../../components/header/TabMenu";

const Home = ({ isLoggedIn }) => {
  // State untuk menyimpan nama pengguna
  const [name, setName] = useState(" ");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (isLoggedIn && storedUsername) {
      console.log("Setting name to:", storedUsername);
      setName(storedUsername);
    } else {
      console.log("Setting name to Guest");
      setName("Guest");
    }
  }, [isLoggedIn]);
  

  return (
    <div>
      <Navbar />
      <p className="w-full bg-blue-300 pt-[5px] items-center justify-center flex">
        Hallo :{" "}
        <span className="font-bold px-[5px] text-blue-900">{name}</span>
      </p>
      <p className="w-full bg-blue-300 pb-[5px] items-center justify-center flex italic text-blue-600 font-semibold">
        Selamat datang di Kamar Kita.
      </p>
      <Wallpaper />
      <Content />
      <Footer />
      <TabMenu isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Home;
