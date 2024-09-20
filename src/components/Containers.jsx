import React, { useState } from "react";
import road_v from "../images/road.svg";

import { Drawer, Table } from "antd";

import "../App.css";

export default function Containers() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

  const sharedOnCell = () => {};

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      title: "Xarajat Nomi",
      dataIndex: "name",
      onCell: sharedOnCell,
    },
    {
      title: "Soni",
      dataIndex: "much",
      onCell: sharedOnCell,
    },

    {
      title: "Narxi",
      dataIndex: "price",
      onCell: sharedOnCell,
    },
    {
      title: "Summasi (ming so'mda)",
      dataIndex: "overal",
      onCell: sharedOnCell,
    },
  ];
  const data = [
    {
      key: "1",
      name: "Konteyner ta'miri holati",
      much: 1,
      price: "15000",
      overal: "15000",
    },
    {
      key: "2",
      name: "Divan",
      much: 4,
      price: "2000",
      overal: "8000",
    },
    {
      key: "3",
      name: "Gilam 2 ta (3х2)",
      much: 2,
      price: "1500",
      overal: "3000",
    },
    {
      key: "4",
      name: "Stol, stul (4 kishilik)",
      much: 1,
      price: "2500",
      overal: "2500",
    },
    {
      key: "5",
      name: "Shkaf",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "6",
      name: "Shkaf (kuxonniy)",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "7",
      name: "Suv ichish moslamasi (50 l)",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "8",
      name: "Mikropech",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "9",
      name: "Televizor (32)",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "10",
      name: "Xolodilnik",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "11",
      name: "Suv nasosi",
      much: 1,
      price: "1000",
      overal: "1000",
    },
    {
      key: "12",
      name: "Suv saqlashga idish (200 L)",
      much: 1,
      price: "15000",
      overal: "3000",
    },
    {
      key: "13",
      name: "Konditsioner (12)",
      much: 1,
      price: "4200",
      overal: "4200",
    },
    {
      key: "14",
      name: "Konteynerlarni joylashtirish va betonlash ishlari",
      much: 1,
      price: "80000",
      overal: "80000",
    },
    {
      key: "15",
      name: "Darvoza o‘rnatish",
      much: 1,
      price: "20000",
      overal: "20000",
    },
    {
      key: "16",
      name: "Kameralashtirish va Wi Fi o‘rnatish ishlari",
      much: 1,
      price: "40000",
      overal: "40000",
    },
    {
      key: "17",
      name: "Boshqa xarajatlar",
      much: 1,
      price: "5000",
      overal: "5000",
    },
    {
      key: "18",
      name: "Jami",
      much: "",
      price: "",
      overal: "189350",
    },
  ];

  const columns1 = [
    {
      title: "No",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      title: "Xarajat Nomi",
      dataIndex: "name",
      onCell: sharedOnCell,
    },
    {
      title: "Soni",
      dataIndex: "much",
      onCell: sharedOnCell,
    },

    {
      title: "Narxi",
      dataIndex: "price",
      onCell: sharedOnCell,
    },
    {
      title: "Summasi (ming so'mda)",
      dataIndex: "overal",
      onCell: sharedOnCell,
    },
  ];
  const data1 = [
    {
      key: "1",
      name: "Konteyner ta'mir holatda",
      much: 1,
      price: "15000",
      overal: "15000",
    },
    {
      key: "2",
      name: "Divan",
      much: 4,
      price: "2000",
      overal: "8000",
    },
    {
      key: "3",
      name: "Gilam 2 ta (3х2)",
      much: 2,
      price: "1500",
      overal: "3000",
    },
    {
      key: "4",
      name: "Stol, stul (4 kishilik)",
      much: 1,
      price: "2500",
      overal: "2500",
    },
    {
      key: "5",
      name: "Shkaf",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "6",
      name: "Shkaf (kuxonniy)",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "7",
      name: "Suv ichish moslamasi (50 l)",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "8",
      name: "Mikropech",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "9",
      name: "Televizor (32)",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "10",
      name: "Xolodilnik",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "11",
      name: "Suv nasosi",
      much: 1,
      price: "1000",
      overal: "1000",
    },
    {
      key: "12",
      name: "Suv saqlashga idish (200 L)",
      much: 1,
      price: "15000",
      overal: "3000",
    },
    {
      key: "13",
      name: "Konditsioner (12)",
      much: 1,
      price: "4200",
      overal: "4200",
    },
    {
      key: "14",
      name: "Boshqa xarajatlar",
      much: "",
      price: "3000",
      overal: "3000",
    },
    {
      key: "15",
      name: "Jami",
      much: "",
      price: "",
      overal: "47350",
    },
  ];

  const columns2 = [
    {
      title: "No",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      title: "Xarajat Nomi",
      dataIndex: "name",
      onCell: sharedOnCell,
    },
    {
      title: "Soni",
      dataIndex: "much",
      onCell: sharedOnCell,
    },

    {
      title: "Narxi",
      dataIndex: "price",
      onCell: sharedOnCell,
    },
    {
      title: "Summasi (ming so'mda)",
      dataIndex: "overal",
      onCell: sharedOnCell,
    },
  ];
  const data2 = [
    {
      key: "1",
      name: "Tayyor konteyner sotib olish",
      much: 1,
      price: "100000",
      overal: "100000",
    },
    {
      key: "2",
      name: "Gilam 2 tа (3х2)",
      much: 2,
      price: "1500",
      overal: "3000",
    },
    {
      key: "3",
      name: "Mikropech",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "4",
      name: "Televizor (32)",
      much: 1,
      price: "1500",
      overal: "1500",
    },
    {
      key: "5",
      name: "Xolodilnik",
      much: 1,
      price: "2000",
      overal: "2000",
    },
    {
      key: "6",
      name: "Jami",
      much: "",
      price: "",
      overal: "108500",
    },
  ];
  return (
    <div className="w-full bg-[#F3E0BF]  flex justify-center items-center h-[100%]">
      <Drawer
        title="Balansda saqlovchi tashkilot"
        onClose={onClose}
        open={open}
      >
        <Table columns={columns} dataSource={data} bordered />
      </Drawer>
      <Drawer
        title="Balansda saqlovchi tashkilot"
        onClose={onClose1}
        open={open1}
      >
        <Table columns={columns1} dataSource={data1} bordered />
      </Drawer>
      <Drawer
        title="Balansda saqlovchi tashkilot"
        onClose={onClose2}
        open={open2}
      >
        <Table columns={columns2} dataSource={data2} bordered />
      </Drawer>
      <div className="container md:max-w-6xl md:mx-auto  relative my-2 ">
        <div className="flex justify-between w-full gap-0 z-20 relative">
          <div className="w-1/4 h-[91px]  flex justify-start items-start  align-start">
            <button
              className="btn-vertical flex-1 w-full text-3xl px-20 font-bold text-white justify-start items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              <span>7</span>
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical  text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              8
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              9
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical  text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              10
            </button>
          </div>
        </div>

        <div className="flex justify-between w-full my-2 z-20 relative">
          <div>
            <button
              className="btn-horizantal  w-[100px] h-[130px] text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              <span>6</span>
            </button>
          </div>
          <div>
            <button
              className="btn-horizantal  w-[100px] h-[130px] text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={showDrawer1}
            >
              <span>11</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer1}
          >
            5
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            12
          </button>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150 "
            onClick={showDrawer1}
          >
            4
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            13
          </button>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer1}
          >
            3
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            14
          </button>
        </div>
        <div className="grid grid-cols-11 gap-3 justify-between w-full z-20 relative">
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer1}
          >
            2
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer}
          >
            1
          </button>
          <button className="btn-vertica px-20 col-span-1  text-3xl text-white font-bold py-3 flex justify-center items-center"></button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            17
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            15
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={showDrawer2}
          >
            16
          </button>
        </div>
        <div className="absolute bottom-0 left-[420px] z-[999] w-[100px]">
          <img
            src={road_v}
            alt="road"
            className="h-[240px] object-cover w-full"
          />
        </div>
        <div className="absolute bottom-[155px] left-[335px] z-20">
          <img
            src={road_v}
            alt="road"
            className="rotate-90  h-[270px] object-cover w-[100px] block"
          />
        </div>
        <div className="absolute top-[91px] left-[100px] z-0">
          <span className="block w-[902px] h-[30px] bg-slate-400"></span>
        </div>
        <div className="absolute bottom-[100px] left-[100px] z-0">
          <span className="block w-[902px] h-[30px] bg-slate-400"></span>
        </div>
        <div className="absolute bottom-[100px] left-[100px] z-0">
          <span className="block w-[30px] h-[630px] bg-slate-400"></span>
        </div>
        <div className="absolute bottom-[100px] right-[100px] z-0">
          <span className="block w-[30px] h-[630px] bg-slate-400"></span>
        </div>
        <div className=" absolute top-[211px] left-[200px] z-30">
          <span className="w-[200px] h-[300px] bg-[#303030] inline-block  border-2"></span>
        </div>
        <div className="absolute top-[260px] left-[200px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 rotate-45 block"></span>
        </div>
        <div className="absolute top-[340px] left-[200px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 rotate-45 block"></span>
        </div>
        <div className="absolute top-[420px] left-[200px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 rotate-45 block"></span>
        </div>
        {/* <div className="absolute top-[500px] left-[200px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 rotate-45 block"></span>
        </div> */}
        <div className="absolute top-[260px] left-[320px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 -rotate-45 block"></span>
        </div>
        <div className="absolute top-[340px] left-[320px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 -rotate-45 block"></span>
        </div>
        <div className="absolute top-[420px] left-[320px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 -rotate-45 block"></span>
        </div>
        {/* <div className="absolute top-[500px] left-[320px] z-[9999]">
          <span className="w-[80px] h-[2px] bg-yellow-300 -rotate-45 block"></span>
        </div> */}
        <div className="absolute top-[360px] left-[152px] z-[9999]">
          <span className="w-[296px] h-[2px] bg-white rotate-90 block"></span>
        </div>
      </div>
    </div>
  );
}
