import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Drawer, Table } from "antd";
import "../App.css";
import { containerApi } from "../feature/Apies";
import road_v from "../images/road.svg";

export default function Containers() {
  const [openDrawer, setOpenDrawer] = useState(false); // open state for Drawer
  const [activeTable, setActiveTable] = useState(null); // to manage active table
  const [appealIdNumber, setAppealIdNumber] = useState(); // to store appeal count

  const queryClient = useQueryClient();
  const containerRequest = useMutation(containerApi.container, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const { data: dataAll } = useQuery(["container"], () =>
    containerApi.container()
  );

  // Showing drawer with dynamic table data
  const showDrawer = (id, tableKey) => {
    setOpenDrawer(true);
    containerRequest.mutate();

    const appealId = dataAll?.filter((item) => item.id === id);
    setAppealIdNumber(appealId[0]?.appeals_count);
    setActiveTable(tableKey); // Set which table to show
  };

  const onClose = () => {
    setOpenDrawer(false);
    setActiveTable(null); // Reset active table on close
  };

  // Common columns for all tables
  const commonColumns = [
    { title: "No", dataIndex: "key", rowScope: "row" },
    { title: "Xarajat Nomi", dataIndex: "name" },
    { title: "Soni", dataIndex: "much" },
    { title: "Narxi", dataIndex: "price" },
    { title: "Summasi (ming so'mda)", dataIndex: "overal" },
  ];

  const data1 = [
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

  const data2 = [
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

  const data3 = [
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

  const tableData = {
    table1: data1,
    table2: data2,
    table3: data3,
  };
  return (
    <div className="w-full bg-[#F3E0BF]  flex justify-center items-center h-[100%]">
      <Drawer
        title="Balansda saqlovchi tashkilot"
        onClose={onClose}
        open={openDrawer}
      >
        <p className="mb-4 mt-[-10px] text-[16px]">
          Mazkur konteyner uchun kelib tushgan arizalar soni:{" "}
          <span className="font-[600]">{appealIdNumber}</span> ta
        </p>
        {activeTable && (
          <Table
            columns={commonColumns}
            dataSource={tableData[activeTable]}
            bordered
          />
        )}
      </Drawer>
      <div className="container md:max-w-6xl md:mx-auto  relative my-2 ">
        <div className="flex justify-between w-full gap-0 z-20 relative">
          <div className="w-1/4 h-[91px]  flex justify-start items-start  align-start">
            <button
              className="btn-vertical flex-1 w-full text-3xl px-20 font-bold text-white justify-start items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(7, "table2")}
            >
              <span>7</span>
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical  text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(8, "table2")}
            >
              8
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(9, "table2")}
            >
              9
            </button>
          </div>
          <div className="w-1/4 h-[91px] flex justify-center items-center ">
            <button
              className="btn-vertical  text-3xl font-bold text-white col-span-3 justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(10, "table2")}
            >
              10
            </button>
          </div>
        </div>

        <div className="flex justify-between w-full my-2 z-20 relative">
          <div>
            <button
              className="btn-horizantal  w-[100px] h-[130px] text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(6, "table2")}
            >
              <span>6</span>
            </button>
          </div>
          <div>
            <button
              className="btn-horizantal  w-[100px] h-[130px] text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
              onClick={() => showDrawer(11, "table2")}
            >
              <span>11</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(5, "table2")}
          >
            5
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(12, "table3")}
          >
            12
          </button>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150 "
            onClick={() => showDrawer(4, "table2")}
          >
            4
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(13, "table3")}
          >
            13
          </button>
        </div>
        <div className="flex justify-between w-full my-2 z-20 relative">
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(3, "table2")}
          >
            3
          </button>
          <button
            className="btn-horizantal  w-[100px] h-[130px]  text-white font-bold text-3xl flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(14, "table3")}
          >
            14
          </button>
        </div>
        <div className="grid grid-cols-11 gap-3 justify-between w-full z-20 relative">
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(2, "table2")}
          >
            2
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(1, "table1")}
          >
            1
          </button>
          <button className="btn-vertica px-20 col-span-1  text-3xl text-white font-bold py-3 flex justify-center items-center"></button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(17, "table3")}
          >
            17
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(16, "table3")}
          >
            16
          </button>
          <button
            className="btn-vertical px-18 col-span-2  text-3xl text-white font-bold py-8 flex justify-center items-center hover:scale-105 transition-transform duration-150"
            onClick={() => showDrawer(15, "table3")}
          >
            15
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
