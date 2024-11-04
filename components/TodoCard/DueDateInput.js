import { useState, useEffect } from "react";

function DueDateInput({ onDateChange, reset, onErrorChange }) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  // Regex to match DD/MM/YYYY format
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

  const handleChange = (e) => {
    const input = e.target.value;

    // Update the date value only if input matches DD/MM/YYYY pattern
    if (input.length <= 10) {
      setDate(input);
    }
  };

  const handleBlur = () => {
    onDateChange("");
    // Check if the input matches the DD/MM/YYYY format
    if (!dateRegex.test(date)) {
      setError("Please enter a valid date in DD/MM/YYYY format.");
      onErrorChange(true); // Notify parent of error
      return;
    }

    // Parse the date parts
    const [day, month, year] = date.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);

    // Check if date is within valid range
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upperLimit = new Date(2099, 11, 31); // 31/12/2099

    if (inputDate < today || inputDate > upperLimit) {
      setError("Date must be today or later and before 31/12/2099.");
      onErrorChange(true); // Notify parent of error
      return;
    } else {
      setError(""); // Clear error if date is valid
      onErrorChange(false); // Notify parent of error
      onDateChange(date);
    }
  };

  // Reset the input when the reset prop changes
  useEffect(() => {
    if (reset) {
      setDate(""); // Clear date input
      setError(""); // Clear any error message
      onDateChange(""); // Notify parent of reset value
      onErrorChange(false); // Reset error status in parent
    }
  }, [reset, onDateChange, onErrorChange]);

  return (
    <>
      <input
        type="text"
        value={date}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Set a due date (DD/MM/YYYY)"
        className="w-full"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default DueDateInput;
