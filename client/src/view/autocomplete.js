import React, { useState } from "react";
import Title from "../component/title";

const Autocomplete = () => {
  const [singleInput, setSingleInput] = useState(true);
  const [multipleInput, setMultipleInput] = useState(false);

  const [singleValue, setSingleValue] = useState("");
  const [multipleValue, setMultipleValue] = useState([]);

  const [showData, setShowData] = useState(false);

  const singleInput1 = () => {
    setSingleInput(true);
    setMultipleInput(false);
  };

  const multipleInput2 = () => {
    setSingleInput(false);
    setMultipleInput(true);
  };

  const multipleData = (name) => {
    if (!multipleValue.includes(name)) {
      setMultipleValue([...multipleValue, name]);
    } else {
      let index = multipleValue.indexOf(name);
      multipleValue.splice(index, 1);
      setMultipleValue([...multipleValue]);
    }
  };

  const data = [
    {
      name: "Java",
    },
    {
      name: "Javascript",
    },
    {
      name: "C",
    },
    {
      name: "C+",
    },
    {
      name: "C++",
    },
    {
      name: "php",
    },
  ];
  return (
    <div className="p-4">
      <Title title="Autocomplete" />
      <div className="text-2xl">Autocomplete</div>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row">
          <span
            className={`${
              singleInput
                ? "bg-white border-t-2 border-blue-400"
                : "bg-blue-400"
            } px-2 py-1 `}
            onClick={singleInput1}
          >
            Single Value
          </span>
          <span
            className={`${
              multipleInput
                ? "bg-white border-t-2 border-blue-400"
                : "bg-blue-400"
            } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
            onClick={multipleInput2}
          >
            Multiple Value
          </span>
        </div>
        <div className="border-2 border-slate-300 h-72 flex ">
          <div className="relative ml-10 h-44">
            <div className="relative mt-12">
              {singleInput && (
                <>
                  <div>Tags :</div>
                  <input
                    className="border-2 border-slate-300 w-40 md:w-80 pl-3"
                    placeholder="Single Value"
                    value={singleValue}
                    readOnly
                    onClick={() => setShowData(!showData)}
                  />
                </>
              )}
              {multipleInput && (
                <>
                  <div>Tags :</div>
                  <input
                    className="border-2 border-slate-300 w-40 md:w-80 pl-3"
                    placeholder="Multiple Value"
                    value={multipleValue}
                    readOnly
                    onClick={() => setShowData(!showData)}
                  />
                </>
              )}
            </div>
            <div className="absolute z-[100] overflow-scroll items-center h-40 w-40 md:w-80">
              {showData &&
                data.map((item) => {
                  return (
                    <div
                      className="bg-slate-300 pl-2 hover:bg-slate-400"
                      key={item.name}
                      onClick={
                        singleInput
                          ? () => setSingleValue(item.name)
                          : () => multipleData(item.name)
                      }
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
