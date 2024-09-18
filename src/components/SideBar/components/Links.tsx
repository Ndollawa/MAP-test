import {
  IoMdPersonAdd,
  IoMdPaper,
  IoIosCreate,
} from "react-icons/io";
import {DashboardSvg, FinanceSvg, CalendarSvg, ChatDarkSvg, SignDocDarkSvg, BoxSvg, CartSvg} from "../../../assets/";

type Submenu = {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string | JSX.Element;
}[];
type NavLinks = {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string | JSX.Element;
  isActive: undefined | boolean | null;
  hasCounter?: undefined | boolean | null;
  counter?: undefined | number | null;
  isOpen?: undefined | boolean | null;
  subMenu?: Submenu | undefined;
}[];
export const MenuItems: NavLinks = [
  {
    id: 0,
    title: "Dashboard",
    type: "link",
    url: "/",
    icon: <DashboardSvg/>,
    isActive: false,
  },
  {
    id: 1,
    title: "Inventory",
    type: "link",
    url: "/inventory/",
    icon: <BoxSvg/>,
    isActive: true,
  },
  {
    id: 2,
    title: "Procurement",
    type: "dropdown",
    url: "#",
    icon:<CartSvg />,
    isActive: false,
    isOpen: false,
    subMenu: [
      {
        id: 3,
        title: "Quotes",
        type: "link",
        url: "/quotes",
        icon: <IoIosCreate />,
      },
      {
        id: 4,
        title: "Orders",
        type: "link",
        url: "/orders",
        icon: <IoMdPaper />,
      },
    ],
  },
  {
    id: 6,
    title: "Finance",
    type: "dropdown",
    url: "#",
    icon: <FinanceSvg />,
    isActive: false,
    isOpen: false,
    subMenu: [
      {
        id: 7,
        title: "Extra",
        type: "link",
        url: "/extra",
        icon: <IoMdPersonAdd />,
      },
  
    ],
  },

  {
    id: 10,
    title: "Communication",
    type: "link",
    url: "/communications",
    hasCounter:true,
    counter:10,
    icon:<ChatDarkSvg />,
    isActive: false,
    isOpen: false,
  },
  {
    id: 11,
    title: "Calendar",
    type: "link",
    url: "/calendar",
    hasCounter:true,
    counter:10,
    icon:<CalendarSvg />,
    isActive: false,
    isOpen: false,
  },
  {
    id: 12,
    title: "Contacts",
    type: "link",
    url: "/contacts",
    icon: <SignDocDarkSvg />,
    isActive: false,
    isOpen: false,
  },
];