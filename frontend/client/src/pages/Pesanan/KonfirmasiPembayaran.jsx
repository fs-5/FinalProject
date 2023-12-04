// KonfirmasiPembayaran.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const KonfirmasiPembayaran = () => {
  // Menggunakan useLocation untuk mendapatkan data dari state
  const location = useLocation();

  // Memastikan bahwa location.state tidak null sebelum mendestrukturisasi
  const { nama_penginapan, harga_penginapan } = location.state || useParams();

  // Mengambil data pemesanan dari penyimpanan lokal
  const dataPemesanan = JSON.parse(localStorage.getItem("dataPemesanan")) || {};

  // Destrukturisasi dataPemesanan untuk mendapatkan nilai yang dibutuhkan
  const { nama, alamat, no_hp, email, tipe_kamar, jumlah_hari, jumlah_tamu, metode_pembayaran } =
    dataPemesanan;

  const totalHarga = harga_penginapan * jumlah_hari;

  return (
    <div className="w-screen h-screen">
      <nav class="flex  p-5 bg-white shadow-2xl  items-center fixed top-0 left-0 right-0 z-50">
        <Link to={"/"}>
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
          <h1>Konfirmasi Pembayaran</h1>
        </div>
      </nav>
      <br />
      <br />
      <div className="pt-[30px] px-[20px]">
        <div className="w-full flex justify-center text-[15px] font-bold pb-[10px]">
          <h1>Silakan cek kembali Data Pesanan Anda.</h1>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <tbody>
            <tr>
              <td>Nama Penginapan</td>
              <td>: {nama_penginapan}</td>
            </tr>
            <tr>
              <td>Harga Penginapan</td>
              <td>: {harga_penginapan.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>: {nama}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>: {alamat}</td>
            </tr>
            <tr>
              <td>No HP</td>
              <td>: {no_hp}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>: {email}</td>
            </tr>
            <tr>
              <td>Tipe Kamar</td>
              <td>: {tipe_kamar}</td>
            </tr>
            <tr>
              <td>Jumlah Hari Menginap</td>
              <td>: {jumlah_hari}</td>
            </tr>
            <tr>
              <td>Jumlah Tamu</td>
              <td>: {jumlah_tamu}</td>
            </tr>

            <tr>
              <td>Total Harga</td>
              <td className="font-bold text-red-500">
                : {totalHarga.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td>Metode Pembayaran</td>
              <td className="text-green-500">
                : {metode_pembayaran}
              </td>
            </tr>

            {/* Tambahkan baris untuk item-data pemesanan lainnya sesuai kebutuhan */}
          </tbody>
        </table>
      </div>

      <p className=" bg-yellow-500 m-[20px] py-[10px] text-white flex items-center justify-center">
        Total Pembayaran anda : {totalHarga.toLocaleString()}
      </p>

      {/* metode pembayaran */}
      <div className="w-full h-auto mt-[50px]">
        <p className="justify-center items-center flex font-bold text-blue-800 mb-[20px]">
          Silakan melakukan pembayaran
        </p>

        <p className="mb-[20px] justify-center items-center flex">
          Transfer Bank :
        </p>
        <div>
          <p className="text-yellow-500 px-[20px]">
            Nomor Rekening Bank Mandiri :
          </p>
          <p className="font-bold border mx-[20px] my-[10px] border-blue-800 bg-blue-300 rounded-md py-[10px] justify-center items-center flex">
            008765456783
          </p>
        </div>
        <div>
          <p className="text-yellow-500 px-[20px]">Nomor Rekening Bank BCA :</p>
          <p className="font-bold border mx-[20px] my-[10px] border-blue-800 bg-blue-300 rounded-md py-[10px] justify-center items-center flex">
            09876545678
          </p>
        </div>

        <p className="mb-[20px] justify-center items-center flex mt-[50px]">
          E-Wallet :
        </p>
        <div>
          <p className="text-yellow-500 px-[20px]">Nomor OVO :</p>
          <p className="font-bold border mx-[20px] my-[10px] border-blue-800 bg-blue-300 rounded-md py-[10px] justify-center items-center flex">
            008765456783
          </p>
        </div>
        <div>
          <p className="text-yellow-500 px-[20px]">Nomor GoPay :</p>
          <p className="font-bold border mx-[20px] my-[10px] border-blue-800 bg-blue-300 rounded-md py-[10px] justify-center items-center flex">
            09876545678
          </p>
        </div>
        <div>
          <p className="text-yellow-500 px-[20px]">Nomor Danay :</p>
          <p className="font-bold border mx-[20px] my-[10px] border-blue-800 bg-blue-300 rounded-md py-[10px] justify-center items-center flex">
            09876545678
          </p>
        </div>

        <p className="mb-[20px] justify-center items-center flex mt-[50px]">
          Pembayaran Tunai (Di Tempat)
        </p>
        <div>
          <p className="mb-[50px] font-bold border mx-[20px] my-[10px] border-blue-800 bg-yellow-500 rounded-md py-[10px] justify-center items-center flex">
            Silakan Pergi ke Kasir
          </p>
        
        <div className="mb-[50px] border mx-[20px] border-blue-800  rounded-md py-[10px] justify-center items-center flex flex-col">
          <p className="mx-[20px] rounded-md py-[10px] justify-center items-center flex">setelah melakukan pembayaran, silakan klik 'Selesai'</p>
          <p className="mx-[20px] rounded-md py-[10px] justify-center items-center flex">Lalu tunggu sampai kami mengirim data pemesanan anda melalui E-mail.</p>
          <p className="mx-[20px] rounded-md py-[10px] justify-center items-center flex">Terima Kasih.</p>
        </div>

        </div>
      </div>

      <Footer />

      <section className="fixed bottom-0 left-0 right-0 bg-white ">
        <div className="w-full gap-[10px] md:px-[50px] lg:px-[50px] flex justify-center items-center flex-col p-2 md:flex md:flex-row lg:flex lg:flex-row">
          <Link
            to={`/`}
            className="justify-center items-center flex border-2 bg-blue-800 text-white p-[10px] w-full my-2 rounded-xl hover:bg-blue-950 active:bg-blue-950"
            onClick={() => {
              // Hapus data dari local storage saat tombol "Selesai" diklik
              localStorage.removeItem("dataPemesanan");
            }}
          >
            <button>Selesai</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KonfirmasiPembayaran;
