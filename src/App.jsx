import React, { useEffect, useState } from "react";
import "./App.css";
import Hesapla from "./Components/Hesapla";
import currency from "./assets/images/currency.jpg";
import axios from "axios";

function App() {

  const BASE_URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JNWEtiQX8DhsoJuiDlTx19P9t2q3bMccYzulwCNa";
  const [value, setValue] = useState(0);
  const [firstselect, setFirstselect] = useState("");

  const getDataBySelect = async (select) => {
    const response = await axios.get(`${BASE_URL}&base_currency=${select}`);

    return response.data
  };

  return (
    <div className="bg-[url(./assets/images/currency.jpg)] w-full h-screen bg-cover flex justify-center items-start ">
      <Hesapla getDataBySelect={getDataBySelect} />
      <div className=""></div>
    </div>
  );
}

export default App;
