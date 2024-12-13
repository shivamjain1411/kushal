import React, { useState } from "react";

function DynamicForm() {
  const generateRandomData = () => {
    const emails = [
      "john.doe@example.com",
      "jane.smith@company.org",
      "mike.johnson@startup.net",
      "sarah.williams@tech.com",
      "alex.brown@innovation.io",
    ];

    const names = [
      "John Doe",
      "Jane Smith",
      "Mike Johnson",
      "Sarah Williams",
      "Alex Brown",
    ];

    return {
      name: names[Math.floor(Math.random() * names.length)],
      email: emails[Math.floor(Math.random() * emails.length)],
      phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      age: Math.floor(Math.random() * 50) + 20,
      city: ["New York", "San Francisco", "Chicago", "Boston", "Seattle"][
        Math.floor(Math.random() * 5)
      ],
    };
  };
  const [formFields, setFormFields] = useState(
    Array(10)
      .fill(null)
      .map(() => generateRandomData())
  );
  const [errors, setErrors] = useState(Array(10).fill({}));

  const validateField = (value, type) => {
    switch (type) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(value);
      case "age":
        return !isNaN(value) && value > 0 && value < 100;
      default:
        return value.trim() !== "";
    }
  };

  const handleReset = () => {
    setFormFields(
      Array(10)
        .fill(null)
        .map(() => generateRandomData())
    );
    setErrors(Array(10).fill({}));
  };

  const handleCancel = () => {
    handleReset();
  };

  const handleChange = (index, field, value) => {
    const newFields = [...formFields];
    newFields[index] = { ...newFields[index], [field]: value };
    setFormFields(newFields);

    // Validate field
    const newErrors = [...errors];
    newErrors[index] = {
      ...newErrors[index],
      [field]: !validateField(value, field),
    };
    setErrors(newErrors);
  };

  const isFormValid = () => {
    return errors.every((rowErrors) =>
      Object.values(rowErrors).every((error) => error === false)
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Dynamic Form</h2>
          {formFields.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 mb-4 p-4 border rounded"
            >
              {Object.keys(row).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="mb-2 text-sm font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "age" ? "number" : "text"}
                    value={row[field]}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                    className={`p-2 border rounded ${
                      errors[index][field]
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    required={field === "email"}
                  />
                  {errors[index][field] && (
                    <span className="text-red-500 text-xs mt-1">
                      Invalid {field}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reset
            </button>
            <button
              disabled={!isFormValid()}
              className={`px-4 py-2 rounded ${
                isFormValid()
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicForm;
