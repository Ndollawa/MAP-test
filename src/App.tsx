import { Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import DashboardLayout from './layouts/Dashboard.layout';
import Dashboard from './pages/Dashboard';
import QuoteDetails from './pages/quote/components/QuoteDetails';
import Quote from './pages/quote/Quote';
import RequestQuote from './pages/quote/components/RequestQuote';

function App() {
  return (
    <>
    
    <ToastContainer/>
    <Routes>
        <Route path="/"  element={<DashboardLayout /> }>
        <Route index element={<Dashboard/>} >
                {/* <Route path="quotes-details" element={<QuoteDetails />} /> */}
      </Route>
        <Route path="quotes" element={<Quote/>} >
                <Route index element={<QuoteDetails />} />
                <Route path="respond/:id" element={<RequestQuote />} />
      </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
