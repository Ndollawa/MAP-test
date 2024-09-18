import React, { useState } from "react";
import RequestForm from "./RequestForm";
import TermsForm from "./TermsForm";
import ReviewForm from "./ReviewForm";
import { Breadcrumb } from "flowbite-react";
import Steps from "./Steps";
// import Breadcrumb from "../../../components/Breadcrum";

const RequestQuote = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({}); 
  
    const handleNext = (stepData:any) => {
      setFormData((prev) => ({ ...prev, ...stepData }));
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
  
    const handleSubmit = (finalData:any) => {
      console.log("Submitted Data:", finalData);
      // handle final submission
    };
  
    return (
      <div>
         {/* <Breadcrumb links={[{path:"/quotes",name:"Quotes"},{path:"/quotes/response/:id",name:"Quote Response"}]}/> */}
         <div className="mb-4">
      <Breadcrumb aria-label="Solid background breadcrumb example" className="">
      <Breadcrumb.Item href="#" className="text-blue-700">
        Quotes
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/quotes/response/:id">Quote Response</Breadcrumb.Item>
    </Breadcrumb>
</div>
         <div className="border border-gray-200 p-6 rounded-lg mb-8">
   <ul className="relative flex flex-row gap-x-2">
<Steps stepId={1} currentStep={currentStep} heading="Request Information" subHeading="Provide details about the RFQ" />
<Steps stepId={2} currentStep={currentStep} heading="Terms and Attachments" subHeading="Payment and delivery terms" />
<Steps stepId={3} currentStep={currentStep} heading="Review" subHeading="Confirm all information provided" />
</ul>
</div>

        {currentStep === 1 && <RequestForm onNext={handleNext} />}
        {currentStep === 2 && <TermsForm onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 3 && <ReviewForm data={formData} onPrev={handlePrev} onSubmit={handleSubmit} />}
      
      </div>
    );
}

export default RequestQuote