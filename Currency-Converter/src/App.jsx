import React, { useState } from "react";

import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const BackgroundImage =
    "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg";
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  //collect only keys from objects
  const Options = Object.keys(currencyInfo);

  //swapping
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center bg-cover bg-no-repeat gap-9 "
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <h1 className="m-0  font-bold text-8xl text-white bg-opacity-10 backdrop-blur-lg p-6 rounded-3xl shadow-lg tac-one-regular">
        Currency Converter
      </h1>
      <div className="w-full  p-0 flex gap-20 justify-center mob:flex-col  md:items-center">
        <div className="w-full max-w-md  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
          <div className="w-full h-full bg-white flex flex-col ">
            <h1 className="text-center text-3xl font-semibold font p-3 titillium-web-semibold text-gray-500 flex">
              {from.toUpperCase()} to {to.toUpperCase()}
            </h1>
            <h1 className="text-6xl text-center mt-12 text-wrap flex titillium-web justify-center">
              {convertedAmount}
            </h1>
          </div>
        </div>
        <div className="w-full max-w-md  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
