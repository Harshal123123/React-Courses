import Card from "../../../../../components/CardComponent/Card";
import { DASHBOARD_ADMIN } from "../../../constants";
import Donut from "../../../../../components/DonutComponent/Donut";
interface InfoDetailsProps {
  card_header: string;
  label: string | number;
  label_trx: string | number;
  first_value: string | number;
  second_value: string | number;
  trx_firstvalue: string | number;
  trx_secondvalue: string | number;
  colours?: string[];
  stroke_color?: string[];
  donut_label?: string[];
}
const InfoDetails = ({
  card_header,
  label,
  label_trx,
  first_value,
  second_value,
  trx_firstvalue,
  trx_secondvalue,
  colours,
  stroke_color,
  donut_label,
}: InfoDetailsProps) => {
  return (
    <div>
      <p className="dashboardAdminHeader title-font mb-1">{card_header}</p>
      <Card width="dashboardCard w-full" padding="p-4 pr-0">
        <div className="flex flex-row gap-5">
          <div className=" flex flex-col">
            <div className="dashboardCardPie">{label}</div>
            <div className=" title-font  font-semibold">
              <span className="text-sm font-semibold text-black">
                {first_value}
              </span>{" "}
              /{" "}
              <span className="body-font text-neutral-400 font-semibold text-xs">
                {second_value}
              </span>
            </div>
          </div>
          <div className="ml-auto w-20">
            <Donut
              series={[50, 90]}
              colours={colours}
              stroke_color={stroke_color}
              labels={["Filled", "Consumed"]}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2 ">
          <div className=" ">
            <div className="dashboardCardPie">{label_trx}</div>
            <div className=" title-font  font-semibold">
              <span className="text-sm font-semibold text-black">
                {trx_firstvalue}
              </span>{" "}
              /{" "}
              <span className="body-font text-neutral-400 font-semibold text-xs">
                {trx_secondvalue}
              </span>
            </div>
          </div>
          <div className="ml-auto w-20">
            <Donut
              series={[50, 90]}
              colours={colours}
              stroke_color={stroke_color}
              labels={["Filled", "Consumed"]}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoDetails;
