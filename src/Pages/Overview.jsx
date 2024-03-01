import Chart from "../components/Chart";
import InputTransaction from "./InputTransaction";
import { useCallback, useEffect, useState } from "react";
import { salesCollection, db } from "../../firebase";
import { getDocs, doc, setDoc } from "firebase/firestore";

const Transactions = () => {
  const [dataSet, setDataset] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = useCallback(async () => {
    const _dataSet = [];
    const docs = await getDocs(salesCollection);
    docs.forEach((snapshot) => {
      _dataSet.push({ ...snapshot.data(), id: snapshot.id });
    });

    setDataset(_dataSet);
  }, []);

  const handleSubmit = async (input) => {
    setIsSubmitting(true);
    try {
      const date = new Date();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();

      await setDoc(doc(db, "sales", `${month}-${year}`), {
        amount: input,
        created_at: new Date(),
      });
      await fetchData();
    } catch (error) {
      alert("An error occoured");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <InputTransaction
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Chart dataValues={dataSet} />
    </div>
  );
};

export default Transactions;
