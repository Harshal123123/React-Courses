import { DASHBOARD_ADMIN } from "../../../constants";
import Card from "../../../../../components/CardComponent/Card";
import Donut from "../../../../../components/DonutComponent/Donut";
import { searchClientSvg } from "../../../../../assets/svgs/Index";
const StatisticsDetails = () => {
  return (
    <>
      <p className="dashboardAdminHeader title-font mb-1">
        {DASHBOARD_ADMIN.STATISTICS}
      </p>

      <Card width="dashboardCard">
        <div className="flex items-center justify-center p-0">
          <Donut
            series={[791, 904, 436, 797, 585]}
            donut_width="w-full"
            width={200}
            height={620}
            inner_circle_width="50%"
            labels={[
              "Partnership firms",
              "Solo proprietor firms",
              "Trusts",
              "Pvt Ltd Firms",
              "Pvt Ltd Firms ",
            ]}
            display_legend
          />
        </div>
      </Card>
    </>
  );
};

export default StatisticsDetails;
