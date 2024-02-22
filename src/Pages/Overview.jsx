import Chart from "../components/Chart";
import InputTransaction from "./InputTransaction";
import { useState } from "react";

const Transactions = () => {
  const [valueChart, setValueChart] = useState(0);
  const [changes, setChanges] = useState(false);

  const handleButtonClick = (clicked) => {
    setChanges(clicked);
  };

  return (
    <div>
      <InputTransaction
        value={valueChart}
        onValueChange={setValueChart}
        onButtonClick={handleButtonClick}
      />
      {changes && <Chart dataValue={valueChart} />}
    </div>
  );
};

export default Transactions;
