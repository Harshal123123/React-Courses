import Card from "../../../../../../components/CardComponent/Card";
import { DASHBOARD_MAKER } from "../../../../constants";
import { dashboardProfileSvg } from "../../../../../../assets/svgs/Index";
const PendingApproval = () => {
  return (
    <Card width="dashboardCard">
      <div className="flex items-center gap-4 p-2 pb-0  pt-0">
        <div className=" p-1 ">
          <div className="dashboardCardHeader">
            {DASHBOARD_MAKER.PENDING_APPROVAL}
          </div>
          <div className="mt-2 title-font  dashboardCardHeaderValue">80</div>
        </div>
        <img className="dashboardImage" src={dashboardProfileSvg} alt="" />
      </div>
    </Card>
  );
};

export default PendingApproval;
