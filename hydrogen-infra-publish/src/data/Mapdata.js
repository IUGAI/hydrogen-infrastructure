export const buisness = [
  {
    id: 10001,
    name: "환경부",
  },
];

export const stations = [
  {
    id: 1001,
    type: 1,
    phone_number: "042-4323-2818",
    lat: 37.5665,
    lng: 126.978,
    address: "서울특별시 금천구 시흥대로 321",
    district: "서울",
    work_orders:[
         {
          id: 1,
          regist_date: '2023-12-13',
          finish_date: '2023-12-22',
          plan_date: '2023-12-21',
          name: "자재 교채"
         },
         {
          id: 2,
          regist_date: '2023-12-18',
          finish_date: null,
          plan_date: '2023-12-18',
          name: "자재 교채"
         },
         {
          id: 3,
          regist_date: '2023-12-21',
          finish_date: null,
          plan_date: '2023-12-21',
          name: "자재 교채"
         },
         {
          id: 4,
          regist_date: '2023-12-18',
          finish_date: null,
          plan_date: '2023-12-21',
          name: "자재 교채"
         },
         {
          id: 5,
          regist_date: '2023-12-12',
          finish_date: null,
          plan_date: '2023-12-20',
          name: "자재 교채"
         },
         
    ],
    state: 1,
    name: "서울 A 사업소",
    max_capacity: 6,
    alarms: [
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      {
        id: 1,
        importance: 2,
        content: "생산 설비 이상",
        type: 0,
        name: "서울 A 사업소",
        checked: false
      },
      {
        id: 2,
        importance: 2,
        name: "서울 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 3,
        importance: 1,
        name: "서울 A 사업소",
        type: 1,
        content: "생산 설비 이상",
        checked: false
      },
      
    ],
    equipments: [
      {
        id: 10001,
        type: 1,
        failure: false,
        max_capacity: 300,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
      {
        id: 10002,
        type: 1,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "생산 2호기",
        current_weight: 176,
      },
      {
        id: 10003,
        type: 2,
        failure: false,
        max_capacity: 1000,
        procentage: 91.7,
        soundness: 87,
        temperature: -253,
        equipment_name: "저장 1호기",
        current_weight: 486,
      },
      {
        id: 10004,
        type: 3,
        failure: false,
        max_capacity: 900,
        procentage: 34.5,
        soundness: 74,
        temperature: -253,
        equipment_name: "충전 1호기",
        current_weight: 528,
      },
    ],
    equipments_quantity: 5,
  },
  {
    id: 1002,
    type: 2,
    phone_number: "02-4230-1110",
    failure: 1,
    state: 2,
    lat: 35.1796,
    alarms: [
      {
        id: 4,
        importance: 2,
        name: "부산 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 5,
        importance: 2,
        name: "부산 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
      {
        id: 6,
        importance: 1,
        name: "부산 A 사업소",
        content: "생산 설비 이상",
        type: 0,
        checked: false
      },
    ],
    lng: 129.0756,
    address: "부산",
    name: "부산 A 사업소",
    district: "부산",
    max_capacity: 4,
    equipments: [
      {
        id: 20001,
        type: 1,
        failure: false,
        max_capacity: 350,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
      {
        id: 20002,
        type: 2,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "저장 2호기",
        current_weight: 176,
      },
    ],
    equipments_quantity: 3,
  },
  {
    id: 1003,
    type: 3,
    lat: 33.49,
    state: 1,
    phone_number: "02-4323-2288",
    lng: 126.53,
    address: "제주",
    district: "제주",
    name: "제주 A 사업소",
    max_capacity: 4,
    equipments: [
      {
        id: 30001,
        type: 1,
        failure: false,
        max_capacity: 350,
        procentage: 73.5,
        soundness: 100,
        temperature: 730,
        equipment_name: "생산 1호기",
        current_weight: 220,
      },
    ],
    equipments_quantity: 7,
  },
  {
    id: 1004,
    type: 1,
    lat: 35.8714,
    phone_number: "042-7772-2878",
    lng: 128.6014,
    address: "대구",
    state: 1,
    district: "대구",
    max_capacity: 4,
    name: "대구 A 사업소",
    equipments: [],
    equipments_quantity: 2,
  },
  {
    id: 1005,
    type: 3,
    lat: 37.4563,
    lng: 126.7052,
    phone_number: "02-3521-8891",
    state: 1,
    address: "인천",
    district: "인천",
    max_capacity: 4,
    name: "인천 A 사업소",
    equipments: [
      {
        id: 40002,
        type: 1,
        failure: true,
        max_capacity: 300,
        procentage: 58.7,
        soundness: 10,
        temperature: 755,
        equipment_name: "생산 2호기",
        current_weight: 176,
      },
    ],
    equipments_quantity: 6,
  },
  {
    id: 1006,
    type: 3,
    state: 0,
    lat: 35.1595,
    lng: 126.8526,
    address: "광주",
    phone_number: "031-9212-0199",
    district: "광주",
    max_capacity: 5,
    name: "광주 A 사업소",
    equipments: [],
    equipments_quantity: 4,
  },

  {
    id: 1007,
    type: 2,
    state: 0,
    lat: 35.095,
    lng: 126.8726,
    address: "광주",
    phone_number: "02-0192-2222",
    district: "광주",
    max_capacity: 5,
    name: "광주 B 사업소",
    equipments: [],
    equipments_quantity: 4,
  },
];

export const equipments = stations.flatMap((obj) => obj.equipments);

// const imageSources = [
//     "./img/storaging-map-icon.png",
//     "./img/charging-map-icon.png",
//     "./img/production-map-icon.png",
//     "./img/alarm-map-icon.png"
//   ];

// for (let i = 1; i <= 10; i++) {
//     const randomIndex = Math.floor(Math.random() * imageSources.length);
//     const iconObject = {
//       id: i,
//       src: imageSources[randomIndex],
//       top: `${Math.floor(Math.random() * 41) + 20}%`, // Random value between 20% and 60%
//       right: `${Math.floor(Math.random() * 41) + 20}%`, // Random value between 20% and 60%
//     };
//     mapData.push(iconObject);
//   }

//   console.log(mapData);

// export default mapdata;
