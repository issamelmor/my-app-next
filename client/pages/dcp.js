import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";
import textData from "../data/content.json";
import DynamicForm from "../components/DynamicForm";

export default function DCP() {
  const [showTable, setShowTable] = useState({});
  const fields = textData.dcp.maxContributionChecker.fields;

  return (
    <div className="">
      <DynamicForm
        apiPath="/dcp/maxcontributioncheck"
        title="Annual maximum contribution checker (12k)"
        fields={fields}
        buttonText="Check"
      />
      <DynamicTable
        apiPath="/dcp/ssn/missing"
        title="Policy holder has no SSN"
        id="ssnMissing"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/ssn/invalid"
        title="Policy holder has invalid SSN"
        id="ssnInvalid"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/maicharges/missing"
        title="DCP 1 premiums without maintenance charges"
        id="maiChargesMissing"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/grcid/missing"
        title="Policies where GRC ID is null, annex would break the policy"
        id="grcidisnull"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/iban/missing"
        title="Policies with regular premium that don't have an IBAN in INSIS"
        id="noiban"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/waitforprocessing"
        title="Policies with premiums stuck on 'wait for processing'"
        id="waitforprocess"
        showTable={showTable}
        setShowTable={setShowTable}
      />
      <DynamicTable
        apiPath="/dcp/unboundannex"
        title="Policies with an unbound annex that is older than a week'"
        id="unboundannex"
        showTable={showTable}
        setShowTable={setShowTable}
      />
    </div>
  );
}
