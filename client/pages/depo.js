import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";

export default function DEPO() {
  const [showTable, setShowTable] = useState({});

  return (
    <div className="flex flex-col items-center sm:w-full">
      <DynamicTable
        apiPath="/depo/waitforprocessing"
        title="Policies with premiums stuck on 'wait for processing'"
        id="waitforprocess"
        showTable={showTable}
        setShowTable={setShowTable}
      />
    </div>
  );
}
