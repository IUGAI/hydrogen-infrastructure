
import { BsFillLightningFill } from "react-icons/bs";
import { BiSolidFlask } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { SiLeaflet } from "react-icons/si";
import React, { PureComponent, useState, useRef } from "react";
import { stations } from "../../data/Mapdata";

import StationStatisticProduction from "../../components/StationStatistic/StationStatisticProduction";
import Soundness from "../../components/StationStatistic/SoundNess";
import StationFailureStatistic from "../../components/StationStatistic/StationFailureStatistic";
import GraphAttentionStatistic from "../../components/MainDashboard/AttentionState/GraphAttention/GraphAttentionStatistic";
import StationFailureBarStatistic from "../../components/StationStatistic/StationFailureBarStatistic";

const equipments = stations.flatMap((obj) => obj.equipments);
const run_equipments = equipments.filter((obj) => obj.failure === false).length;
const irreversible_equipments = equipments.filter(
  (obj) => obj.failure === true
).length;
const percentage_run = ((run_equipments / equipments.length) * 100).toFixed(0);

const graphItems = [
  {
    id: 1,
    name: "A type",
    type: 10001,
    percentage: 75,
    value: 100,
    data: [
      { name: "D type", value: 90 },
      { name: "C type", value: 33 },
      { name: "B type", value: 120 },
      { name: "A type", value: 900 },
    ],
    color_stroke: "#197cd9",
    title: "가동 상태",
  },
];

const graphItemsState = [
  {
    id: 1,
    name: "처리 완료",
    type: 10001,
    percentage: 75,
    data: [
      { name: "대기", value: 100 },
      { name: "작업중", value: 210 },
      { name: "none", value: 0 },
      { name: "처리 완료", value: 900 },
    ],
    color_stroke: "#197cd9",
    title: "가동 상태",
  },
];

const data = [
  {
    name: "1월",
    uv: 0,
    pv: 0,
    amt: 220,
  },
  {
    name: "2월",
    uv: 200,
    pv: 225,
    amt: 237,
  },
  {
    name: "3월",
    uv: 230,
    pv: 290,
    amt: 280,
  },
  {
    name: "4월",
    uv: 270,
    pv: 250,
    amt: 290,
  },
  {
    name: "5월",
    uv: 265,
    pv: 255,
    amt: 300,
  },
  {
    name: "6월",
    uv: 243,
    pv: 260,
    amt: 256,
  },
  {
    name: "7월",
    uv: 260,
    pv: 270,
    amt: 290,
  },
  {
    name: "8월",
    uv: 265,
    pv: 280,
    amt: 270,
  },
  {
    name: "9월",
    uv: 290,
    pv: 239,
    amt: 265,
  },
  {
    name: "10월",
    uv: 230,
    pv: 277,
    amt: 250,
  },
  {
    name: "11월",
    uv: 258,
    pv: 265,
    amt: 280,
  },
  {
    name: "12월",
    uv: 120,
    pv: 130,
    amt: 133,
  },
];

//   {
//     name: "1월",
//     uv: 0,
//     pv: 225,
//     amt: 220,
//   },
//   {
//     name: "2월",
//     uv: 0,
//     pv: 225,
//     amt: 237,
//   },
//   {
//     name: "3월",
//     uv: 0,
//     pv: 290,
//     amt: 280,
//   },
//   {
//     name: "4월",
//     uv: 0,
//     pv: 250,
//     amt: 290,
//   },
//   {
//     name: "5월",
//     uv: 0,
//     pv: 255,
//     amt: 300,
//   },
//   {
//     name: "6월",
//     uv: 0,
//     pv: 260,
//     amt: 256,
//   },
//   {
//     name: "7월",
//     uv: 0,
//     pv: 270,
//     amt: 290,
//   },
//   {
//     name: "8월",
//     uv: 0,
//     pv: 280,
//     amt: 270,
//   },
//   {
//     name: "9월",
//     uv: 0,
//     pv: 239,
//     amt: 265,
//   },
//   {
//     name: "10월",
//     uv: 0,
//     pv: 277,
//     amt: 250,
//   },
//   {
//     name: "11월",
//     uv: 0,
//     pv: 265,
//     amt: 280,
//   },
//   {
//     name: "12월",
//     uv: 0,
//     pv: 130,
//     amt: 133,
//   },
// ];

