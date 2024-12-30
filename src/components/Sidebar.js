import "./Sidebar.css"

const Sidebar = ({ currentStep }) => {
     return (
          <div className="side-bar">
               <ul>
                    <li className={currentStep === 1 ? "active-step" : ""}>
                         <span className="step-number">1</span>

                         <div className="step-label">
                              <span>STEP 1 </span>
                              <span>YOUR INFO</span>
                         </div>

                    </li>
                    <li className={currentStep === 2 ? "active-step" : ""}>
                         <span className="step-number">2</span>

                         <div className="step-label">
                              <span>STEP 2 </span>
                              <span>SELECT PLAN</span>
                         </div>

                    </li>
                    <li className={currentStep === 3 ? "active-step" : ""}>
                         <span className="step-number">3</span>

                         <div className="step-label">
                              <span>STEP 3 </span>
                              <span>ADD-ONS</span>
                         </div>

                    </li>
                    <li className={currentStep === 4 ? "active-step" : ""}>
                         <span className="step-number">4</span>

                         <div className="step-label">
                              <span>STEP 4 </span>
                              <span>SUMMARY</span>
                         </div>

                    </li>


               </ul>
          </div>
     );
}

export default Sidebar;