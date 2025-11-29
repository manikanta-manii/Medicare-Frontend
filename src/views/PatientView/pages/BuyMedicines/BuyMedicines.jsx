import './BuyMedicines.css';

function BuyMedicines(){
   return (<>
     <div id="buy_medicines_page_container">
         <h2>Online Pharmacy</h2>
         <p>Browse our network of trusted healthcare essentials online — safe, convenient, and reliable.</p>
         <div className="search-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search medicines" className="search-input" />
         </div>
      </div>
   </>);
}

export default BuyMedicines;