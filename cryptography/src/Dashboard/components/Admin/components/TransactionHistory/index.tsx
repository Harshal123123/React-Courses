import ButtonGroup from "./ButtonGroup";
import Card from "../../../../../../components/CardComponent/Card";
import { DASHBOARD_ADMIN } from "../../../../constants";
import { button_group_left, button_group_right } from "./constants";
import ColumnChart from "../../../../../../components/ColumnChartComponent/ColumnChart";
const TransactionHistory: React.FC = () => {
  const dseries = [
    {
      name: "Transactions",
      data: [23, 50, 60, 40, 44, 100],
    },
  ];
  return (
    <>
      <p className="dashboardAdminHeader">
        {DASHBOARD_ADMIN.TRASACTION_HISTORY}
      </p>
      <Card width="dashboardCard p-1 pb-0">
        <div className="flex flex-row justify-between">
          <ButtonGroup buttons={button_group_left} />
          <ButtonGroup buttons={button_group_right} />
        </div>

        <div className="flex flex-grow">
          <ColumnChart
            options={{
              colors: ["#65CCC4"],
              dataLabels: {
                enabled: false,
              },
              chart: {
                type: "bar",

                toolbar: {
                  show: false,
                },
              },
              states: {
                hover: {
                  filter: {
                    type: "darken",
                    value: 1,
                  },
                },
              },
              stroke: {
                show: false,
                width: 0,
                colors: ["transparent"],
              },
              grid: {
                show: true,
                strokeDashArray: 4,
                padding: {
                  left: 0,
                  right: 2,
                  top: -14,
                  bottom: 0,
                },

                xaxis: {
                  lines: {
                    show: true,
                  },
                },
              },

              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "30%",
                  borderRadiusApplication: "end",
                  borderRadius: 8,
                },
              },

              legend: {
                show: true,
                labels: {
                  colors: "rgb(105, 117, 134)",
                },
                position: "top",
              },
              xaxis: {
                categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],

                labels: {
                  style: {
                    fontFamily: "Roboto,sans-serif",
                    cssClass: "font-xs font-semibold ",
                    colors: "#747877",
                  },
                },
                //   categories: axisLabel,
              },
              yaxis: {
                labels: {
                  show: true,
                  align: "center",
                  style: {
                    fontFamily: "Roboto,sans-serif",
                    cssClass: "font-xs font-semibold ",
                    colors: ["#747877"],
                  },
                },
              },
            }}
            series={dseries}
          />
        </div>
      </Card>
    </>
  );
};

export default TransactionHistory;
