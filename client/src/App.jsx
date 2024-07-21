import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTesting from "./TestingExamples/FormTesting";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormTesting />} />
    </Routes> 
  </BrowserRouter>
  )
}