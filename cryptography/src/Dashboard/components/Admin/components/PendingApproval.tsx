import Card from "../../../../../components/CardComponent/Card";
import { DASHBOARD_ADMIN } from "../../../constants";
import { dashboardProfileSvg } from "../../../../../assets/svgs/Index";
const PendingApproval = () => {
  return (
    <Card width="dashboardCard">
      <div className="flex items-center gap-4">
        <div className=" p-1 ">
          <div className="dashboardCardHeader">
            {DASHBOARD_ADMIN.PENDING_APPROVAL}
          </div>
          <div className="mt-2 title-font  dashboardCardHeaderValue">30/80</div>
        </div>
        <img className="dashboardImage" src={dashboardProfileSvg} alt="" />
      </div>
    </Card>
  );
};

export default PendingApproval;
