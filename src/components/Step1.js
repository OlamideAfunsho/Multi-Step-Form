import "./Step1.css";
import { useState } from "react";

const Step1 = ({ goToNextStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message for the field when the user starts typing
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate name: only letters
    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "This field is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Invalid name";
    }

    // Validate email: only Gmail format
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "This field is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate number: must match specific formats
    if (!formData.number || formData.number.trim() === "") {
      newErrors.number = "This field is required";
    } else if (!/^(\+234\s\d{10}|0\d{10})$/.test(formData.number)) {
      newErrors.number = "Invalid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors means valid
  };

  const handleNextStep = () => {
    if (validateFields()) {
      goToNextStep();
    }
  };

  return (
    <div className="con">
      <h2 className="header">Personal info</h2>
      <p className="desc">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <br />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          value={formData.name}
          onChange={handleInputChange}
          className={errors.name ? "error-input" : ""}
        />

        {/* Email Field */}
        <label htmlFor="email">Email Address</label>
        <br />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? "error-input" : ""}
        />

        {/* Phone Number Field */}
        <label htmlFor="number">Phone Number</label>
        <br />
        {errors.number && <p className="error-message">{errors.number}</p>}
        <input
          type="text"
          id="number"
          name="number"
          placeholder="e.g. +234 9165906396"
          value={formData.number}
          onChange={handleInputChange}
          className={errors.number ? "error-input" : ""}
        />

        {/* Next Step Button */}
        <button type="button" onClick={handleNextStep} className="next-button">
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
