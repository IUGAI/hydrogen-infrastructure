export const columnsGridStation = [
    {
      field: "id",
      headerName: "아이디",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "regist_date",
      headerName: "등록일",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        // Format the date as needed
        var formattedDate = null
        if (params.value !== null){
         formattedDate = new Date(params.value).toLocaleDateString();
        } 
        // Return the formatted date for rendering
        return <span className="custom-datagrid ">{formattedDate}</span>;
      },
    },
    {
      field: "district",
      headerName: "시도",
      width: 150,
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "business",
      headerName: "사업자",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => {
        // Convert the decimal value to a percentage
        return params.value === 10000001 ? "남부사전" : "";
      },
    },
    {
      field: "station_name",
      headerName: "사업소",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "commencement_date",
      headerName: "개시일",
      description: "This column has a value getter and is not sortable.",
      align: "center",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => {
        // Format the date as needed
        var formattedDate = null
        if (params.value !== null){
         formattedDate = new Date(params.value).toLocaleDateString();
        } 
        // Return the formatted date for rendering
        return <span className="custom-datagrid ">{formattedDate}</span>;
      },
    },
    {
      field: "station_type",
      headerName: "사업소 종류",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return params.value === 1 ? (
          <span className="prod-text-value production">생산</span>
        ) : params.value === 2 ? (
          <span className="prod-text-value storaging">저장</span>
        ) : (
          <span className="prod-text-value charging">충전</span>
        );
      },
    },
    {
      field: "production_cnt",
      headerName: "생상시설",
      align: "center",
      headerAlign: "center",
      width: 120,
    },
    {
      field: "storage_cnt",
      headerName: "저장시설",
      align: "center",
      headerAlign: "center",
      width: 120,
    },
    {
      field: "charging_cnt",
      headerName: "충전시설",
      align: "center",
      headerAlign: "center",
      width: 120,
    },
  ];

