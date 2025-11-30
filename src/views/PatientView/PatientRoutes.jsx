import { Routes, Route } from "react-router-dom";
import PatientLayout from "./layouts/PatientLayout";
import Home from "./pages/Home/Home";
import FindDoctors from "./pages/FindDoctors/FindDoctors";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";

export default function PatientRoutes() {
  return (
    <PatientLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </PatientLayout>
  );
}