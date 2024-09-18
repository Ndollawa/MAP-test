import { IoIosArrowDown } from "react-icons/io";
import { BuildingSvg, SignDocSvg } from "../../../assets";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Checkbox, Table } from "flowbite-react";

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
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th className="py-2 px-4">Item</th>
                <th className="py-2 px-4">Variant</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Expected Delivery Date</th>
                <th className="py-2 px-4">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
               <td className="py-2 px-4">Oxygen concentrator</td>
                <td className="py-2 px-4">Blue</td>
                <td className="py-2 px-4">100 pieces</td>
                <td className="py-2 px-4">$200.00</td>
                <td className="py-2 px-4">$2,000.00</td>
                <td className="py-2 px-4">2024-08-07</td>
                <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
            </tr>
       
        </tbody>
    </table>
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
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
              <div className="w-8 h-8 rounded-full bg-orange-100 text-gray-950 grid place-items-center"><SignDocSvg />
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
  