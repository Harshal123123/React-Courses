import Card from "../../../../../components/CardComponent/Card";
import { DASHBOARD_ADMIN } from "../../../constants";
import { ListViewDashboard } from "../../ListView";
import { dashboardProfileSvg } from "../../../../../assets/svgs/Index";
const SupportRequest = () => {
  return (
    <div>
      <Card width="dashboardCard">
        <div className="flex items-center gap-4">
          <div className="p-1 ">
            <div className="dashboardCardHeader">
              {DASHBOARD_ADMIN.SUPPORT_REQUEST}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-10">
              <ListViewDashboard
                label={"5"}
                value={"Open"}
                labelStyle="title-font dashboardCardList"
              />
              <ListViewDashboard
                label={"4"}
                value={"Resolved"}
                labelStyle="title-font dashboardCardList"
              />
              <ListViewDashboard
                label={"2"}
                value={"Pending"}
                labelStyle="title-font dashboardCardList"
              />
            </div>
          </div>
          <img className="dashboardImage" src={dashboardProfileSvg} alt="" />
        </div>
      </Card>
    </div>
  );
};

export default SupportRequest;
