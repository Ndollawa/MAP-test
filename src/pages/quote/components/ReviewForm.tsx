import { Button, Modal, Spinner } from "flowbite-react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { Toast } from "../../../app/utils/toast";
import { spinnerTheme } from "../../../app/utils/flowbiteThemes";

const ReviewForm = ({ data, onPrev, onSubmit }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openPreloader, setOpenPreloader] = React.useState(false);
  
  const handleSubmit = () => {
    console.log("Final Data:", data);
    onSubmit(data);
  };
const confirmSubmit = ()=>{
  setOpenModal(false);
  setOpenPreloader(true);
  setTimeout(() => {
    setOpenPreloader(false);
  },5300);

  Toast.fire({
    icon: "success",
    title: "RFQ ID sent successfully!"
  });
  handleSubmit();
}
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Review and Submit</h2>
    
   {/* Quote Information */}
   <div className="border border-gray-200 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-x=2xl">Quote Information</h3>
            <p className="text-gray-400 text-base cursor-pointer"><FiEdit />
            </p>
          </div>
          <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-8 w-full">
            <table className="w-full table table-auto">
              <thead>
                <tr>
                <th className="py-2 px-4 text-start"><p className="text-sm text-gray-500">Title</p></th>
                <th className="py-2 px-4 text-start"><p className="font-semibold text-gray-700">{data.title}</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4"><p className="text-sm text-gray-500">RFQ No</p></td>
                <td className="py-2 px-4"> <p className="font-semibold text-gray-700">{data.rfqNo}</p></td>
                </tr>
                <tr>
                  <td className="py-2 px-4">
              <p className="text-sm text-gray-500">Requestor</p></td>
                  <td className="py-2 px-4"> <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-gray-950 grid place-items-center">
                <span className="font-semibold">JD</span>
              </div>
              <p className="font-semibold text-gray-950">Jane Doe <small className="text-gray-500 text-xs"><span className="text-xl">•</span> Head Nurse, Paediatrics</small></p>
              </div></td>
                </tr>
                <tr>
                  <td className="py-2 px-4">
              <p className="text-sm text-gray-500">Status</p></td>
                  <td className="py-2 px-4">
                  <span className="bg-orange-100  text-orange-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-700 dark:text-orange-300">Awaiting</span></td>
                </tr>
                <tr>
                  <td className="py-2 px-4">
              <p className="text-sm text-gray-500">Department</p>
              </td>
                  <td className="py-2 px-4">
              <p className="font-semibold text-gray-700">{data.department}</p>
              </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">
              <p className="text-sm text-gray-500">Expected Delivery Date</p>
              </td>
                  <td className="py-2 px-4">
              <p className="font-semibold text-gray-700">{data.expectedDeliveryDate}</p>
              </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="col-span-4 border border-gray-300 rounded-md h-fit p-3">
            <div className="text-gray-400 flex items-center">
            <BuildingSvg /><span>Client</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-gray-950 grid place-items-center"><span className="font-semibold">W</span>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">Western Hospital</h3>
                <p className="text-xs text-gray-400">Clear street</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
  
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="bg-gray-500 text-white px-4 py-1 rounded-md hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={()=>setOpenModal(true)}
          className="bg-green-500 text-white px-6 py-1 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </div>
        
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="mb-5">
            <h2 className="font-bold text-xl">Confirmation</h2>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
            </p>
          </div>
          <div className="flex items-center justify-end my-4 gap-4">
      <button
        type="submit" onClick={()=>setOpenModal(false)}
        className="mt-4 border border-gray-500 bg-gray-50 text-gray-600 px-6 py-1 rounded-md hover:bg-gray-300"
      >
        Cancel
      </button>
      <button
      onClick={confirmSubmit}
        type="submit"
        className="mt-4 bg-blue-500 text-white px-6 py-1 rounded-md hover:bg-blue-600"
      >
        Continue
      </button></div>
        </Modal.Body>
    
      </Modal>
        
      <Modal show={openPreloader} onClose={() => setOpenPreloader(false)} size={'sm'}>
        <Modal.Body>
          <div className="mb-5 grid place-items-center">
          <Spinner theme={spinnerTheme} aria-label="Sending quote" size="xl" />
          <p className="text-center text-xs font-bold">Sending quote...</p>
          </div>
        </Modal.Body>
    
      </Modal>
    </div>
  );
};

export default ReviewForm;
