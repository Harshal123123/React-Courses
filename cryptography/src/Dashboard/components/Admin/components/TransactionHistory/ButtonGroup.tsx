// import React from 'react';
// import Card from '../../../../../../components/CardComponent/Card';
// import Button from '../../../../../../components/ButtonComponent/Button';

// interface ButtonGroupProps {
//   buttons: {
//     label: string;
//     width: string;
//     labelStyle: string;
//     border: string;
//     height: string;
//     buttonStyle: string;
//   }[];
// }

// const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
//     // const [activeButton, setActiveButton] = React.useState(buttons{[]});
//   return (
//     <Card border="rounded-full" background='bg-truegrey' padding="p-1">
//       <div className="flex flex-row">
//         {buttons.map((button, index) => (
//           <div key={index}>
//             <Button buttonLabel={button.label} buttonLabelStyle={button.labelStyle} {...button} />
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// };

// export default ButtonGroup;
// ButtonGroup.tsx
import React, { useState } from "react";
import Card from "../../../../../../components/CardComponent/Card";
import Button from "../../../../../../components/ButtonComponent/Button";

interface ButtonConfig {
  label: string;
  width: string;
  labelStyle: string;
  border: string;
  height: string;
  buttonStyle?: string;
  activeButton: boolean;
}

interface ButtonGroupProps {
  buttons: ButtonConfig[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState(
    buttons.find((button) => button.activeButton)?.label || ""
  );

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  return (
    <Card border="rounded-full" background="bg-neutral-700" padding="p-1">
      <div className="flex flex-row gap-2">
        {buttons.map((button, index) => (
          <div key={index}>
            <Button
              buttonLabel={button.label}
              buttonLabelStyle={button.labelStyle}
              {...button}
              handleOnClick={() => handleButtonClick(button.label)}
              buttonStyle={
                activeButton === button.label
                  ? "activeButton"
                  : "inactiveButton"
              }
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ButtonGroup;