// const data_uv_pv_0 = [
//   {
//     name: "1월",
//     uv: 0,
//     pv: 0,
//     amt: 220,
//   },
//   {
//     name: "2월",
//     uv: 0,
//     pv: 0,
//     amt: 237,
//   },
//   {
//     name: "3월",
//     uv: 0,
//     pv: 0,
//     amt: 280,
//   },
//   {
//     name: "4월",
//     uv: 0,
//     pv: 0,
//     amt: 290,
//   },
//   {
//     name: "5월",
//     uv: 0,
//     pv: 0,
//     amt: 300,
//   },
//   {
//     name: "6월",
//     uv: 0,
//     pv: 0,
//     amt: 256,
//   },
//   {
//     name: "7월",
//     uv: 0,
//     pv: 0,
//     amt: 290,
//   },
//   {
//     name: "8월",
//     uv: 0,
//     pv: 0,
//     amt: 270,
//   },
//   {
//     name: "9월",
//     uv: 0,
//     pv: 0,
//     amt: 265,
//   },
//   {
//     name: "10월",
//     uv: 0,
//     pv: 0,
//     amt: 250,
//   },
//   {
//     name: "11월",
//     uv: 0,
//     pv: 0,
//     amt: 280,
//   },
//   {
//     name: "12월",
//     uv: 0,
//     pv: 0,
//     amt: 133,
//   },
// ];

const data_production = [
  {
    name: "1월",
    uv: 88,
    amt: 72,
    pv: 66,
  },
  {
    name: "2월",
    uv: 88,
    amt: 72,
    pv: 66,
  },
  {
    name: "3월",
    uv: 92,
    amt: 72,
    pv: 66,
  },
  {
    name: "4월",
    uv: 88,
    amt: 72,
    pv: 66,
  },
  {
    name: "5월",
    uv: 80,
    amt: 72,
    pv: 66,
  },
  {
    name: "6월",
    uv: 91,
    amt: 72,
    pv: 66,
  },
  {
    name: "7월",
    uv: 82,
    amt: 72,
    pv: 66,
  },
  {
    name: "8월",
    uv: 72,
    amt: 72,
    pv: 66,
  },
  {
    name: "9월",
    uv: 99,
    amt: 72,
    pv: 66,
  },
  {
    name: "10월",
    uv: 86,
    amt: 72,
    pv: 66,
  },
  {
    name: "11월",
    uv: 100,
    amt: 72,
    pv: 66,
  },
  {
    name: "12월",
    uv: 98,
    amt: 72,
    pv: 66,
  },
];

const data_soundness = [
  {
    name: "1월",
    pv: 88,
  },
  {
    name: "2월",
    pv: 75,
  },
  {
    name: "3월",
    pv: 99,
  },
  {
    name: "4월",
    pv: 96,
  },
  {
    name: "5월",
    pv: 73,
  },
  {
    name: "6월",
    pv: 88,
  },
  {
    name: "7월",
    pv: 65,
  },
  {
    name: "8월",
    pv: 78,
  },
  {
    name: "9월",
    pv: 83,
  },
  {
    name: "10월",
    pv: 99,
  },
  {
    name: "11월",
    pv: 100,
  },
  {
    name: "12월",
    pv: 100,
  },
];

const data_failure = [
  {
    name: "1월",
    pv: 10,
  },
  {
    name: "2월",
    pv: 13,
  },
  {
    name: "3월",
    pv: 12,
  },
  {
    name: "4월",
    pv: 6,
  },
  {
    name: "5월",
    pv: 10,
  },
  {
    name: "6월",
    pv: 4,
  },
  {
    name: "7월",
    pv: 4,
  },
  {
    name: "8월",
    pv: 13,
  },
  {
    name: "9월",
    pv: 16,
  },
  {
    name: "10월",
    pv: 1,
  },
  {
    name: "11월",
    pv: 0,
  },
  {
    name: "12월",
    pv: 0,
  },
];

