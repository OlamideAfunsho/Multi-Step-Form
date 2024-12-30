import React, { useState } from "react";
import "./Step4.css";
import thankYou from "./images/icon-thank-you.svg";

const Step4 = ({ goToPreviousStep, formData, setCurrentStep }) => {
  const [isConfirmed, setIsConfirmed] = useState(false); // Track confirmation state

  const handlePlanChange = () => {
    setCurrentStep(2); // Navigate back to Step 2
  };

  const handleConfirm = () => {
    setIsConfirmed(true); // Set confirmation state to true
  };

  const { selectedPlan, billingType, selectedAddOns } = formData;
  const isMonthly = billingType === "monthly";

  // Pricing for plans
  const planPrices = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  // Add-ons pricing
  const addOnsDetails = [
    { name: "Online service", price: { monthly: 1, yearly: 10 } },
    { name: "Larger storage", price: { monthly: 2, yearly: 20 } },
    { name: "Customizable profile", price: { monthly: 2, yearly: 20 } },
  ];

  // Calculate total price
  const planPrice = isMonthly
    ? planPrices[selectedPlan].monthly
    : planPrices[selectedPlan].yearly;
  const addOnsPrice = selectedAddOns.reduce((total, addOnName) => {
    const addOn = addOnsDetails.find((addOn) => addOn.name === addOnName);
    return total + (isMonthly ? addOn.price.monthly : addOn.price.yearly);
  }, 0);
  const totalPrice = planPrice + addOnsPrice;

  if (isConfirmed) {
    // Render the Thank You message after confirmation
    return (
      <div className="thank-you-message">
          <img src={thankYou} alt="checkmark logo" />
        <h2>Thank you!</h2>
        <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    );
  }

  return (
    <div className="step4-container">
      <h2 className="header">Finishing up</h2>
      <p className="desc">Double-check everything looks OK before confirming.</p>

      <div className="summary-container">
          {/* Selected Plan Summary */}
      <div className="plan-summary">
        <div>
          <h3>
            {`${selectedPlan} (${isMonthly ? "Monthly" : "Yearly"})`}
          </h3>
          <p className="plan-summary-price">
          ${isMonthly ? `${planPrice}/mo` : `${planPrice}/yr`}
        </p>
          <button className="change-button" onClick={handlePlanChange}>
            Change
          </button>
        </div>
        
      </div>

      <hr />

      {/* Add-ons Summary */}
      <div className="addons-summary">
        {selectedAddOns.length > 0 ? (
          selectedAddOns.map((addOnName) => {
            const addOn = addOnsDetails.find((item) => item.name === addOnName);
            return (
              <div key={addOnName} className="add-on-item">
                <p className="add-on-name">{addOnName}</p>
                <p className="add-on-price">
                  +${isMonthly ? `${addOn.price.monthly}/mo` : `${addOn.price.yearly}/yr`}
                </p>
              </div>
            );
          })
        ) : (
          <p className="no-addons">No add-ons selected.</p>
        )}
      </div>
      </div>

     

      {/* Total Price */}
      <div className="total-summary">
        <p className="total">Total (per {isMonthly ? "month" : "year"})</p>
        <p className="total-price">
          ${isMonthly ? `${totalPrice}/mo` : `${totalPrice}/yr`}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button className="back-button" onClick={goToPreviousStep}>
          Go Back
        </button>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
