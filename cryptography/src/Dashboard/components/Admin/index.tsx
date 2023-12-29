import { DASHBOARD_ADMIN } from "../../constants";
import StatisticsDetails from "./components/StatisticsDetails";
import Button from "../../../../components/ButtonComponent/Button";
import Card from "../../../../components/CardComponent/Card";
import InfoDetails from "./components/InfoDetails";
import NewAcquisition from "./components/NewAcquisition";
import SupportRequest from "./components/SupportRequest";
import PendingApproval from "./components/PendingApproval";
import ButtonGroup from "./components/TransactionHistory/ButtonGroup";
import TransactionHistory from "./components/TransactionHistory";
import LinkHeader from "../../../../components/Layout/LinkHeader";
const Admin = () => {
  return (
    <div>
      <LinkHeader
        heading={DASHBOARD_ADMIN.DASHBOARD_HEADING}
        subHeading={DASHBOARD_ADMIN.DASHBOARD_SUBHEADING}
      />
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="w-[98%] h-[80vh] bg-backgroundTheme5 opacity-100">
          <section className="mx-5 mt-2 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1  gap-4">
            <NewAcquisition />
            <SupportRequest />
            <PendingApproval />
          </section>

          {/* <div className="grid grid-rows-3 grid-flow-col gap-4 m-5 ">
        <div className="col-span-1 flex flex-wrap"> */}
          {/* flex flex-wrap gap-4 m-5 */}
          <div className="flex flex-wrap gap-4 mt-2 ml-5 ">
            <div className="w-3/4 flex flex-col gap-y-2 ">
              <div className="flex flex-row justify-between">
                <InfoDetails
                  card_header={DASHBOARD_ADMIN.IMPS_LIMIT}
                  label={DASHBOARD_ADMIN.IMPS_LIMIT_DAY}
                  label_trx={DASHBOARD_ADMIN.IMPS_LIMIT_DAY_TRX}
                  first_value={"50 Lac"}
                  second_value={"90 Lac"}
                  trx_firstvalue={"28K"}
                  trx_secondvalue={"40K"}
                  colours={["#fff", "#65CCB2"]}
                  stroke_color={["#65CCB2"]}
                />

                <InfoDetails
                  card_header={DASHBOARD_ADMIN.NEFT_LIMIT}
                  label={DASHBOARD_ADMIN.NEFT_LIMIT_DAY}
                  label_trx={DASHBOARD_ADMIN.NEFT_LIMIT_DAY_TRX}
                  first_value={"30 Lac"}
                  second_value={"90 Lac"}
                  trx_firstvalue={"18K"}
                  trx_secondvalue={"40K"}
                  colours={["#fff", "#334155"]}
                  stroke_color={["#334155"]}
                />

                <InfoDetails
                  card_header={DASHBOARD_ADMIN.RTGS_LIMIT}
                  label={DASHBOARD_ADMIN.RTGS_LIMIT_DAY}
                  label_trx={DASHBOARD_ADMIN.RTGS_LIMIT_DAY_TRX}
                  first_value={"30 Lac"}
                  second_value={"90 Lac"}
                  trx_firstvalue={"18K"}
                  trx_secondvalue={"40K"}
                  colours={["#fff", "#0e7490"]}
                  stroke_color={["#0e7490"]}
                />

                <InfoDetails
                  card_header={DASHBOARD_ADMIN.IBT_LIMIT}
                  label={DASHBOARD_ADMIN.IBT_LIMIT_DAY}
                  label_trx={DASHBOARD_ADMIN.IBT_LIMIT_DAY_TRX}
                  first_value={"30 Lac"}
                  second_value={"90 Lac"}
                  trx_firstvalue={"18K"}
                  trx_secondvalue={"40K"}
                  colours={["#fff", "#f97316"]}
                  stroke_color={["#f97316"]}
                />
              </div>
              {/* </div>
        <div className="row-span-2  "> */}

              <TransactionHistory />
            </div>
            {/* <Card border="rounded-full" width="bg-truegrey" padding="p-1">
                  <div className="flex  flex-row " >
                    <div>
                      <Button
                        width="w-16"
                        buttonLabelStyle="text-white font-bold  tracking-wide text-xs body-font"
                        border="rounded-full"
                        buttonLabel="NEFT"
                        height="h-7"
                        buttonStyle="hover:bg-success"
                      />
                    </div>
                    <div>
                      <Button
                        width="w-16"
                        buttonLabelStyle="text-white font-bold  tracking-wide text-xs body-font"
                        border="rounded-full"
                        buttonLabel="RTGS"
                        height="h-7"
                        buttonStyle="hover:bg-success"
                      />
                    </div>
                    <div>
                      <Button
                        width="w-16"
                        buttonLabelStyle="text-white font-bold  tracking-wide text-xs body-font"
                        border="rounded-full"
                        buttonLabel="IMPS"
                        height="h-7"
                        buttonStyle="hover:bg-success"
                      />
                    </div>
                  </div>
                </Card> */}
            {/* </div> */}
            <div className="">
              <StatisticsDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
