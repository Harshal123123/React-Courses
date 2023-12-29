import { DASHBOARD_MAKER } from "../../constants";
import PendingApproval from "./components/PendingApproval";
import ClientRequest from "./components/ClientRequest";
import PendingApprovalTable from "./components/PendingApproval/PendingApproval";
import SupportRequest from "./components/SupportRequest";
import Card from "../../../../components/CardComponent/Card";
import SupportStatus from "./components/SupportStatus";
import LinkHeader from "../../../../components/Layout/LinkHeader";
const Maker = () => {
  return (
    <div>
      <LinkHeader
        heading={DASHBOARD_MAKER.DASHBOARD_HEADING}
        subHeading={DASHBOARD_MAKER.DASHBOARD_SUBHEADING}
      />
      <section className=" ml-5 mt-2 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1  gap-6">
        <PendingApproval />
        <ClientRequest />
      </section>
      <div className="grid grid-cols-6 gap-4 mt-4 m-5">
        <div className="col-start-1 col-end-7 ...">
          <PendingApprovalTable />
        </div>
        <div className="col-start-1 col-end-5 ...">
          {" "}
          <SupportRequest />
        </div>
        <div className="col-end-7 col-span-2 ...">
          <SupportStatus />
        </div>
      </div>
    </div>
  );
};

export default Maker;
