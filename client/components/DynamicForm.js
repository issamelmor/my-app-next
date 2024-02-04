// components/DynamicForm.js

import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const DynamicForm = ({ fields, buttonText, apiPath, title }) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_INSIS_API_URL}${apiPath}`;
  const [formValues, setFormValues] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleInputChange = (event) => {
    let { name, value, type } = event.target;
    if (type === "date") {
      // Convert date from 'yyyy-MM-dd' to 'dd-MM-yyyy'
      value = value.split("-").reverse().join("-");
    }
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(apiUrl, formValues);
      setApiResponse(response.data);
    } catch (error) {
      console.error(error);
    }
    setButtonPressed(true);
  };

  const Button = (
    <button
      type="submit"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleSubmit}
    >
      {buttonText}
    </button>
  );

  const updatedFields = fields.map((field) => ({
    ...field,
    className: `mt-1 block w-full border border-gray-300 dark:bg-gray-500 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
    onChange: handleInputChange
  }));

  return (
    <div className="">
      <Form
        fields={updatedFields}
        Button={Button}
        apiResponse={apiResponse}
        title={title}
        buttonPressed={buttonPressed}
      />
    </div>
  );
};

export default DynamicForm;
