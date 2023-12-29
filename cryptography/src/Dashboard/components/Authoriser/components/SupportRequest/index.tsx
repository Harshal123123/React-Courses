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
const SupportRequest = () => {
  const SupportRequestColumns: GridColDef[] = [
    // {
    //   field: "id",
    //   headerName: "TRX ID",
    //   width: 100,
    // //   align: "center",
    // //   headerAlign: "center",
    //   sortable: false,
    // },
    {
      field: "date",
      headerName: "RAISED DATE",
      width: 130,

      sortable: false,
    },
    {
      field: "topic",
      headerName: "TOPIC",
      width: 280,
      sortable: false,
    },

    {
      field: "status",
      headerName: "STATUS",
      width: 180,
      sortable: false,
      renderCell: (params) => {
        return params.row.status === "PENDING" ? (
          <div className="text-amber-500">{params.row.status}</div>
        ) : (
          <div className="text-teal-400">{params.row.status}</div>
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
      id: 18221,
      date: "12/03/2023",
      topic: "Unable to add user to corporate account",
      status: "PENDING",
    },
    {
      id: 18221,
      date: "12/03/2023",
      topic: "Issue occurring to add bulk transaction",
      status: "PENDING",
    },
    {
      id: 182,
      date: "12/03/2023",
      topic: "Transaction failure for abc beneficiary",
      status: "RESOLVED",
    },
  ];

  return (
    <Card width="dashboardCard">
      <div className="flex flex-row items-center gap-4">
        <div>
          <p className="dashboardMakerHeader title-font mb-1 uppercase">
            {DASHBOARD_MAKER.SUPPORT_REQUEST}
          </p>
        </div>
        <div>
          <SelectInput
            options={DASHBOARD_MAKER.OPTIONS}
            textSize="sm dashboardMakerHeader title-font mb-1"
            iconSvg={downArrowDashboardSvg}
          />
        </div>
      </div>
      <CustomTable
        columns={SupportRequestColumns}
        rows={rows}
        searchQuery=""
        columnHeaderTextColor="white"
        columnHeaderBackgroundColor=" linear-gradient(180deg, rgba(35, 190, 183, 0.70) 0%, rgba(101, 204, 196, 0.70) 100%);"
        height={150}
        hideFooter
        downlaodTableData={false}
        density="compact"
      />
    </Card>
  );
};

export default SupportRequest;
