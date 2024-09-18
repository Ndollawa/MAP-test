import { Outlet } from "react-router-dom";

const Quote = () => {
  return( 
 <div className="flex-grow p-8">
    <Outlet />
  </div>
  );
};

export default Quote;
