import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    meron: 59553,
    wala: 53657,
    bet: 0,
    betMeron: 100,
    betWala: 100,
    fee: 9,
  });
  const fee = data.fee / 100;
  const denomination = [
    {
      name: "50",
      value: 50,
    },
    {
      name: "100",
      value: 100,
    },
    {
      name: "500",
      value: 500,
    },
    {
      name: "1K",
      value: 1000,
    },
    {
      name: "2K",
      value: 2000,
    },
    {
      name: "5K",
      value: 5000,
    },
    {
      name: "10K",
      value: 10000,
    },
  ];
  function handleOnChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));
  }
  function betMeron() {
    data.bet > 0 &&
      setData((p) => ({
        ...p,
        betMeron: data.bet,
        // meron: parseInt(data.meron),
        // meron: parseInt(data.meron) + parseInt(data.bet),
      }));
  }
  function betWala() {
    data.bet > 0 &&
      setData((p) => ({
        ...p,
        betWala: data.bet,
        // wala: parseInt(data.wala),
        // wala: parseInt(data.wala) + parseInt(data.bet),
      }));
  }
  // const payout = (data.meron / data.wala) * data.bet + data.bet;
  // const fee = data.fee;
  // const netPayout = payout - payout * fee;

  const payoutWala =
    (data.meron / data.wala) * data.betWala +
    data.betWala -
    ((data.meron / data.wala) * data.betWala + data.betWala) * fee;
  const payoutMeron =
    (data.wala / data.meron) * data.betMeron +
    data.betMeron -
    ((data.wala / data.meron) * data.betMeron + data.betMeron) * fee;
  return (
    <div className="h-screen w-screen bg-gray-900 text-white p-2 max-w-md mx-auto">
      {/* <p>fee</p>
      <label htmlFor="fee">
        fee
        <input
          className="bg-gray-800 border border-black"
          type="number"
          name="fee"
          id="fee"
          value={data.fee}
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor="meron">
        meron
        <input
          className="bg-gray-800 border border-black"
          type="number"
          value={data.meron}
          name="meron"
          id="meron"
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor="wala">
        wala
        <input
          className="bg-gray-800 border border-black"
          type="number"
          value={data.wala}
          name="wala"
          id="wala"
          onChange={handleOnChange}
        />
      </label>

      <p>meron:{payoutMeron}</p>
      <p>wala:{payoutWala}</p> */}
      <div className="bg-slate-800 my-2 p-2 rounded-md text-center bg-opacity-70 tracking-wider">
        <p className="text-xl">IT EXPERT SOLUTIONS</p>
        <p>OFFLINE e-SABONG</p>
      </div>
      <div className="grid grid-cols-2 text-center">
        <p className="border border-gray-400 p-2">BETTING</p>
        <p className="border border-gray-400 p-2">FIGHT #</p>
        <div className="border border-gray-400 p-2 flex justify-center">
          <p className="bg-green-600 max-w-min py-1 px-3 rounded">OPEN</p>
        </div>
        <div className="border border-gray-400 p-2 font-bold text-yellow-600 text-xl">
          67
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-5 text-center">
        <div className="border border-yellow-600 rounded-md p-1">
          <p className="bg-red-600 p-2">MERON</p>
          <div className="text-left">
            <p className="text-yellow-400 text-3xl text-center">
              {data.meron.toLocaleString("en-US")}
            </p>
            <p className="text-xl">PAYOUT = {payoutMeron.toFixed()}</p>
            <p className="text-xl">
              BET = {data.betMeron.toLocaleString("en-US")}
            </p>
            {/* <p>0</p> */}
            {/* <p>0</p> */}
          </div>
          <button
            onClick={betMeron}
            className="bg-green-600 w-full p-2 rounded-md mt-2"
          >
            BET MERON
          </button>
        </div>

        <div className="border border-yellow-600 rounded-md p-1">
          <p className="bg-blue-600 p-2">WALA</p>
          <div className="text-left m1">
            <p className="text-yellow-400 text-3xl text-center">
              {data.wala.toLocaleString("en-US")}
            </p>
            <p className="text-xl">PAYOUT = {payoutWala.toFixed()}</p>
            <p className="text-xl">
              BET = {data.betWala.toLocaleString("en-US")}
            </p>
            {/* <p>0</p>
            <p>0</p> */}
          </div>
          <button
            onClick={betWala}
            className="bg-green-600 w-full p-2 rounded-md mt-2"
          >
            BET WALA
          </button>
        </div>
      </div>
      <p className="mt-5">
        Current Points: <span className="text-xl text-yellow-500">50</span>
      </p>

      <div className="flex border border-black rounded-lg mt-5">
        <input
          className="bg-slate-800 w-full rounded-l-lg p-2 text-center text-2xl"
          type="number"
          name="bet"
          min={0}
          id="bet"
          value={data.bet}
          onChange={handleOnChange}
        />
        <button
          className="bg-gray-700 px-4 rounded-r-lg"
          onClick={() => setData((p) => ({ ...p, bet: 0 }))}
        >
          CLEAR
        </button>
      </div>
      <div className="grid grid-flow-col text-center gap-2 mt-5">
        {denomination.map((amount) => {
          return (
            <button
              key={amount.name}
              className="border border-teal-500 rounded py-2"
              onClick={() => setData((p) => ({ ...p, bet: amount.value }))}
            >
              {amount.name}
            </button>
          );
        })}
      </div>

      <p className="mt-20 text-xl w-full text-center my-2">Test Data</p>
      <div className="grid grid-cols-2">
        FEE ( % ):
        <input
          type="number"
          name="fee"
          id="fee"
          className="text-center mx-2 bg-transparent border"
          value={data.fee}
          onChange={handleOnChange}
        />
        MERON INITIAL BET:
        <input
          type="number"
          name="meron"
          id="meron"
          className="text-center mx-2 bg-transparent border"
          value={data.meron}
          onChange={handleOnChange}
        />
        WALA INITIAL BET:
        <input
          type="number"
          name="wala"
          id="wala"
          className="text-center mx-2 bg-transparent border"
          value={data.wala}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
