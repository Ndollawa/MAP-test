export interface Attachment {
    [key: string]: File;
  }

  export interface Item {
    item: string;
    variant: string;
    quantity: string | number;
    price: string | number;
    expectedDate: string;
  }
  
 export interface RFQ {
    items: Item[];
    rfqNo: string;
    title: string;
    department: string;
    paymentTerms: string;
    deliverySchedule: string;
    expectedDeliveryDate: string;
    shippingMethod: string;
    attachments: Attachment;
    note:string;
  }
  
  