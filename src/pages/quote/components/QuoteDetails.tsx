import { IoIosArrowDown } from "react-icons/io";
import { BuildingSvg, MusicIcon, SignDocSvg, UserImage } from "../../../assets";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Checkbox, Table } from "flowbite-react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const QuoteDetails = () => {
    return (
      <div className="p-8 flex-1">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div className="">
          <h1 className="text-xl font-bold text-gray-700">Quote Details</h1>
          <p className="text-xs text-gray-400">Created on Wed, 12th June 2022, 08:00am</p>
          </div>
          <div className="flex items-center">
            <Link to="/quotes/respond/:id" className="bg-blue-600 text-white text-xs px-3.5 py-1.5 rounded-lg hover:bg-blue-700 transition">Respond</Link>
            <button className="bg-red-500 text-white text-xs px-3.5 py-1.5 ml-4 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
              <RxCross2 size={'1rem'} />
              <span> Reject</span>
              </button>
          </div>
        </div>
  
        {/* Quote Information */}
        <div className="border border-gray-200 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-x=2xl">Quote Information</h3>
            <p className="text-gray-400 text-xs">Expected delivery date : 2024-12-02</p>
          </div>
          <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-8 w-full">
            <table className="w-full table table-auto">
              <thead>
                <tr>
                <th className="py-2 px-4 text-start"><p className="text-sm text-gray-500">Title</p></th>
                <th className="py-2 px-4 text-start"><p className="font-semibold text-gray-700">Request for Equipments</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4"><p className="text-sm text-gray-500">RFQ No</p></td>
                <td className="py-2 px-4"> <p className="font-semibold text-gray-700">RQ #01234</p></td>
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
              <p className="font-semibold text-gray-700">Maternity</p>
              </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-4 border border-gray-300 rounded-md h-fit p-3">
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
          </div>
          </div>
        </div>
  
        {/* Items Table */}  
<div className="p-3 border border-gray-200 w-full rounded-lg mb-5">
  <h3 className="font-bold mb-5 text-base">Item(s)</h3>
<div className="relative overflow-x-auto  sm:rounded-lg">
    <div className="overflow-x-auto">
    <Table className="w-full border border-gray-200 rounded-lg ">
        <Table.Head className="capitalize"> 
          <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
          <Table.HeadCell>Items</Table.HeadCell>
          <Table.HeadCell>Variants</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Expected Delivery Date</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only"></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y w-full">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm text-gray-950 grid place-items-center"><img src={MusicIcon} alt=""/>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">  Oxygen concentrator</h3>
                <p className="text-xs text-gray-400">Clear street</p>
              </div>
            </div>
            </Table.Cell>
            <Table.Cell className="w-auto">Blue</Table.Cell>
            <Table.Cell className="w-auto">100 pieces</Table.Cell>
            <Table.Cell className="w-auto">$200.00</Table.Cell>
            <Table.Cell className="w-auto">$2000.00</Table.Cell>
            <Table.Cell className="w-auto">2024-08-07</Table.Cell>
            <Table.Cell className="w-auto">
              <div className=" flex items-center gap-2">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FaEdit/></a>
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"><FaTrashAlt /></a>
              </div>
            </Table.Cell>
              
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm text-gray-950 grid place-items-center"><img src={MusicIcon} alt=""/>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">  Oxygen concentrator</h3>
                <p className="text-xs text-gray-400">Clear street</p>
              </div>
            </div>
            </Table.Cell>
            <Table.Cell className="w-auto">Blue</Table.Cell>
            <Table.Cell className="w-auto">100 pieces</Table.Cell>
            <Table.Cell className="w-auto">$200.00</Table.Cell>
            <Table.Cell className="w-auto">$2000.00</Table.Cell>
            <Table.Cell className="w-auto">2024-08-07</Table.Cell>
            <Table.Cell className="w-auto">
              <div className=" flex items-center gap-2">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FaEdit/></a>
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"><FaTrashAlt /></a>
              </div>
            </Table.Cell>
              
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm text-gray-950 grid place-items-center"><img src={MusicIcon} alt=""/>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">  Oxygen concentrator</h3>
                <p className="text-xs text-gray-400">Clear street</p>
              </div>
            </div>
            </Table.Cell>
            <Table.Cell className="w-auto">Blue</Table.Cell>
            <Table.Cell className="w-auto">100 pieces</Table.Cell>
            <Table.Cell className="w-auto">$200.00</Table.Cell>
            <Table.Cell className="w-auto">$2000.00</Table.Cell>
            <Table.Cell className="w-auto">2024-08-07</Table.Cell>
            <Table.Cell className="w-auto">
              <div className=" flex items-center gap-2">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FaEdit/></a>
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"><FaTrashAlt /></a>
              </div>
            </Table.Cell>
              
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm text-gray-950 grid place-items-center"><img src={MusicIcon} alt=""/>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">  Oxygen concentrator</h3>
                <p className="text-xs text-gray-400">Clear street</p>
              </div>
            </div>
            </Table.Cell>
            <Table.Cell className="w-auto">Blue</Table.Cell>
            <Table.Cell className="w-auto">100 pieces</Table.Cell>
            <Table.Cell className="w-auto">$200.00</Table.Cell>
            <Table.Cell className="w-auto">$2000.00</Table.Cell>
            <Table.Cell className="w-auto">2024-08-07</Table.Cell>
            <Table.Cell className="w-auto">
              <div className=" flex items-center gap-2">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FaEdit/></a>
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"><FaTrashAlt /></a>
              </div>
            </Table.Cell>
              
          </Table.Row>
         
        </Table.Body>
      </Table>
      </div>
</div> 
 {/* Total */}
        <div className="my-5 pr-20  flex flex-col justify-end w-full">
          <div className="self-end">
          <p className="text-left text-sm font-semibold text-gray-500 flex gap-x-10 mb-4">
          <span className="w-24">Subtotal:</span>
          <span className="space-x-2 text-left">$8,000.00</span>
          </p>
          <p className="text-left text-sm font-semibold text-gray-500 flex gap-x-10">
            <span className="w-24">Total:</span>
            <span className="font-bold text-gray-950 text-left">$8,750.00</span>
          </p>
          </div>
        </div>
</div>
  
  
<div className="p-3 border border-gray-200 w-full rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
              <div className="w-8 h-8 text-gray-950 grid place-items-center"><SignDocSvg />
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-sm">Terms and Attachments</h3>
                <p className="text-xs text-gray-400">Review payment and delivery terms</p>
              </div>
            </div>
<IoIosArrowDown className="text-gray-400 mr-4" size={'1.5rem'} />
</div>
      </div>
    );
  };
  
  export default QuoteDetails;
  