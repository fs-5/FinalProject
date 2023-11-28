import React, { useState } from "react";
import logo from "../../assets/logo-kamarkita.png";
import logobutton from "../../assets/search.svg";
import logoheadset from "../../assets/headset.svg";
import customerservice from "../../assets/customerservice.png";

const Navbar = () => {
  // state pop up
  const [isPopupOpen, setPopupOpen] = useState(false);
  // menampilkan pop up
  const handleHeadsetClick = () => {
    setPopupOpen(!isPopupOpen);
  };
  // menutup pop up
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="bg-blue-200 rounded-sm border-[5px] px-[20px] py-[10px] w-full">
      {/* pembungkus navbar */}
      <div className="flex gap-[20px] w-full mx-auto justify-between items-center">
        {/* logo kamar kita */}
        <div className="w-[50px]">
          <img src={logo} alt="Logo Kamar Kita" />
        </div>
        {/* search bar */}
        <div className="flex gap-1 w-full">
          {/* input search */}
          <input
            className="w-full sm:w-[400px] h-[40px] p-3 rounded-[10px] border-[1px] border-blue-500 focus:outline-none focus:border-yellow-500"
            type="search"
            name="search"
            id="search"
            placeholder="Cari disini..."
          />
          {/* button search */}
          <button className="active:bg-blue-200 fill-blue-500 w-[30px] bg-white p-2 rounded-[10px] border-[1px] border-blue-500">
            <img src={logobutton} alt="Search Button" />
          </button>
        </div>
        {/* logo CS / headset */}
        <div>
          <button
            id="btn-search"
            className="active:bg-blue-200 w-[40px] bg-blue-400 p-2 rounded-[10px] border-[1px] border-blue-500"
            onClick={handleHeadsetClick}
          >
            <img src={logoheadset} alt="Headset Logo" />
          </button>
          {/* jika di klik akan muncul pop up */}
          {isPopupOpen && (
            <div className="absolute justify-center items-center w-[300px] top-[60px] right-[20px] gap-3 bg-white p-4 border-[1px] border-blue-500 rounded-md flex flex-col">
              <p className="font-bold text-blue-800">Apakah anda memiliki keluhan ?</p>
              <img src={customerservice}></img>
              <div className="flex gap-1 justify-center">
              <button
                className="bg-blue-400 text-white p-2 rounded-[10px] border-[1px] border-blue-500 mr-2"
                onClick={closePopup}
              >
                Hubungi Kami
              </button>
              <button
                className="bg-red-400 text-white p-2 rounded-[10px] border-[1px] border-blue-500"
                onClick={closePopup}
              >
                Nanti Saja
              </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
