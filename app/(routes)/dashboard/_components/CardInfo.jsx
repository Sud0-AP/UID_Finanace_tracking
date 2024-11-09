import formatNumber from "@/utils";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount);
      totalSpend_ = totalSpend_ + element.totalSpend;
    });

    incomeList.forEach((element) => {
      totalIncome_ = totalIncome_ + element.totalAmount;
    });

    setTotalIncome(totalIncome_);
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  const shadesOfBlue = [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
  ];

  const getRandomShade = () => {
    return shadesOfBlue[Math.floor(Math.random() * shadesOfBlue.length)];
  };

  const getTextColor = (shade) => {
    const darkShades = ["bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900"];
    return darkShades.includes(shade) ? "text-white" : "text-gray-900";
  };

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 -mb-1 rounded-2xl flex items-center justify-between">
            <div className="w-full">
              <div className="flex mb-2 flex-row space-x-1 items-center ">
                <h2 className="text-md ">Monthly Overview</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 30 }).map((_, index) => {
                    const shade = getRandomShade();
                    return (
                      <div
                        key={index}
                        className={`border p-2 flex items-center justify-center rounded-lg ${shade}`}
                      >
                        <span className={getTextColor(shade)}>{index + 1}</span>
                      </div>
                    );
                  })}
                  <div className="col-span-6 text-center mt-2">
                    <h2 className="text-md">August</h2>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 30 }).map((_, index) => {
                    const shade = getRandomShade();
                    return (
                      <div
                        key={index}
                        className={`border p-2 flex items-center justify-center rounded-lg ${shade}`}
                      >
                        <span className={getTextColor(shade)}>
                          {index === 0 ? 31 : (index % 30) + 1}
                        </span>
                      </div>
                    );
                  })}
                  <div className="col-span-6 text-center mt-2">
                    <h2 className="text-md">September</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">
                  ₹{formatNumber(totalBudget)}
                </h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Spend</h2>
                <h2 className="font-bold text-2xl">
                  ₹{formatNumber(totalSpend)}
                </h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Budget</h2>
                <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Sum of Income Streams</h2>
                <h2 className="font-bold text-2xl">
                  ₹{formatNumber(totalIncome)}
                </h2>
              </div>
              <CircleDollarSign className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
