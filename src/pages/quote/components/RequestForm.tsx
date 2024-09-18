import { useState, FormEvent, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Datepicker, Label, Select, Table, Textarea, TextInput } from "flowbite-react";
import { FaDollarSign } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { calendarTheme } from "../../../app/utils/flowbiteThemes";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RFQ } from "../../../app/interfaces/quote.interface";

const RequestForm = ({ onNext }: any) => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const maxWords = 200;

  const handleTextChange = (e: FormEvent) => {
    const inputText = (e.target as HTMLTextAreaElement).value;
    const wordsArray = inputText.trim().split(/\s+/);
    const words = wordsArray.filter(Boolean); 
    if (words.length <= maxWords) {
      setText(inputText);
      setWordCount(words.length);
    }
  };

  const { register, control, handleSubmit, watch } = useForm<RFQ>({
    defaultValues: {
      items: [{ item: "", variant: "", quantity: "", price: "", expectedDate: "" }],
      expectedDeliveryDate: "",
      note: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchItems = watch("items");

  useEffect(() => {
    const total = watchItems.reduce((acc, currentItem) => {
      const price =  (parseFloat(currentItem?.price as string || '0') || 0) *
                  (parseFloat(currentItem?.quantity as string || '0') || 1);
      return acc + price;
    }, 0);
    setTotalPrice(total);
  }, [watchItems]);

  const onSubmit = (data: RFQ) => {
    console.log("Step 1 Data:", data);
    onNext(data);
  };

  return (
    <>
      <div className="border border-gray-200 p-6 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-semibold">Request Information</h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="rfqNo" value="RFQ No" />
              </div>
              <TextInput
                sizing="sm"
                {...register("rfqNo", { required: true })}
                placeholder="RFQ-10234"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                sizing="sm"
                {...register("title", { required: true })}
                placeholder="Request for Equipments"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="department" value="Department" />
              </div>
              <TextInput
                sizing="sm"
                {...register("department", { required: true })}
                placeholder="Maternity"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="expectedDeliveryDate" value="Expected Delivery Date" />
              </div>
              <Controller
                name="expectedDeliveryDate"
                control={control}
                render={({ field }) => (
                  <Datepicker 
                    value={field.value}
                    onSelectedDateChanged={field.onChange}
                    theme={calendarTheme}
                    datepicker-format="yyyy-mm-dd"
                    sizing="sm"
                     placeholder="2024-12-1"
                  />
                )}
              />
            </div>
          </div>

          <hr className="hr w-full border-gray-200 my-7" />

          {/* Items Section */}
          <div>
            <h3 className="text-lg font-medium cursor-pointer"   onClick={() => append({})}>Add Items</h3>

            <div className="overflow-x-auto w-full">
      <Table className="w-full">
        <Table.Head className="capitalize">
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
        <Table.Body className="divide-y">
            {fields.map((field, index) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={field.id}>
            <Table.Cell className="w-auto p-2 whitespace-nowrap font-medium text-gray-900 dark:text-white">
               <TextInput  className=""
                      sizing="sm"
                      {...register(`items.${index}.item`, { required: true })}
                      placeholder="Item"
                    />
            </Table.Cell>
            <Table.Cell  className="w-auto p-2">  <Select
                      {...register(`items.${index}.variant`, { required: true })}
                      id="variants"
                      sizing="sm"
                    >
                      {["Variant 1", "Variant 2", "Variant 3", "Variant 4"].map((v, i) => (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      ))}
                    </Select>
            </Table.Cell>
            <Table.Cell className="w-auto p-2">
                    <TextInput
                      sizing="sm"
                      {...register(`items.${index}.quantity`, { required: true })}
                      placeholder="Quantity"
                      type="number"
                    />
                    
              </Table.Cell>
            <Table.Cell className="w-auto p-2">
              <TextInput
                      sizing="sm"
                      addon={<FaDollarSign />}
                      {...register(`items.${index}.price`, { required: true })}
                      placeholder="Price"
                      type="number"
                    />
              </Table.Cell>
            <Table.Cell className="w-auto p-2">
              <Controller
                      name={`items.${index}.expectedDate`}
                      control={control}
                      render={({ field }) => (
                        <Datepicker
                          value={field.value}
                          onSelectedDateChanged={field.onChange}
                          theme={calendarTheme}
                          sizing="sm"
                          placeholder="2024-12-1"
                        />
                      )}
                    />
            </Table.Cell>
            <Table.Cell  className="w-auto p-2">
                 <div className="col-span-1 flex justify-center items-center font-bold text-gray-800">
                 ${(
                  (parseFloat(watchItems[index]?.price as string || '0') || 0) *
                  (parseFloat(watchItems[index]?.quantity as string || '0') || 1)
                ).toFixed(2)}
                  </div>
            </Table.Cell>
            <Table.Cell  className="w-auto p-2">
                 <div className="col-span-1 flex items-center">
                  <button
                    type="button"
                    title="Remove"
                    onClick={() => remove(index)}
                    className="text-gray-600 font-semibold hover:text-red-600 p-2 mb-4"
                  >
                    <FaTrashCan />
                  </button>
                  </div>
            </Table.Cell>
          </Table.Row>
         
            ))}
        </Table.Body>
      </Table>
      </div>
      
          </div>
 {/* Total */}
 <div className="my-5 pr-20  flex flex-col justify-end w-full">
          <div className="self-end">
          {/* <p className="text-left text-sm font-semibold text-gray-500 flex gap-x-10 mb-4">
          <span className="w-24">Subtotal:</span>
          <span className="space-x-2 text-left"></span>
          </p> */}
          <p className="text-left text-sm font-semibold text-gray-500 flex gap-x-10">
            <span className="w-24">Total:</span>
            <span className="font-bold text-gray-950 text-left">${totalPrice.toFixed(2)}</span>
          </p>
          </div>
        </div>
          <hr className="hr w-full border-gray-200 my-7" />

          {/* Textarea with Word Counter */}
          <div className="max-w-md">
            <Label htmlFor="note" value="Your message" />
            <Textarea
              {...register("note", { required: true })}
              id="note"
              placeholder="Leave a note..."
              required
              rows={5}
              className="p-2"
              value={text}
              onChange={handleTextChange}
            />
            <div className="text-right mt-2">
              <span className={`${wordCount === maxWords ? "text-red-500" : ""}`}>
                {wordCount}/{maxWords} words
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              type="submit"
              className="mt-4 border border-gray-500 bg-gray-50 text-gray-600 px-6 py-1 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mt-4 border border-blue-500 bg-gray-50 text-blue-600 px-6 py-1 rounded-md hover:bg-blue-300"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-6 py-1 rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestForm;
