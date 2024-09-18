import{ useEffect, useState } from "react";
import { MenuItems } from "./Links";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

export default function Menu() {
  const [menuItems, setMenuItems] = useState(MenuItems);
  const [activeLink, setActiveLink] = useState<number| null>(null);

  const handleToggleMenu = (id: number) => {
    setMenuItems((prevValue) => {
      return prevValue.map((menu) => {
        return menu.id === id ? { ...menu, isOpen: !menu.isOpen } : menu;
      });
    });
  };

  const setActiveLinkHandler = (id:number)=>{
    setActiveLink(id)
    
  }

  const location = useLocation();

  // This effect triggers when the location changes
  useEffect(() => {
    const activeLink = MenuItems.find(link => link.url === location.pathname || link.subMenu?.map(subLink =>subLink.url === location.pathname));
    if (activeLink) {
      setActiveLinkHandler(activeLink.id);
    }
  }, [location.pathname, setActiveLinkHandler]);

  const link = menuItems.map((item): JSX.Element | undefined => {
    switch (item.type) {
      case "link":
        // BASIC LINK
        return (
          <li className={`w-full py-2 px-4 text-gray-600 dark:text-gray-300 has-[.active]:bg-blue-100 hover:bg-blue-100 hover:text-blue-600 rounded`} key={item.id}>
            <NavLink
              to={item.url}
              className={({isActive})=>isActive ? "active" : ""+" flex items-center justify-between"}
            >
              <div className="flex items-center gap-1">
                <span>{item.icon} </span>
                <h3 className="text-xs">{item.title}</h3>
              </div>
              { item?.hasCounter && item?.counter && <span className="bg-blue-600  text-white text-[0.625rem] font-medium me-2 px-2 py-0.5 mx-4 rounded-full dark:bg-blue-600 dark:text-blue-300">{item.counter}</span>}
            </NavLink>
          </li>
        );
        break;

      case "dropdown":
        //  DROPDOWN LINK
        return (
          <li className="block w-full" key={item.id}>
            <div
              className={`flex items-center  py-2 px-4 justify-between ${ item.id === activeLink? " bg-blue-100 dark:text-blue-700" :""} text-gray-600 dark:text-gray-300  hover:bg-blue-100 hover:text-blue-600 rounded`}
              key={item.id}
              onClick={() => handleToggleMenu(item.id)}
            >
              <div className="flex items-center gap-1">
                <span> {item.icon}</span>
                <h3 className="text-xs">{item.title}</h3>
              </div>
              {/* <span className="message__count">3</span> */}
              <span className="text-xs flex">
              <IoIosArrowDown className={item.isOpen ? "hidden" : undefined} />
              <IoIosArrowUp className={!item.isOpen ? "hidden" : undefined} />
               
               
              </span>
            </div>
            <ul
              className=""
              style={!item.isOpen ? { display: "none" } : undefined}
            >
              {item.subMenu?.map((link, i): JSX.Element | undefined => {
                return (
                  <li className={`py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 rounded`} key={"subMenu_" + i}>
                    <NavLink
                      to={link.url} className={({isActive})=> isActive ? "active" : ""}
                    >
                      {/* <span>{link.icon} </span> */}
                      <h3 className="text-xs ml-5">{link.title}</h3>
                     
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        );
        break;

      default:
        return undefined;
        break;
    }
  });
  return <>{link}</>;
}