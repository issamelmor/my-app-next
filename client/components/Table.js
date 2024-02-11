// components/Table.js

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { DebouncedInput } from "./DebouncedInput";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

/**
 * Represents a table component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data for the table.
 * @param {Array} props.columns - The columns configuration for the table.
 * @param {string} props.title - The title of the table.
 * @param {boolean} [props.searchable=true] - Determines if the table is searchable.
 * @param {string} [props.searchPlaceholder="Search"] - The placeholder text for the search input.
 * @param {boolean} [props.isLoading=false] - Determines if the table is in a loading state.
 * @param {string} props.id - The unique identifier of the table.
 * @param {Object} props.showTable - The state object that controls the visibility of the table.
 * @param {function} props.setShowTable - The function to update the state of the table visibility.
 * @returns {JSX.Element} The rendered table component.
 */
export const Table = ({
  data: tableData,
  columns: tableColumns,
  title,
  searchable = true,
  searchPlaceholder = "Search",
  isLoading = false,
  id,
  showTable,
  setShowTable
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const numItems = tableData.length;

  const toggleTable = () => {
    setShowTable((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const rowsPerPage = table.getRowModel().rows.length;

  // Calculate the current range of records being displayed
  const startIndex = useMemo(() => pageIndex * pageSize, [pageIndex, pageSize]);
  const endIndex = useMemo(() => startIndex + (rowsPerPage || 1 - 1), [startIndex, rowsPerPage]);

  return (
    <div>
      <div className={"overflow-hidden sm:-mx-6 lg:-mx-8 w-full "}>
        <div className="align-middle inline-block sm:px-6 lg:px-12 my-5 border border-gray-200 dark:border-orange-500 rounded dark:bg-gray-800">
          <div className={`dark:bg-gray-800 grid grid-cols-4 bg-white px-6 py-4  "}`}>
            <div className="text-left ">
              {title && <h3 className="text-sm py-3 text-gray-600 dark:text-gray-300">{title}</h3>}
            </div>
            <div className="relative inline-block py-3 w-10 align-left select-none transition duration-200 ease-in ">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={showTable[id]}
                  onChange={() => toggleTable(id)}
                  id={`toggle-${id}`}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
              </label>
            </div>
            <div className="">
                <div className="">
                    <DebouncedInput
                      value={globalFilter ?? ""}
                      onChange={(value) => setGlobalFilter(String(value))}
                      placeholder={searchPlaceholder}
                      className="bg-gray-100 rounded dark:bg-gray-300 dark:text-gray-100 tracking-tight text-gray-900 sm:text-1xl sm:leading-10 md:text-1xl md:leading-10 pl-1" // Add this line to set the height to 8 pixels
                    />

                </div>
            </div>
            {table.getPageCount() >= 0 && (
              <div className="dark:text-gray-300 text-xs text-gray-500 flex gap-4 items-center justify-end py-4">
                <span className="flex items-center gap-1">
                  <div>Showing</div>
                  {data.length > 0
                    ? `${startIndex + 1} - ${endIndex} of ${data.length} items`
                    : "0 - 0 of 0 items"}
                </span>
                {(table.getCanPreviousPage() || table.getCanNextPage()) && (
                  <div>
                    <button
                      className={` ${table.getCanPreviousPage() ? "text-blue-500" : "text-black"} `}
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        viewBox="0 0 17 17"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g></g>
                        <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
                      </svg>
                    </button>
                    <button
                      className={`ml-4 ${table.getCanNextPage() ? "text-blue-500" : "text-black"} `}
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        viewBox="0 0 17 17"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g></g>
                        <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {showTable[id] && (
            <div className="overflow-auto w-full ">
              <table className="w-full divide-y divide-[#D4D4D8]">
                <thead className="dark:bg-gray-800 bg-white bg-white divide-y divide-[#D2E1EF] border-t-0">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            key={header.id}
                            colSpan={header.colSpan}
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-large text-gray-500 dark:text-gray-100"
                          >
                            {header.isPlaceholder ? null : (
                              <button
                                {...{
                                  className: header.column.getCanSort()
                                    ? "cursor-pointer select-none"
                                    : "",
                                  onClick: header.column.getToggleSortingHandler()
                                }}
                              >
                                <div className="flex items-center">
                                  <span className="ml-2">
                                    {flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                  </span>

                                  {/* sort icons  */}
                                  {header.column.getCanSort() && (
                                    <div className="flex flex-col ml-3">
                                      {{
                                        asc: (
                                          <svg
                                            className="w-2 h-2 "
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M5 15l7-7 7 7"
                                            ></path>
                                          </svg>
                                        ),
                                        desc: (
                                          <svg
                                            className="w-2 h-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 9l-7 7-7-7"
                                            ></path>
                                          </svg>
                                        )
                                      }[header.column.getIsSorted()] ?? (
                                        <>
                                          {" "}
                                          <svg
                                            className="w-2 h-2 "
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M5 15l7-7 7 7"
                                            ></path>
                                          </svg>
                                          <svg
                                            className="w-2 h-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 9l-7 7-7-7"
                                            ></path>
                                          </svg>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </button>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody className="dark:bg-gray-800 bg-white divide-y divide-[#D2E1EF] dark:divide-gray-900">
                  {/* if isLoading, use skeleton rows  */}
                  {isLoading &&
                    [...Array(5)].map((_, i) => (
                      <tr key={i} className="dark:text-gray-300 hover:bg-gray-100 ">
                        {table.getHeaderGroups()[0].headers.map((header) => {
                          return (
                            <td
                              key={header.id}
                              colSpan={header.colSpan}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              <div className="flex items-center w-full ">
                                <div className="dark:text-gray-300 text-sm text-gray-900 w-full ">
                                  <TdSkeleton />
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  {!isLoading &&
                    table.getRowModel().rows.map((row) => {
                      return (
                        <tr key={row.id} className="hover:bg-gray-100 dark:hover:bg-orange-900">
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td
                                key={cell.id}
                                className="px-6 py-4 whitespace-nowrap dark:text-gray-300 text-sm text-gray-900"
                              >
                                <div className="flex items-center">
                                  <div className="text-sm dark:text-gray-200 text-gray-700">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                  </div>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TdSkeleton = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
    </div>
  );
};
