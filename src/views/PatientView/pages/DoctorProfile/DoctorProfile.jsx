import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './DoctorProfile.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    image: '/doctor_image.jpg',
    rating: 4.5,
    experience: '10y exp',
    specializations: ['Cardiology', 'Internal Medicine', 'Preventive Care', 'Dermatology', 'Neurology', 'Orthopedics','Cardiology', 'Internal Medicine', 'Preventive Care', 'Dermatology', 'Neurology', 'Orthopedics'],
    about: 'Dr. John Doe is a highly experienced cardiologist with over 10 years of practice. He is dedicated to providing the best care for his patients.',
    reviews: [
      { id: 1, user: 'Patient A', comment: 'Excellent doctor, very caring.' },
      { id: 2, user: 'Patient B', comment: 'Highly knowledgeable and professional.' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    image: '/doctor_default.jpg',
    rating: 4.8,
    experience: '12y exp',
    specializations: ['Pediatrics', 'Endocrinology', 'Gastroenterology'],
    about: 'Dr. Jane Smith is a compassionate pediatrician with 12 years of experience. She is great with kids and provides thorough care.',
    reviews: [
      { id: 1, user: 'Patient C', comment: 'Wonderful doctor for my children.' },
      { id: 2, user: 'Patient D', comment: 'Very patient and understanding.' },
    ],
  },
];

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // Generate next 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }), // Mon, Tue
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }), // Nov, Dec
      full: date.toDateString()
    };
  });

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <>
    <div className="doctor-profile-container">
      <div className="doctor-profile-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-profile-image" />
        <div className="doctor-profile-info">
          <h1 className="doctor-name">{doctor.name}</h1>
           <p>{doctor.about}</p>
          <div className="doctor-specializations">
            {doctor.specializations.map((spec) => (
              <span key={spec} className="spec_chip">
                {spec}
              </span>
            ))}
          </div>
          <div>
            <i class="fa-solid fa-graduation-cap"></i>
            <span>MBBS, MD</span>
          </div>
             <div>
            <i class="fa-solid fa-suitcase-medical"></i>
            <span>10y exp.</span>
          </div>
           <div>
            <i class="fa-solid fa-suitcase-medical"></i>
            <span>4.5(1000 reviews)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="doctor_availablity_container shadow p-2">
      <h4>Availablity</h4>
<div className="date-selector">
      {days.map((d, idx) => (
        <button
          key={idx}
          className={`date-card ${selectedDate === d.full ? "active" : ""}`}
          onClick={() => setSelectedDate(d.full)}
        >
          <span className="day">{d.day}</span>
          <span className="date">{d.date}</span>
          <span className="month">{d.month}</span>
        </button>
      ))}
    </div>
    </div>
    </>
  );
};

export default DoctorProfile;