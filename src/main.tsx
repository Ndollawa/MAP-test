import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import App from './App.tsx'
import './index.css'
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'

function Fallback({ error, resetErrorBoundary }:FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
   <div className="container row justify-center h-100 items-center" style={{width:'100%',height:'100vh'}}>
       <div className="row justify-center h-100 items-center">
           <div className="col-md-7">
               <div className="form-input-content text-center error-page">
                   <h1 className="error-text font-weight-bold">400</h1>
                   <h4><i className="fa fa-thumbs-down text-danger"></i> Oops!!!</h4>
                   <h5>Something went wrong. Your Request resulted in an error</h5>
                   <p>Reload the page to continue. If this still continues, please contact out support team</p>
       <div>
                       <button className="btn btn-secondary" onClick={()=>resetErrorBoundary()} >Click to go Back</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
  );
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ErrorBoundary FallbackComponent={Fallback} onError={(error)=>console.log(error)}>
    <Router>
      <Routes>
        <Route path="/*" element={ <App />} />
      </Routes>
    </Router>
    </ErrorBoundary>
  </StrictMode>,
)
