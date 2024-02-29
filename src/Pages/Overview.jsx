import Chart from "../components/Chart";
import InputTransaction from "./InputTransaction";
import { useEffect, useState } from "react";
import { salesCollection } from "../../firebase";
import { getDocs, setDoc } from "firebase/firestore";

const Transactions = () => {
  const [amounts, setAmounts] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmitInput = async (input) => {
    await setDoc(salesCollection, {
      amount: input,
      created_at: new Date(),
    });
  };

  useEffect(() => {
    (async () => {
      const _amounts = [];
      const docs = await getDocs(salesCollection);
      docs.forEach((snapshot) => {
        _amounts.push(snapshot.data().amount);
      });

      setAmounts(_amounts);
    })();
  }, []);

  return (
    <div>
      <InputTransaction value={input} onValueChange={setInput} />
      <Chart dataValues={amounts} />
    </div>
  );
};

export default Transactions;
