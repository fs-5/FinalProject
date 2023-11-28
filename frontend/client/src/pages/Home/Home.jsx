// Home
import React from "react";
import { useState } from "react";
import Navbar from "../../components/header/Navbar";
import Wallpaper from "../../components/header/Wallpaper";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import TabMenu from "../../components/header/TabMenu";




const Home = () => {

  // State untuk menyimpan status login dan nama pengguna
  const [name, setName] = useState("Guest");

  return (
    <div>
      <Navbar />
      <p className="w-full bg-blue-300 pt-[5px] items-center justify-center flex">Hallo : <span className="font-bold px-[5px] text-blue-900">{name}</span></p>
      <p className="w-full bg-blue-300 pb-[5px] items-center justify-center flex italic text-blue-600 font-semibold">Selamat datang di Kamar Kita.</p>
      <Wallpaper />
      <Content />
      <Footer />
      <TabMenu />
    </div>
  );
};

export default Home;
