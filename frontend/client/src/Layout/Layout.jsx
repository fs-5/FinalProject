import React, { useState } from "react";
import Routers from "../routers/Routers";
import Home from "../pages/Home/Home"; // Import halaman Home

const Layout = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("Guest"); // State untuk menyimpan nama pengguna

  return (
    <div>
      <main>
        {/* Kirim properti isLoggedIn dan setLoggedIn ke Routers */}
        <Routers isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUsername={setUsername} />
      </main>
    </div>
  );
};

export default Layout;
