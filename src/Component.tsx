import { FC, memo, useCallback } from "react";
import ShippingForm from "./ShippingForm";

interface OwnProps {
  count: number;
  count2: number;
}

type Props = OwnProps;

const Component: FC<Props> = ({ count, count2 }) => {
  const handleSubmit = useCallback(() => {
    console.log(`function inside the useCallback. Count is: ${count}`);
  }, [count]);

// const handleSubmit = () => {
//     console.log(`function inside the useCallback. Count is: ${count}`);
//   };

  return (
    <>  
        {count2}
        <ShippingForm handleSubmit={handleSubmit} />
    </>
  );
};

export default memo(Component);
