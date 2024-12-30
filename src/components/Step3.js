import "./Step3.css";

const Step3 = ({ goToPreviousStep, goToNextStep, formData, setFormData }) => {
  const selectedAddOns = formData.selectedAddOns || [];
  const { billingType } = formData;

  const handleAddOnToggle = (addOn) => {
    setFormData((prev) => {
      const isSelected = selectedAddOns.includes(addOn);
      const updatedAddOns = isSelected
        ? selectedAddOns.filter((item) => item !== addOn)
        : [...selectedAddOns, addOn];
      return { ...prev, selectedAddOns: updatedAddOns };
    });
  };

  const addOns = [
    { name: "Online service", description: "Access to multiplayer games", price: { monthly: 1, yearly: 10 } },
    { name: "Larger storage", description: "Extra 1TB cloud save", price: { monthly: 2, yearly: 20 } },
    { name: "Customizable profile", description: "Custom theme on your profile", price: { monthly: 2, yearly: 20 } },
  ];

  return (
    <div className="step3-container">
      <h2 className="header">Pick add-ons</h2>
      <p className="desc">Add-ons help to enhance your gaming experience.</p>

      <div className="checkbox-container">
        {addOns.map((addOn) => (
          <div
            key={addOn.name}
            className={`cbox-col ${selectedAddOns.includes(addOn.name) ? "active" : ""}`}
            onClick={() => handleAddOnToggle(addOn.name)}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedAddOns.includes(addOn.name)}
              onChange={() => handleAddOnToggle(addOn.name)}
            />
            <div className="service">
              <h4>{addOn.name}</h4>
              <p>{addOn.description}</p>
            </div>
            <span className="price">
              +${billingType === "monthly" ? `${addOn.price.monthly}/mo`
                  : `${addOn.price.yearly}/yr`}
            </span>
          </div>
        ))}
      </div>

      <button type="button" onClick={goToPreviousStep} className="back-button btn-3">
        Go Back
      </button>
      <button type="button" onClick={goToNextStep} className="next-button-3">
        Next Step
      </button>
    </div>
  );
};

export default Step3;
