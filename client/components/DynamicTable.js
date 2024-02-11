import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Table } from "./Table";
import { createColumnHelper } from "@tanstack/react-table";

export const DynamicTable = ({ apiPath, title, id, showTable, setShowTable }) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_INSIS_API_URL}${apiPath}`;
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [fetchedData, setFetchedData] = useState({});
  const columnHelper = useMemo(() => createColumnHelper(), []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showTable[id]) {
      if (fetchedData[id]) {
        // Use fetched data if it exists
        setData(fetchedData[id].data);
        setColumns(fetchedData[id].columns);
      } else {
        // Fetch data if it doesn't exist
        setIsLoading(true); // Set loading to true before fetching data
        axios.get(apiUrl).then((response) => {
          setData(response.data);

          // Check if data is not empty before creating columns
          if (response.data.length > 0) {
            const newColumns = Object.keys(response.data[0]).map((key) => {
              return columnHelper.accessor(key, {
                header: key
              });
            });

            setColumns(newColumns);

            // Store fetched data and columns
            setFetchedData((prevState) => ({
              ...prevState,
              [id]: { data: response.data, columns: newColumns }
            }));
          } else {
            // If data is empty, set columns to an empty array
            setColumns([columnHelper.accessor("noData", { header: "Message" })]);
            setData([{ noData: "No data found" }]);
          }
          setIsLoading(false); // Set loading to false after fetching data
        });
      }
    } else {
      // Clear data and columns when showTable is false
      setData([]);
      setColumns([]);
    }
  }, [showTable, id, apiUrl, columnHelper, fetchedData]);

  return (
    <div className="">
      <Table
        data={data}
        columns={columns}
        title={title}
        showTable={showTable}
        setShowTable={setShowTable}
        id={id}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DynamicTable;