const data_work = [
    {
      name: "1월",
      pv: 8,
    },
    {
      name: "2월",
      pv: 10,
    },
    {
      name: "3월",
      pv: 12,
    },
    {
      name: "4월",
      pv: 4,
    },
    {
      name: "5월",
      pv: 7,
    },
    {
      name: "6월",
      pv: 4,
    },
    {
      name: "7월",
      pv: 4,
    },
    {
      name: "8월",
      pv: 12,
    },
    {
      name: "9월",
      pv: 13,
    },
    {
      name: "10월",
      pv: 0,
    },
    {
      name: "11월",
      pv: 0,
    },
    {
      name: "12월",
      pv: 0,
    },
  ];

function StationStatistics() {
  const [lineGraph, setlineGraph] = useState(true);
  const [barGraph, setbarGraph] = useState(true);
  const [menuState, setMenuState] = useState("operation");

  const ticksNumbers = [];
  for (let i = 0; i <= 300; i++) {
    if (i % 25 === 0) {
      ticksNumbers.push(i);
    }
  }

  const ticksNumbersOperation = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
      ticksNumbersOperation.push(i);
    }
  }

  const ticksNumbersFailure = [];
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      ticksNumbersFailure.push(i);
    }
  }

  const handleItemMenuGraph = (state) => {
    setMenuState(state);
  };

  const handelClickBar = () => {
    setbarGraph(!barGraph);
  };

  const handelClickLine = () => {
    setlineGraph(!lineGraph);
  };

  return (
    <div className={`station-statistic-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>사업소 통계</span>
      </div>
      <div className="station-statistic-inner">
        <div className="station-statistic-search">
          <div className="search-input-item">
            <label>시도</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업자</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업소</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>기간</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>연도/날짜</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>그래프 유형</label>
            <div className="button-container-custum">
              <button
                className={`custom-button-radio ${barGraph ? "active" : ""}`}
                onClick={handelClickBar}
              >
                막대
              </button>
              <button
                className={`custom-button-radio ${lineGraph ? "active" : ""}`}
                onClick={handelClickLine}
              >
                선형
              </button>
            </div>
          </div>
        </div>
        <div className="station-statistic-content">
          <div className="station-statistic-aside">
            <div
              className={`aside-item ${
                menuState === "operation" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operation")}
            >
              <span>가동</span>
              <BsFillLightningFill
                color={`${menuState === "operation" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "operationRate" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operationRate")}
            >
              <span>가동률</span>
              <BiSolidFlask
                color={`${menuState === "operationRate" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "failure" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("failure")}
            >
              <span>고장</span>
              <BsConeStriped
                color={`${menuState === "failure" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${menuState === "work" ? "active" : ""}`}
              onClick={() => handleItemMenuGraph("work")}
            >
              <span>작업</span>
              <BsTools
                color={`${menuState === "work" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "soundness" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("soundness")}
            >
              <span>건전도</span>
              <SiLeaflet
                color={`${menuState === "soundness" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
          </div>
          {menuState === "operation" ? (
            <StationStatisticProduction
              data={data}
              barGraph={barGraph}
              unit={"kg"}
              ticksNumbers={ticksNumbers}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "operationRate" ? (
            <StationStatisticProduction
              data={data_production}
              ticksNumbers={ticksNumbersOperation}
              barGraph={barGraph}
              unit={"%"}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "soundness" ? (
            <Soundness
              data={data_soundness}
              barGraph={barGraph}
              unit={"%"}
              ticksNumbers={ticksNumbersOperation}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "failure" ? (
            <div className="staion-statistic-graph-failure">
              <StationFailureBarStatistic
                graphItems={graphItems}
                graphItemsState={graphItemsState}
              />
              <StationFailureStatistic
                data={data_failure}
                barGraph={barGraph}
                graphName={"고장"}
                unit={"건"}
                ticksNumbers={ticksNumbersFailure}
                lineGraph={lineGraph}
                menuState={menuState}
              />
            </div>
          ) 
          : menuState === "work" ? (
            <div className="staion-statistic-graph-failure">
              <StationFailureBarStatistic
                graphItems={graphItems}
                graphItemsState={graphItemsState}
              />
              <StationFailureStatistic
                data={data_work}
                barGraph={barGraph}
                graphName={"작업"}
                unit={"건"}
                ticksNumbers={ticksNumbersFailure}
                lineGraph={lineGraph}
                menuState={menuState}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default StationStatistics;
