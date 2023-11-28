import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import kamarkita from "../../assets/kamarkitahead.png";


const Wallpaper = () => {
  return (
    <div className="sm:items-center sm:flex md:flex md:w-full sm:w-full">
    {/* batas */}
      <section class="w-full">
          <div class="carousel w-full bg-blue-200 py-3">
            <div id="item1" class="carousel-item w-full">
              <img src={image1} class="object-cover w-full h-[400px] px-[15px] sm:px-[50px] pt-[20px]" />
            </div>
            <div id="item2" class="carousel-item w-full">
              <img src={image2} class="object-cover w-full h-[400px]  px-[15px] sm:px-[50px]" />
            </div>
            <div id="item3" class="carousel-item w-full">
              <img src={image3} class="object-cover w-full h-[400px]  px-[15px] sm:px-[50px]" />
            </div>
            <div id="item4" class="carousel-item w-full">
              <img src={image4} class="object-cover w-full h-[400px]  px-[15px] sm:px-[50px]" />
            </div>
          </div>
          <div class="flex justify-center w-full pt-[0] pb-[10px]  gap-2 bg-blue-200">
            <a href="#item1" class="btn btn-md rounded-full">1</a>
            <a href="#item2" class="btn btn-md rounded-full">2</a>
            <a href="#item3" class="btn btn-md rounded-full">3</a>
            <a href="#item4" class="btn btn-md rounded-full">4</a>
          </div>
        </section>
        {/* batas */}
        <section class="sm:w-[40%]">
          <div class="flex flex-col items-center mx-auto container w-full p-[10px] text-white gap-2">
            <img class="hidden sm:block" src={kamarkita} alt="kamarkita" />
            <h2 class="text-blue-500">Lokasi anda saat ini :</h2>
            <select class="select select-bordered w-full max-w-xs text-white bg-blue-400">
              <option disabled selected>Pilih Lokasi Anda</option>
              <option>Jakarta</option>
              <option>Bogor</option>
              <option>Depok</option>
              <option>Tanggerang</option>
              <option>Bekasi</option>
              <option>Bandung</option>
            </select>
          </div>
          <section class="container p-[50px] pb-[10px] flex flex-col justify-center items-center mx-auto w-full">
            <h1 class="py-[10px]">Mau menginap dimana ?</h1>
            <div class="flex w-full gap-5 p-[10px] text-lg bg-blue-300 sm:bg-white items-center justify-center">
              <button id="buttonHotel"
                class="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500">
                Hotel
              </button>
              <button id="buttonVilla"
                class="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500">
                Villa
              </button>
              <button id="buttonKostan"
                class="hover:bg-blue-800 py-[15px] sm:px-[10px] md:px-[10px] w-[100px] border-blue-500 border-[1px] bg-white rounded-[10px] text-blue-500">
                Kostan
              </button>
            </div>
          </section>
        </section>
        
    </div>
  );
};

export default Wallpaper;
