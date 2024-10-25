import "./style.css";

export default function Category() {
   return (
      <div>
         <div className="parentContainer2">
            <div className="childContainer2">
               <p className="p2">Browse By Category</p>
               <div className="allArrow">
                  <img className="arrow" src="/arrow.png" alt="arrow" />
                  <img className="arrow2" src="/arrow.png" alt="arrow" />
               </div>
            </div>
            <div className="container2">

               
               <div className="box2">
                  <div className="items"><img src="Phones.png" alt="phones" /> </div>
                  Phones
               </div>

               <div className="box2">
                  <div className="items"><img src="Watches.png" alt="watch" /> </div>
                  Smart Watches
               </div>

               <div className="box2">
                  <div className="items"><img src="Cameras.png" alt="Cameras" /> </div>
                  Cameras
               </div>

               <div className="box2">
                  <div className="items"><img src="Headphones.png" alt="Headphones" /> </div>
                  Headphones
               </div>

               <div className="box2">
                  <div className="items"><img src="Computers.png" alt="Computers" /> </div>
                  Computers
               </div>

               <div className="box2">
                  <div className="items"><img src="Gaming.png" alt="Gaming" /> </div>
                  Gaming
               </div>


               
            </div>
         </div>
      </div>
   );
}
