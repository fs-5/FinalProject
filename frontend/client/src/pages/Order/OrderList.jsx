import React from "react";
import TabMenu from "../../components/header/TabMenu";
import hotelibis from "../../assets/hotelibis.jpg";
import Footer from "../../components/footer/Footer";

const OrderList = () => {
  return (
    <div>
      {/* Konten untuk OrderList */}
      {/* info */}
      <div class="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
        <div>
          <h1>Pesanan Anda</h1>
        </div>
      </div>
      {/* batas */}
      <div class="w-full flex bg-blue-300 p-[10px] justify-center items-center drop-shadow-lg mb-1">
        <div>
          <h1>Berikut adalah Daftar Pesanan Anda</h1>
        </div>
      </div>
      {/* batas */}
      <section class="mb-[20px]">
        <div class="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-5 p-[20px] overflow-x-auto w-full items-center">
          {/* card 1 */}
          <div class="sm:flex sm:w-full sm:rounded-[10px] md:w-[600px] gap-[20px] w-[300px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]">
            <img
              class="mb-[10px] sm:rounded-[10px] sm:h-[230px] rounded-t-[10px] md:w-[400px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
              src={hotelibis}
              alt="image-ibis"
            />
            {/* text */}
            <div class="w-full mb-[10px] gap-2">
              <h1 class="text-blue-800 text-xl font-bold">Hotel Ibis</h1>
              <h5>Senen, Jakarta Pusat.</h5>
              {/* rating */}
              <div class="mb-[10px]">
                <div>⭐⭐⭐⭐</div>
              </div>
              {/* harga */}
              <div class="flex gap-1 items-center md:text-sm">
                <h1 class="text-red-600 font-bold">RP.500.000</h1>
                <h5 class="text-blue-800 font-bold">Per/Malam</h5>
              </div>
              <div class="flex flex-col mt-[20px] gap-2">
                <button class="border-[1px] border-black rounded-[10px] bg-blue-800 text-white py-[5px] px-[10px]">
                  Hubungi
                </button>

                <button class="border-[1px] border-black rounded-[10px] bg-blue-400 text-white py-[5px] px-[10px]">
                  Batalkan Pesanan
                </button>
              </div>
            </div>
          </div>
          {/* batas card  */}
          <div class="sm:flex sm:w-full sm:rounded-[10px] md:w-[600px] gap-[20px] w-[300px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]">
            <img
              class="mb-[10px] sm:rounded-[10px] sm:h-[230px] rounded-t-[10px] md:w-[400px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
              src={hotelibis}
              alt="image-ibis"
            />
            {/* text */}
            <div class="w-full mb-[10px] gap-2">
              <h1 class="text-blue-800 text-xl font-bold">Hotel Ibis</h1>
              <h5>Senen, Jakarta Pusat.</h5>
              {/* rating */}
              <div class="mb-[10px]">
                <div>⭐⭐⭐⭐</div>
              </div>
              {/* harga */}
              <div class="flex gap-1 items-center md:text-sm">
                <h1 class="text-red-600 font-bold">RP.500.000</h1>
                <h5 class="text-blue-800 font-bold">Per/Malam</h5>
              </div>
              <div class="flex flex-col mt-[20px] gap-2">
                <button class="border-[1px] border-black rounded-[10px] bg-blue-800 text-white py-[5px] px-[10px]">
                  Hubungi
                </button>

                <button class="border-[1px] border-black rounded-[10px] bg-blue-400 text-white py-[5px] px-[10px]">
                  Batalkan Pesanan
                </button>
              </div>
            </div>
          </div>
          {/* batas card */}
          <div class="sm:flex sm:w-full sm:rounded-[10px] md:w-[600px] gap-[20px] w-[300px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]">
            <img
              class="mb-[10px] sm:rounded-[10px] sm:h-[230px] rounded-t-[10px] md:w-[400px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
              src={hotelibis}
              alt="image-ibis"
            />
            {/* text */}
            <div class="w-full mb-[10px] gap-2">
              <h1 class="text-blue-800 text-xl font-bold">Hotel Ibis</h1>
              <h5>Senen, Jakarta Pusat.</h5>
              {/* rating */}
              <div class="mb-[10px]">
                <div>⭐⭐⭐⭐</div>
              </div>
              {/* harga */}
              <div class="flex gap-1 items-center md:text-sm">
                <h1 class="text-red-600 font-bold">RP.500.000</h1>
                <h5 class="text-blue-800 font-bold">Per/Malam</h5>
              </div>
              <div class="flex flex-col mt-[20px] gap-2">
                <button class="border-[1px] border-black rounded-[10px] bg-blue-800 text-white py-[5px] px-[10px]">
                  Hubungi
                </button>

                <button class="border-[1px] border-black rounded-[10px] bg-blue-400 text-white py-[5px] px-[10px]">
                  Batalkan Pesanan
                </button>
              </div>
            </div>
          </div>
          {/* batas */}
          <div class="sm:flex sm:w-full sm:rounded-[10px] md:w-[600px] gap-[20px] w-[300px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]">
            <img
              class="mb-[10px] sm:rounded-[10px] sm:h-[230px] rounded-t-[10px] md:w-[400px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
              src={hotelibis}
              alt="image-ibis"
            />
            {/* text */}
            <div class="w-full mb-[10px] gap-2">
              <h1 class="text-blue-800 text-xl font-bold">Hotel Ibis</h1>
              <h5>Senen, Jakarta Pusat.</h5>
              {/* rating */}
              <div class="mb-[10px]">
                <div>⭐⭐⭐⭐</div>
              </div>
              {/* harga */}
              <div class="flex gap-1 items-center md:text-sm">
                <h1 class="text-red-600 font-bold">RP.500.000</h1>
                <h5 class="text-blue-800 font-bold">Per/Malam</h5>
              </div>
              <div class="flex flex-col mt-[20px] gap-2">
                <button class="border-[1px] border-black rounded-[10px] bg-blue-800 text-white py-[5px] px-[10px]">
                  Hubungi
                </button>

                <button class="border-[1px] border-black rounded-[10px] bg-blue-400 text-white py-[5px] px-[10px]">
                  Batalkan Pesanan
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
      <TabMenu />
    </div>
  );
};

export default OrderList;
