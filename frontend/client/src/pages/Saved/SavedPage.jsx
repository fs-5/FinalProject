// SavedPage.jsx
import React, { useEffect, useState } from "react";
import TabMenu from "../../components/header/TabMenu";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const SavedPage = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const savedProductsFromStorage =
      JSON.parse(localStorage.getItem("savedProducts")) || [];
    setSavedProducts(savedProductsFromStorage);
  }, []);

  return (
    <div>
      {/* info */}
      <div className="w-full flex bg-white font-medium text-blue-500 p-[20px] justify-center items-center drop-shadow-lg mb-1">
        <div>
          <h1>Favorite Anda</h1>
        </div>
      </div>
      {/* batas */}
      <div className="w-full flex bg-blue-300 p-[10px] justify-center items-center drop-shadow-lg mb-1">
        <div>
          <h1>Daftar Pesan tersimpan anda.</h1>
        </div>
      </div>
      {/* batas */}
      <section className="mb-[20px]">
        <div className="w-full flex flex-col md:justify-center md:flex-row md:flex-wrap gap-5 p-[20px] overflow-x-auto items-center">
          <div className="flex flex-wrap md:flex-row md:flex-wrap gap-5 p-[20px] overflow-x-auto w-full justify-center ">
            {savedProducts.length > 0 ? (
              savedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/detail_product/${product.id_product}/${product.nama_product}`}
                  className="sm:flex md:flex sm:w-[350px] md:w-[350px] sm:rounded-[10px] gap-[20px] w-[250px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]"
                >
                  <img
                    className="mb-[10px] sm:rounded-[10px] sm:w-[150px] rounded-t-[10px] md:w-[150px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
                    src={product.image_product}
                    alt="image-ibis"
                  />
                  {/* text */}
                  <div className="flex flex-col justify-between h-auto">
                    <div className="mb-[10px] gap-[10px]">
                      <h1 className="text-blue-800 text-[20px] font-bold">
                        {product.nama_product}
                      </h1>
                      <h1 className="italic font-semibold text-[15px]">
                        {product.lokasi_product}
                      </h1>
                    </div>

                    <div>
                      <p className="font-bold mb-[15px]">{product.rating}</p>
                      <h1 className="text-red-600 font-bold">
                        Rp. {product.price_product}
                      </h1>
                      <h5 className="text-blue-800 font-bold">Per/Malam</h5>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Belum ada produk yang disimpan.</p>
            )}
          </div>
        </div>
      </section>
      <Footer/>
      <TabMenu />
    </div>
  );
};

export default SavedPage;
