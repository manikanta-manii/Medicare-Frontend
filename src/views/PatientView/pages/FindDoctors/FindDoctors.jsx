import { Link } from 'react-router-dom';
import './FindDoctors.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    image: '/doctor_image.jpg',
    rating: 4.5,
    experience: '10y exp',
    specializations: ['Cardiology', 'Internal Medicine', 'Preventive Care', 'Dermatology', 'Neurology', 'Orthopedics'],
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    image: '/doctor_default.jpg',
    rating: 4.8,
    experience: '12y exp',
    specializations: ['Pediatrics', 'Endocrinology', 'Gastroenterology'],
  },
  // Add more doctors as needed
];

function FindDoctors() {
  return (
    <>
      <div id="find_doctors_page_container">
        <h2>Find a Doctor</h2>
        <p>Browse our network of qualified healthcare professionals and book your appointments</p>
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search doctors by name or specialization" className="search-input" />
        </div>
        <div id="doctors_list_container">
          {doctors.map((doctor) => (
            <Link to={`/doctor/${doctor.id}`} key={doctor.id} className="doctor_profile_card_link">
              <div className="doctor_profile_card shadow">
                <div className="d-flex align-items-center p-1 border-bottom">
                  <div className="doctor_profile_image_container">
                    <img className="doctor_profile_image" src={doctor.image} alt="Doctor" />
                  </div>
                </div>
                <div>
                  <h5 className="doctor_name p-1">{doctor.name}</h5>
                </div>
                <div className="d-flex flex-column gap-2 align-items-end doc_info_container">
                  <span className="doc_info">
                    <i className="fa-solid fa-star"></i>
                    {doctor.rating}
                  </span>
                  <span className="doc_info">
                    <i className="fa-solid fa-suitcase-medical"></i>
                    {doctor.experience}
                  </span>
                </div>
                <div className="doctor_specializations p-1">
                  {doctor.specializations.map((spec) => (
                    <span key={spec} className="spec_chip">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="doctor_card_btn_container">
                  <button type="button" className="doctor_card_btn">
                    Book Appointment
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindDoctors;