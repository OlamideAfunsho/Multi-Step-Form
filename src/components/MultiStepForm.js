import { useState } from "react";
import "./MultiStepForm.css";
import Sidebar from "./Sidebar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  billingType: "monthly", // Default to monthly billing
  selectedPlan: "Arcade",
  selectedAddOns: [], // Initialize as an empty array
});

  const goToNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="form-container">
      <Sidebar currentStep={currentStep} />

      <div className="form-content">
        {currentStep === 1 && (
          <Step1
            goToNextStep={goToNextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && (
          <Step2
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 3 && (
          <Step3
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 4 && (
          <Step4
            goToPreviousStep={goToPreviousStep}
            formData={formData}
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
