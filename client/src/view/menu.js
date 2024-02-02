import React, { useState } from "react";
import Title from "../component/title";

const Menu = () => {
  const [showMenu1, setShowMenu1] = useState(true);
  const [showMenu2, setShowMenu2] = useState(false);

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);

  const [hoverMenu1, setHoverMenu1] = useState(false);
  const [hoverMenu2, setHoverMenu2] = useState(false);
  const [hoverMenu3, setHoverMenu3] = useState(false);
  const [hoverMenu4, setHoverMenu4] = useState(false);

  const [subMenuClick, setSubMenuClick] = useState(0);

  const menu1 = () => {
    setShowMenu1(true);
    setShowMenu2(false);
  };

  const menu2 = () => {
    setShowMenu1(false);
    setShowMenu2(true);
  };

  const button1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
    setBtn4(false);
  };

  const button2 = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
    setBtn4(false);
  };
  const button3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
    setBtn4(false);
  };
  const button4 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(false);
    setBtn4(true);
  };

  const handleMouseEnter1 = () => {
    setHoverMenu1(true);
  };

  const handleMouseEnter2 = () => {
    setHoverMenu2(true);
  };
  const handleMouseEnter3 = () => {
    setHoverMenu3(true);
  };
  const handleMouseEnter4 = () => {
    setHoverMenu4(true);
  };
  const handleMouseLeave = () => {
    setHoverMenu1(false);
    setHoverMenu2(false);
    setHoverMenu3(false);
    setHoverMenu4(false);
  };

  const testing = [
    {
      name: "Selenium",
      no: "1",
    },
    {
      name: "Manual Testing",
      no: "2",
    },
    {
      name: "DB TEsting",
      no: "3",
    },
    {
      name: "Unit Testing",
      no: "4",
    },
  ];

  const java = [
    {
      name: "Adv Java",
      no: "5",
    },
    {
      name: "Core Java",
      no: "6",
    },
    {
      name: "Spring",
      no: "7",
    },
    {
      name: "Hibernate",
      no: "8",
    },
  ];

  const net = [
    {
      name: "C#",
      no: "9",
    },
    {
      name: "ASP.NET",
      no: "10",
    },
    {
      name: "ADO.NET",
      no: "11",
    },
    {
      name: "MVC",
      no: "12",
    },
  ];

  const database = [
    {
      name: "SQL",
      no: "13",
    },
    {
      name: "My SQL",
      no: "14",
    },
    {
      name: "Oracle",
      no: "15",
    },
    {
      name: "H2",
      no: "16",
    },
  ];

  const subMenu = [
    {
      data: "Selenium ",
      no: "1",
    },
    {
      data: "Manual Testing",
      no: "2",
    },
    {
      data: "DB Testing",
      no: "3",
    },
    {
      data: "Unit Testing",
      no: "4",
    },
    {
      data: "Adv Java",
      no: "5",
    },
    {
      data: "Core Java",
      no: "6",
    },
    {
      data: "Spring",
      no: "7",
    },
    {
      data: "Hibernate",
      no: "8",
    },
    {
      data: "C#",
      no: "9",
    },
    {
      data: "ASP.NET",
      no: "10",
    },
    {
      data: "ADO.NET",
      no: "11",
    },
    {
      data: "MVC",
      no: "12",
    },
    {
      data: "SQL",
      no: "13",
    },
    {
      data: "My SQL",
      no: "14",
    },
    {
      data: "Oracle",
      no: "15",
    },
    {
      data: "H2",
      no: "16",
    },
  ];
  return (
    <>
      <Title title="Menu" />
      <div className="p-4">
        <div className="text-2xl">Menu</div>
        <div className="mt-6">
          <div className="flex flex-col md:flex-row">
            <span
              className={`${
                showMenu1
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 `}
              onClick={menu1}
            >
              Single Menus
            </span>
            <span
              className={`${
                showMenu2
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={menu2}
            >
              Sub Menus
            </span>
          </div>
          <div className="border-2 border-slate-300 pb-4 flex flex-col md:flex-row">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <button
                  onClick={button1}
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave}
                  className="bg-blue-400 ml-4 w-40 mt-8 hover:bg-blue-500 py-2 "
                >
                  Testing
                </button>
                <button
                  onClick={button2}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave}
                  className="bg-blue-400 ml-4 hover:bg-blue-500 w-40 mt-1 py-2"
                >
                  Java
                </button>
                <button
                  onClick={button3}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave}
                  className="bg-blue-400 hover:bg-blue-500 ml-4 w-40 mt-1 py-2"
                >
                  .Net
                </button>
                <button
                  onClick={button4}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave}
                  className="bg-blue-400 hover:bg-blue-500 ml-4 w-40 mt-1 py-2"
                >
                  Data Base
                </button>
              </div>
              <div>
                {showMenu2 && (
                  <div className="absolute">
                    <div>
                      {hoverMenu1 && (
                        <div
                          className="mt-8 ml-[1px] w-44 text-center"
                          onMouseEnter={handleMouseEnter1}
                          onMouseLeave={handleMouseLeave}
                        >
                          {testing.map((item) => {
                            return (
                              <div
                                key={item.name}
                                className="bg-blue-400 hover:bg-blue-500 mt-1 py-1"
                                onClick={() => setSubMenuClick(item.no)}
                              >
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div>
                      {hoverMenu2 && (
                        <div
                          className="mt-20 ml-[1px] w-44 text-center"
                          onMouseEnter={handleMouseEnter2}
                          onMouseLeave={handleMouseLeave}
                        >
                          {java.map((item) => {
                            return (
                              <div
                                key={item.name}
                                className="bg-blue-400 hover:bg-blue-500 mt-1 py-1"
                                onClick={() => setSubMenuClick(item.no)}
                              >
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div>
                      {hoverMenu3 && (
                        <div
                          className="mt-20 ml-[1px] w-44 text-center"
                          onMouseEnter={handleMouseEnter3}
                          onMouseLeave={handleMouseLeave}
                        >
                          {net.map((item) => {
                            return (
                              <div
                                key={item.name}
                                className="bg-blue-400 hover:bg-blue-500 mt-1 py-1"
                                onClick={() => setSubMenuClick(item.no)}
                              >
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div>
                      {hoverMenu4 && (
                        <div
                          className="mt-20 ml-[1px] w-44 text-center"
                          onMouseEnter={handleMouseEnter4}
                          onMouseLeave={handleMouseLeave}
                        >
                          {database.map((item) => {
                            return (
                              <div
                                key={item.name}
                                className="bg-blue-400 hover:bg-blue-500 mt-1 py-1"
                                onClick={() => setSubMenuClick(item.no)}
                              >
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              {showMenu1 && (
                <div className="ml-4 mt-8">
                  {btn1 && <div>You Have Selected Testing Menu Option.</div>}
                  {btn2 && <div>You Have Selected Java Menu Option.</div>}
                  {btn3 && <div>You Have Selected .Net Menu Option.</div>}
                  {btn4 && <div>You Have Selected Data base Menu Option.</div>}
                </div>
              )}
              {showMenu2 && (
                <div className="mt-4 ml-4">
                  {subMenu.map((item) => {
                    return (
                      <div>
                        {subMenuClick === item.no ? (
                          <div>You Have Selected {item.data} Menu Option.</div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
