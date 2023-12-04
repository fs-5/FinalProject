// DetailProduct.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useProductContext } from "../Context/ProductContext";
import { useSavedProducts } from "../Context/SavedProductsContext";

const Detail_Product = () => {
  const { id_penginapan } = useParams();
  const { products } = useProductContext();
  const { savedProducts, dispatch } = useSavedProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://655cb05b25b76d9884fdcad6.mockapi.io/penginapan/${id_penginapan}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id_penginapan]);

  const handleSaveProduct = () => {
    const isProductSaved = savedProducts.some(
      (savedProduct) => savedProduct.id === id_penginapan
    );

    if (!isProductSaved) {
      const newProduct = {
        id: id_penginapan,
        nama_product: product?.nama_penginapan,
        harga_penginapan: product?.harga_penginapan,
      };

      dispatch({ type: 'ADD_PRODUCT', payload: newProduct });

      // Kirimkan aksi baru untuk menyimpan ID produk yang dipilih
      dispatch({ type: 'SET_SELECTED_PRODUCT', payload: id_penginapan });

      localStorage.setItem(
        'savedProducts',
        JSON.stringify([...savedProducts, newProduct])
      );

      navigate("/savedlist");
    } else {
      alert('Produk sudah disimpan!');
    }
  };

  if (!product) {
    return (
      <div className="bg-blue-300 w-screen h-screen items-center flex justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-blue-200 w-full h-[auto]">
      <nav className="flex  p-5 bg-white shadow-2xl  items-center fixed top-0 left-0 right-0 z-50">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-main"
            height="1.6em"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>
        <div class=" text-main w-full text-center font-inter font-medium">
          <h1>Detail Product</h1>
        </div>
      </nav>
      <br />

      <div className="bg-blue-100 w-full pt-[40px]">
        <div className="w-full flex justify-start overflow-x-auto mx-auto">
          <img
            className="object-cover object-top w-[500px] h-[300px] py-[20px] px-[20px]"
            src={product?.foto_penginapan1}
            alt={product?.nama_penginapan}
          />
          <img
            className="object-cover object-top w-[500px] h-[300px] py-[20px] px-[20px]"
            src={product?.foto_penginapan2}
            alt={product?.nama_penginapan}
          />
          <img
            className="object-cover object-top w-[500px] h-[300px] py-[20px] px-[20px]"
            src={product?.foto_penginapan3}
            alt={product?.nama_penginapan}
          />
        </div>

        <div className="p-[20px]">
          <h1 className="text-[25px] font-bold">{product?.nama_penginapan}</h1>
          <p className="pb-[10px] text-gray-200">{product?.lokasi_penginapan}</p>
          <p className="pb-[10px] italic">{product?.deskripsi_penginapan}</p>
          <p className="pb-[10px]">Kualitas : {product?.rating}</p>
          <p className="pb-[10px]">Kategori tempat : {product?.kategori}</p>
          <p className="pb-[10px]">Sisa Kamar : {product?.stock}</p>
          <p className="pb-[10px]">
            Harga : {product?.harga_penginapan} Per/Malam
          </p>
          <p className="pb-[10px]">Fasilitas :</p>
          <p>✅ -- {product?.fasilitas1}</p>
          <p>✅ -- {product?.fasilitas2}</p>
          <p>✅ -- {product?.fasilitas3}</p>
          <p>✅ -- {product?.fasilitas4}</p>
          <p>✅ -- {product?.fasilitas5}</p>
        </div>
        <Footer />
        {/* batas */}
        <section class="fixed bottom-0 left-0 right-0 bg-white ">
          <div class="w-full gap-[10px] md:px-[50px] lg:px-[50px] flex justify-center items-center flex-col p-2 md:flex md:flex-row lg:flex lg:flex-row">
            <button
              onClick={handleSaveProduct}
              class="border-2 bg-white text-blue-500 p-[10px] w-full my-2 mx-auto rounded-xl  hover:bg-gray-200 active:bg-gray-200"
            >
              Pesan Nanti
            </button>

            <Link
              className=" justify-center items-center flex border-2 bg-blue-800 text-white p-[10px] w-full my-2 rounded-xl hover:bg-blue-950 active:bg-blue-950"
              to={`/pemesanan/${id_penginapan}/${product?.nama_penginapan}/${product?.harga_penginapan}`}
            >
              <button>Pesan Sekarang</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail_Product;
