import Navbar from "../components/Navbar/Navbar";

export default function PatientLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="shadow">{children}</main>
    </div>
  );
}