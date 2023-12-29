import Label from "../../../components/FormInputs/Label";

interface CorpInfoProps {
  label: string | number;
  value?: string | number;
  labelStyle?:string;

}

export const ListViewDashboard: React.FC<CorpInfoProps> = ({
  label,
  value,
  labelStyle="cardDataHeader"
}) => {
  return (
    <div className="flex flex-col items-center">
        <Label label={label} labelStyle={labelStyle} />
        {value === undefined ? null : (
        <Label label={value ? value : "NA"} labelStyle="body-font text-neutral-500 text-xs" />)}
    </div>
  );
};
