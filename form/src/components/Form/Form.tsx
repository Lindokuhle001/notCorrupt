import React, { useState } from "react";
import "./Form.css";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFormValues: FormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const MyForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formValues);
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
