import { FileInput, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

const TermsForm = ({ onNext, onPrev }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Step 2 Data:", data);
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <h2 className="text-2xl font-semibold">Terms and Attachments</h2>

     
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
        <div className="mb-2 block">
          <Label htmlFor="paymentTerms" value="Payment Terms" />
        
                    </div>
          <Select
                      {...register(`paymentTerms`, { required: true })}
                      id="paymentTerms"
                      sizing="sm"
                    >
                      {["Net 30", "Variant 2Net 60"].map((v, i) => (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      ))}
                    </Select>
        </div>
        <div>
         
        <div className="mb-2 block">
          <Label htmlFor="deliverySchedule" value="Delivery Schedule" />
                    </div>
          <Select
                      {...register(`deliverySchedule`, { required: true })}
                      id="deliverySchedule"
                      sizing="sm"
                    >
                      {["Variant 1", "Variant 2", "Variant 3", "Variant 4"].map((v, i) => (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      ))}
                    </Select>
        </div>


        <div>
        <div className="mb-2 block">
          <Label htmlFor="shippingMethod" value="Shipping Method" />
          </div>
          <Select
                      {...register(`shippingMethod`, { required: true })}
                      id="shippingMethod"
                      sizing="sm"
                    >
                      {["Courier Services", "Freight"].map((v, i) => (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      ))}
                    </Select>
        </div>
          <div>
              <div className="mb-2 block">
                <Label htmlFor="leadTime" value="Lead Time (Days)" />
              </div>
              <TextInput
                sizing="sm"
                {...register("leadTime", { required: true })}
                placeholder="Days"
                type="number"
              />
            </div>
      </div>

      {/* File Upload */}
      <div>
        <div className="">
        <div className="my-3">
                <h3 className="font-semibold text-sm">Attachments</h3>
                <p className="text-xs text-gray-400">Attach all necessary files or documents</p>
              </div>
        </div>
      <div className="flex items-center justify-center w-fit">
        <Label
          htmlFor="dropzone-file"
          className="flex h-64 p-8 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <FileInput id="dropzone-file" className="hidden" multiple
          {...register("attachments")}/>
        </Label>
      </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default TermsForm;
