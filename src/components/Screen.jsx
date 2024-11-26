import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Screen = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // month is 0-based
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months = months < 0 ? 12 + months : months;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days = lastMonth.getDate() + days;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="bg-white w-1/2 h-1/2 rounded-xl rounded-br-[100px] shadow-xl">
      <div className="flex flex-row">
        <div className="flex flex-col h-full w-[85%]">
          <div className="flex flex-row m-6 h-1/3">
            <div className="w-[25%]">
              <p className="text-[14px] font-semibold">DAY</p>
              <input
                type="number"
                className="border-2 rounded-sm w-[80%] text-[20px] font-bold "
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="w-[25%]">
              <p className="text-[14px] font-semibold">MONTH</p>
              <input
                type="number"
                className="border-2 rounded-sm w-[80%] text-[20px] font-bold"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <div className="w-[25%]">
              <p className="text-[14px] font-semibold">YEAR</p>
              <input
                type="number"
                className="border-2 rounded-sm w-[80%] text-[20px] font-bold"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col m-6 mt-0 h-2/3 text-[40px] font-bold italic border-t-2 border-gray-200">
            <div className="flex flex-row gap-[5px]">
              <p className="text-purple-600">{age.years}</p>
              <p>years</p>
            </div>
            <div className="flex flex-row gap-[5px]">
              <p className="text-purple-600">{age.months}</p>
              <p>months</p>
            </div>
            <div className="flex flex-row gap-[5px]">
              <p className="text-purple-600">{age.days}</p>
              <p>days</p>
            </div>
          </div>
        </div>
        <div className="w-[15%] relative">
          <div className="absolute top-[78px] right-[45px]">
            <button
              className="rounded-full bg-purple-600 w-[50px] h-[50px]"
              onClick={calculateAge}
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
