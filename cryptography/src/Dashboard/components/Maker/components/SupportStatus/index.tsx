import Card from "../../../../../../components/CardComponent/Card";
import { DASHBOARD_MAKER } from "../../../../constants";
import Donut from "../../../../../../components/DonutComponent/Donut";
import "./style.css";
const SupportStatus = () => {
  return (
    <Card width="dashboardCard p-0 h-full">
      <div>
        <p className="dashboardMakerHeader title-font mb-1 uppercase">
          {DASHBOARD_MAKER.SUPPORT_STATUS}
        </p>
      </div>
      <div className="flex items-center justify-center p-0 ">
        <Donut
          series={[791, 904, 436]}
          position_legend="right"
          donut_width="w-full"
          donutStyle="maker-container"
          colours={["#FF7723", "#E1463C", "#B4F8F3"]}
          width={400}
          height={300}
          inner_circle_width="50%"
          labels={[
            "Open Support Request",
            "Pending Support Request",
            "Resolved Support Request",
          ]}
          display_legend
        />
      </div>
    </Card>
  );
};

export default SupportStatus;
