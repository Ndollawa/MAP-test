import React from 'react'


interface StepIProps {
    stepId: number;
    currentStep: number;
    heading: string;
    subHeading: string;
    step?: StepIProps;
  
}

const Steps = ({heading,subHeading,currentStep, stepId}:StepIProps) => {
  return (
    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
    <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle  gap-x-2">
      <span className={`size-7 flex justify-center items-center shrink-0 ${currentStep === stepId ? "bg-blue-600 text-white" : currentStep > stepId? "bg-green-100 text-green-500": "bg-transparent border border-blue-600 text-blue-700"} font-medium  rounded-full`}>
       {stepId}
      </span>
      <div className="my-3">
                <h3 className="font-semibold text-sm">{heading}</h3>
                <p className="text-xs text-gray-400">{subHeading}</p>
              </div>
    </div>
   
  </li>
  )
}

export default Steps
