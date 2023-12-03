import React, { useState, useEffect, createRef } from "react";
import Navbar from "../../components/header/Navbar";
import Wallpaper from "../../components/header/Wallpaper";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import TabMenu from "../../components/header/TabMenu";
import ContentVilla from "../../components/content/ContentVilla";
import ContentKostan from "../../components/content/ContentKostan";

const Home = ({ isLoggedIn }) => {
  // State untuk menyimpan nama pengguna
  const [name, setName] = useState(" ");
  // untuk scroll
  const contentRef =  createRef();
  const contentVillaRef =  createRef();
  const contentKostanRef =  createRef();

  const scrollToHotel = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVilla = () => {
    contentVillaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToKostan = () => {
    contentKostanRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (isLoggedIn && storedUsername) {
      console.log("Setting nama:", storedUsername);
      setName(storedUsername);
    } else {
      console.log("Setting nama ke Guest");
      setName("Guest");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar />
      <p className="w-full bg-blue-300 pt-[5px] items-center justify-center flex">
        Hallo : <span className="font-bold px-[5px] text-blue-900">{name}</span>
      </p>
      <p className="w-full bg-blue-300 pb-[5px] items-center justify-center flex italic text-blue-600 font-semibold">
        Selamat datang di Kamar Kita.
      </p>
      <Wallpaper
        scrollToContent={scrollToHotel}
        scrollToContentVilla={scrollToVilla}
        scrollToContentKostan={scrollToKostan}
      />
      <Content ref={contentRef} />
      <ContentVilla ref={contentVillaRef} />
      <ContentKostan ref={contentKostanRef} />
      <Footer />
      <TabMenu isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Home;
