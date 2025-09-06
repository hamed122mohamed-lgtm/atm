import { useState } from "react";

type Distribution = Record<number, number>;

function ATMSimulator() {
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<Distribution>({});

  const denominations: number[] = [200, 100, 50, 20, 10, 5, 1];

  const handleWithdraw = () => {
    let remaining = amount;
    const distribution: Distribution = {};

    for (const note of denominations) {
      const count = Math.floor(remaining / note);
      if (count > 0) {
        distribution[note] = count;
        remaining -= count * note;
      }
    }

    setResult(distribution);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">ATM Simulator</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="ادخل المبلغ"
        className="border p-2 rounded mb-4 w-64 text-center"
      />

      <button
        onClick={handleWithdraw}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        اسحب
      </button>

      <div className="mt-6 w-64">
        {Object.entries(result).map(([note, count]) => (
          <p key={note} className="text-lg">
            {note} جنيه × {count}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ATMSimulator;
