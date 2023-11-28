// Pesanan.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Pesanan = () => {
  const { id_product, nama_product, price_product } = useParams();
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    no_hp: "",
    email: "",
    tipe_kamar: "",
    jumlah_hari: 1, // Default 1 hari
    tanggal_menginap: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBayarSekarang = () => {
    // Implementasikan logika pembayaran sesuai kebutuhan
    alert("Proses pembayaran dilakukan!");
  };

  return (
    <div className="w-full h-auto bg-blue-200 flex flex-col gap-[20px]">
      <nav class="flex  p-5 bg-white shadow-2xl  items-center fixed top-0 left-0 right-0 z-50">
        <Link to={`/detail_product/${id_product}/${nama_product}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-main"
            height="1.6em"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>
        <div class=" text-main w-full text-center">
          <h1>Pemesanan</h1>
        </div>
      </nav>
      <br />
      {/* batas nav */}
      <div className="pt-[30px] px-[20px]">
        <div className="w-full flex justify-center text-[20px] font-bold pb-[10px]">
          <h1>Silakan Isi Data Pesanan Anda.</h1>
        </div>

        <table className="table-auto">
          <tbody>
            <tr >
              <td className="font-bold">Nama Penginapan </td>
              <td className="pl-[10px]"> : {nama_product}</td>
            </tr>
            <tr>
              <td className="font-bold">Harga</td>
              <td className="pl-[10px]"> : {price_product} per/malam</td>
            </tr>
          </tbody>
        </table>

        <br />
      </div>

      <form className="sm:grid sm:grid-cols-2 gap-4 px-[20px]">
        <div>
          <label className="block">
            Tanggal Menginap:
            <input
              type="date"
              name="tanggal_menginap"
              value={formData.tanggal_menginap}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>

        <div>
          <label className="block">
            Nama:
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>

        <div>
          <label className="block">
            Alamat:
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>

        <div>
          <label className="block">
            No HP:
            <input
              type="text"
              name="no_hp"
              value={formData.no_hp}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>

        <div>
          <label className="block">
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>

        <div>
          <label className="block">
            Tipe Kamar:
            <select
              name="tipe_kamar"
              value={formData.tipe_kamar}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="single">Single Bed</option>
              <option value="double">Double Bed</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            Jumlah Hari Menginap:
            <select
              name="jumlah_hari"
              value={formData.jumlah_hari}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              {[1, 2, 3, 4, 5].map((day) => (
                <option key={day} value={day}>
                  {day} Hari
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            Jumlah Tamu:
            <select
              name="jumlah_tamu"
              value={formData.jumlah_tamu}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              {[1, 2, 3, 4].map((guest) => (
                <option key={guest} value={guest}>
                  {guest} Orang
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>

      <Footer />

      <section class="fixed bottom-0 left-0 right-0 bg-white ">
        <div class="w-full gap-[10px] md:px-[50px] lg:px-[50px] flex justify-center items-center flex-col p-2 md:flex md:flex-row lg:flex lg:flex-row">
          <Link
            to={`/detail_product/${id_product}/${nama_product}`}
            className="justify-center items-center flex border-2 bg-white text-blue-500 p-[10px] w-full my-2 rounded-xl hover:bg-blue-950 active:bg-blue-950"
          >
            <button>Kembali</button>
          </Link>

          <Link className="justify-center items-center flex border-2 bg-blue-800 text-white p-[10px] w-full my-2 rounded-xl hover:bg-blue-950 active:bg-blue-950">
            <button onClick={handleBayarSekarang} onclick="submitdata()">
              Bayar Sekarang
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pesanan;
