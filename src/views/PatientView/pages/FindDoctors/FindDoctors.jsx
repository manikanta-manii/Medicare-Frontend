import './FindDoctors.css';

function FindDoctors(){
   return (
    <> 
      <div id="find_doctors_page_container">
         <h2>Find a Doctor</h2>
         <p>Browse our network of qualified healthcare professionals and book your appointments</p>
         <div className="search-container">
            <input type="text" placeholder="Search doctors by name or specialization" className="search-input" />
         </div>
         <div id="doctors_list_container">
            <div className="doctor_profile_card shadow">
               <div className="d-flex align-items-center p-1 border-bottom">
                  <div className="doctor_profile_image_container">
                     <img
                        className="doctor_profile_image"
                        src="/doctor_image.jpg"
                        alt="Doctor"
                     />
                  </div>
               </div>
               <div><h5 className="doctor_name p-1">Dr. John Doe</h5></div>
               <div className="doctor_specializations p-1">
                  <span className="spec_chip">Cardiology</span>
                  <span className="spec_chip">Internal Medicine</span>
                  <span className="spec_chip">Preventive Care</span>
                  <span className="spec_chip">Dermatology</span>
                  <span className="spec_chip">Neurology</span>
                  <span className="spec_chip">Orthopedics</span>
               </div>
               <div className="doctor_card_btn_container"><button type="button" className="doctor_card_btn">Book Appointment</button></div>
            </div>
         </div>
      </div>
    </>
   );
}

export default FindDoctors;