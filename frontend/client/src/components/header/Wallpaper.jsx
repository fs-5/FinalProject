import React, { forwardRef } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import kamarkita from "../../assets/kamarkitahead.png";

const Wallpaper = forwardRef(
  ({ scrollToContent, scrollToContentVilla, scrollToContentKostan }, ref) => {
    return (
      <div
        className="sm:items-center sm:flex md:flex md:w-full sm:w-full"
        ref={ref}
      >
        {/* Bagian Carousel */}
        <section className="w-full">
          <div className="carousel w-full bg-blue-200 py-3">
            <div id="item1" className="carousel-item w-full">
              <img
                src={image1}
                className="object-cover w-full h-[400px] px-[15px] sm:px-[50px] pt-[20px]"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src={image2}
                className="object-cover w-full h-[400px] px-[15px] sm:px-[50px]"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src={image3}
                className="object-cover w-full h-[400px] px-[15px] sm:px-[50px]"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src={image4}
                className="object-cover w-full h-[400px] px-[15px] sm:px-[50px]"
              />
            </div>
          </div>
          <div className="flex justify-center w-full pt-[0] pb-[10px] gap-2 bg-blue-200">
            <a href="#item1" className="btn btn-md rounded-full">
              1
            </a>
            <a href="#item2" className="btn btn-md rounded-full">
              2
            </a>
            <a href="#item3" className="btn btn-md rounded-full">
              3
            </a>
            <a href="#item4" className="btn btn-md rounded-full">
              4
            </a>
          </div>
        </section>
        {/* Bagian Informasi Lokasi dan Tombol Scroll */}
        <section className="sm:w-[40%]">
          <div className="flex flex-col items-center mx-auto container w-full p-[10px] text-white gap-2">
            <img className="hidden sm:block" src={kamarkita} alt="kamarkita" />
            <h2 className="text-blue-500">Lokasi anda saat ini :</h2>
            <select
              className="select select-bordered w-full max-w-xs text-white bg-blue-400"
              defaultValue=""
            >
              <option disabled value="">
                Pilih Lokasi Anda
              </option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
              <option value="Bandung">Bandung</option>
            </select>
          </div>
          <section
            className="container p-[50px] pb-[10px] flex flex-col justify-center items-center mx-auto w-full"
            ref={ref}
          >
            <h1 className="py-[10px]">Mau menginap dimana ?</h1>
            <div
              className="flex w-full gap-5 p-[10px] text-lg bg-blue-300 sm:bg-white items-center justify-center"
              ref={ref}
            >
              <button
                id="buttonHotel"
                onClick={scrollToContent}
                className="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500"
              >
                Hotel
              </button>
              <button
                id="buttonVilla"
                onClick={scrollToContentVilla}
                className="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500"
              >
                Villa
              </button>
              <button
                id="buttonKostan"
                onClick={scrollToContentKostan}
                className="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500"
              >
                Kostan
              </button>
            </div>
          </section>
        </section>
      </div>
    );
  }
);

export default Wallpaper;
