import "./Step2.css";
import arcadeImage from "./images/icon-arcade.svg";
import advancedImage from "./images/icon-advanced.svg";
import proImage from "./images/icon-pro.svg";

const Step2 = ({ goToNextStep, goToPreviousStep, formData, setFormData }) => {
  const handlePlanSelect = (plan) => {
    setFormData({ ...formData, selectedPlan: plan });
  };

  const handleBillingToggle = () => {
    const newBillingType = formData.billingType === "monthly" ? "yearly" : "monthly";
    setFormData({ ...formData, billingType: newBillingType });
  };

  return (
    <div className="step2-container">
      <h2 className="header">Select your plan</h2>
      <p className="desc">You have the option of monthly or yearly billing.</p>
      <div className="container">
        <div
          className={`column ${formData.selectedPlan === "Arcade" ? "active" : ""}`}
          onClick={() => handlePlanSelect("Arcade")}
        >
          <img src={arcadeImage} alt="Arcade Icon" />
          <div>
          <h4 className="column-header">Arcade</h4>
          <span className="column-price">
            {formData.billingType === "monthly" ? "$9/mo" : "$90/yr"}
          </span>
          </div>
          {formData.billingType === "yearly" && (
    <p className="free-text">2 months free</p>
)}

          
        </div>

        <div
          className={`column ${formData.selectedPlan === "Advanced" ? "active" : ""}`}
          onClick={() => handlePlanSelect("Advanced")}
        >
          <img src={advancedImage} alt="Advanced Icon" />
          <div>
          <h4 className="column-header">Advanced</h4>
          <span className="column-price">
            {formData.billingType === "monthly" ? "$12/mo" : "$120/yr"}
          </span>

     
</div>
{formData.billingType === "yearly" && (
    <p className="free-text">2 months free</p>
)}
        </div>

        <div
          className={`column ${formData.selectedPlan === "Pro" ? "active" : ""}`}
          onClick={() => handlePlanSelect("Pro")}
        >
          <img src={proImage} alt="Pro Icon" />
          <div>
          <h4 className="column-header">Pro</h4>
          <span className="column-price">
            {formData.billingType === "monthly" ? "$15/mo" : "$150/yr"}
          </span>

     
</div>

{formData.billingType === "yearly" && (
    <p className="free-text">2 months free</p>
)}
        </div>
        
      </div>

      <div className="toggle">
    <span className={formData.billingType === "monthly" ? "active" : ""}>
        Monthly
    </span>
    <div className="toggle-switch" onClick={handleBillingToggle}>
        <div
            className={`toggle-circle ${
                formData.billingType === "yearly" ? "yearly" : ""
            }`}
        ></div>
    </div>
    <span className={formData.billingType === "yearly" ? "active" : ""}>
        Yearly
    </span>
</div>


      <button type="button" onClick={goToPreviousStep} className="back-button">
        Go Back
      </button>
      <button type="button" onClick={goToNextStep} className="next-button-2">
        Next Step
      </button>
    </div>
  );
};

export default Step2;
