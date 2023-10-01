import { FC, memo } from "react";

interface OwnProps {
  handleSubmit: (event: React.MouseEvent) => void
}

type Props = OwnProps;

const ShippingForm: FC<Props> = ({ handleSubmit}) => {
  console.log("render ShippingForm");

  return (
    <>
      <div>Shipping form:</div>
      <button onClick={handleSubmit}>Handle Submit</button>
    </>
  );
};

export default memo(ShippingForm);
