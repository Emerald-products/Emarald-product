import Chart from "../components/Chart";
import InputTransaction from "./InputTransaction";
import { useState } from "react";

const Transactions = () => {
  const [valueChart, setValueChart] = useState(0);

  return (
    <div>
      <InputTransaction value={valueChart} onValueChange={setValueChart} />
      <Chart dataValue={valueChart} />
    </div>
  );
};

export default Transactions;
