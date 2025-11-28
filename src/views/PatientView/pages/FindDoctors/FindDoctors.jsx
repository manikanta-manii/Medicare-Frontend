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
               <div className="d-flex align-items-center p-2 border-bottom">
                  <div className="doctor_profile_image_container me-3">
                     <img
                        className="doctor-profile-image"
                        src="/doctor_image.jpg"
                        alt="Doctor"
                     />
                  </div>
                  <div>
                  <div className="rating">⭐️ 4.5 <span className="text-muted">(1000 Reviews)</span></div>
                  <div className="experience">♡ 12 <span className="text-muted">Years EXP</span></div>
                  <h6 className="fee">Consultation Fee: ₹399</h6>
               </div>
               </div>
               <div><h6>Dr. John Doe</h6></div>
               <div><p>spec1, spec2, spec3, spec4</p></div>
            </div>
         </div>
      </div>
    </>
   );
}

export default FindDoctors;