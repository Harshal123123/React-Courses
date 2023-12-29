import Card from "../../../../../components/CardComponent/Card";
import { DASHBOARD_ADMIN } from "../../../constants";
import { dashboardProfileSvg } from "../../../../../assets/svgs/Index";
const NewAcquisition = () => {
  return (
    <Card width="dashboardCard">
      <div className="flex items-center gap-4">
        <div className=" p-1 ">
          <div className="dashboardCardHeader">
            {DASHBOARD_ADMIN.NEW_ACQUISITION}
          </div>
          <div className="mt-2 title-font dashboardCardHeaderValue">80</div>
        </div>
        <img className="dashboardImage" src={dashboardProfileSvg} alt="" />
      </div>
    </Card>
  );
};

export default NewAcquisition;
