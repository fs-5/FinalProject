import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://655cb05b25b76d9884fdcad6.mockapi.io/penginapan"
        );
        const data = await response.json();
        setProducts(data.slice(0, 6)); // Hanya mengambil 6 data pertama
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* batas link */}
      <div className="w-full text-lg font-sans bg-blue-500 text-white px-[20px] py-[10px]">
        <div className="justify- flex items-center w-full">
          <div className="text">
            <p>Rekomendasi Penginapan untuk anda</p>
          </div>
        </div>
      </div>
      {/* batas*/}
      <div className="flex flex-wrap md:flex-row md:flex-wrap gap-5 p-[20px] overflow-x-auto w-full justify-center ">
        {/* card */}
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/detail_product/${product.id_penginapan}/${product.nama_penginapan}`}
            className="sm:flex md:flex sm:w-[350px] md:w-[350px] sm:rounded-[10px] gap-[20px] w-[250px] h-[auto] bg-white border-[2px] border-blue-300 px-[20px] pt-[20px] pb-[20px] rounded-[10px]"
          >
            <img
              className="mb-[10px] sm:rounded-[10px] sm:w-[150px] rounded-t-[10px] md:w-[150px] w-full h-[200px] object-cover object-top md:object-cover md:object-top lg:object-cover lg:object-top xl-object-cover xl:object-top"
              src={product.foto_penginapan1}
              alt="image-ibis"
            />
            {/* text */}
            <div className="flex flex-col justify-between h-auto">
              <div className="mb-[10px] gap-[10px]">
                <h1 className="text-blue-800 text-[20px] font-bold">
                  {product.nama_penginapan}
                </h1>
                <h1 className="italic font-semibold text-[15px]">
                  {product.lokasi_penginapan}
                </h1>
              </div>

              <div>
              <p className="font-bold mb-[15px]">{product.rating}</p>
              <h1 className="text-red-600 font-bold">
                Rp. {product.harga_penginapan}
              </h1>
              <h5 className="text-blue-800 font-bold">Per/Malam</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
