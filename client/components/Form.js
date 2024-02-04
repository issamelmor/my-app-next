// components/Form.js

import React from "react";

const Form = ({ fields, Button, apiResponse, title, buttonPressed }) => {
  return (
    <div>
      <div className={"overflow-hidden sm:-mx-6 lg:-mx-8 max-w-5xl w-full"}>
        <div className="align-middle inline-block sm:px-6 lg:px-12 my-5 border border-gray-200 dark:border-orange-500 rounded dark:bg-gray-800">
          <div className={`dark:bg-gray-800 grid grid-cols-2 bg-white px-6 py-4 "`}>
            {
              <form className="p-6 grid grid-cols-2 gap-4">
                <h3 className="text-sm col-span-2 text-gray-600 dark:text-gray-300">{title}</h3>
                {fields.map((field) => (
                  <div key={field.id} className="mb-4">
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      className={field.className}
                      onChange={field.onChange}
                    />
                  </div>
                ))}
                {Button}
              </form>
            }
            {buttonPressed &&
              (apiResponse && apiResponse.DETAILS.length > 0 ? (
                <div className="mt-5">
                  <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
                    Total Amount: {apiResponse.TOTAL_AMOUNT}
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        {Object.keys(apiResponse.DETAILS[0]).map((key, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {apiResponse.DETAILS.map((detail, index) => (
                        <tr key={index}>
                          {Object.values(detail).map((value, i) => (
                            <td key={i} className="px-6 whitespace-nowrap dark:text-gray-200">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mt-5 text-lg font-semibold dark:text-gray-200">No data found</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
