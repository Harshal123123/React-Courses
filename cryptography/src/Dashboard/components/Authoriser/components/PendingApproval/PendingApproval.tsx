import Card from "../../../../../../components/CardComponent/Card";
import CustomTable from "../../../../../../components/CustomTableComponent/CustomTable";
import { DASHBOARD_MAKER } from "../../../../constants";
import SelectInput from "../../../../../../components/FormInputs/SelectInput";
import {
  downArrowDashboardSvg,
  dashboardViewSvg,
  dashboardEditSvg,
} from "../../../../../../assets/svgs/Index";
import { GridColDef } from "@mui/x-data-grid";
const PendingApprovalTable = () => {
  const PendingApprovalColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "TRX ID",
      width: 100,
      //   align: "center",
      //   headerAlign: "center",
      sortable: false,
    },
    {
      field: "trxDescription",
      headerName: "TRX DESCRIPTION",
      width: 170,

      sortable: false,
    },
    {
      field: "meid",
      headerName: "MEID",
      width: 100,
      sortable: false,
    },
    {
      field: "AuthId",
      headerName: "AUTHID",
      width: 100,
      sortable: false,
    },
    {
      field: "ctm",
      headerName: "CTM",
      width: 200,
      sortable: false,
    },
    {
      field: "atm",
      headerName: "ATM",
      width: 200,
      sortable: false,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 180,
      sortable: false,
      renderCell: (params) => {
        return params.row.status === "APPROVED" ? (
          <div className="text-green-700">{params.row.status}</div>
        ) : params.row.status === "REJECTED" ? (
          <div className="text-red-700">{params.row.status}</div>
        ) : (
          <div className="text-blue-600">{params.row.status}</div>
        );
      },
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <>
          <div className="flex items-center gap-x-2">
            <button>
              <img src={dashboardViewSvg} alt="" />
            </button>
            <img src={dashboardEditSvg} alt="" />
          </div>
        </>
      ),
    },
  ];
  const rows = [
    {
      id: 182739,
      trxDescription: "NEW ACQUISITION",
      meid: 1234,
      AuthId: 1234,
      ctm: "12/10/2023 12:30:32",
      atm: "12/10/2023 12:30:32",
      status: "APPROVED",
    },
    {
      id: 182739,
      trxDescription: "NEW ACQUISITION",
      meid: 1234,
      AuthId: 1234,
      ctm: "12/10/2023 12:30:32",
      atm: "12/10/2023 12:30:32",
      status: "PENDING",
    },
    {
      id: 182739,
      trxDescription: "NEW ACQUISITION",
      meid: 1234,
      AuthId: 1234,
      ctm: "12/10/2023 12:30:32",
      atm: "12/10/2023 12:30:32",
      status: "REJECTED",
    },
    {
      id: 182739,
      trxDescription: "NEW ACQUISITION",
      meid: 1234,
      AuthId: 1234,
      ctm: "12/10/2023 12:30:32",
      atm: "12/10/2023 12:30:32",
      status: "APPROVED",
    },
  ];

  return (
    <Card width="dashboardCard">
      <div className="flex flex-row items-center gap-4">
        <div>
          <p className="dashboardMakerHeader title-font mb-1 uppercase">
            {DASHBOARD_MAKER.PENDING_APPROVAL}
          </p>
        </div>
        <div>
          <SelectInput
            options={DASHBOARD_MAKER.OPTIONS}
            textSize="sm dashboardMakerHeader mb-1"
            iconSvg={downArrowDashboardSvg}
          />
        </div>
      </div>
      <CustomTable
        columns={PendingApprovalColumns}
        rows={rows}
        searchQuery=""
        columnHeaderTextColor="white"
        columnHeaderBackgroundColor=" linear-gradient(180deg, rgba(35, 190, 183, 0.70) 0%, rgba(101, 204, 196, 0.70) 100%);"
        height={200}
        hideFooter
        downlaodTableData={false}
        density="compact"
      />
    </Card>
  );
};

export default PendingApprovalTable;
