import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Hesapla({ getDataBySelect }) {
  const [value, setValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const handleClick = async () => {
    const response = await getDataBySelect(fromCurrency);
    const deger = response.data[toCurrency];
    const sonuc = (deger * value).toFixed(2);
    setResult(sonuc);

    //     const deger=0
    //    setResult(deger)
  };

  return (
    <div className="mt-20 border-2 border-gray-600 border-solid flex flex-col gap-4 pb-4">
      <div className="h-24 bg-gray-600 text-white text-center p-8 text-xl">
        DÖVİZ KURU ÇEVİRME
      </div>
      <div className="flex gap-x-4 h-10 ">
        <input
          className="rounded-md p-1"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="rounded-md"
          onChange={(e) => {
            setFromCurrency(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
        </select>
        <FaArrowRight className="mt-3" />
        <select
          className="rounded-md"
          onChange={(e) => {
            setToCurrency(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>

        <input
          className="rounded-md p-1"
          value={result}
          onChange={(e) => {
            setResult(e.target.value);
          }}
          type="number"
          name=""
          id=""
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="rounded-md bg-purple-300 text-slate-900 h-10 w-24 border-2 border-gray-500 border-solid text-lg"
          onClick={handleClick}
        >
          Hesapla
        </button>
      </div>
    </div>
  );
}

export default Hesapla;
