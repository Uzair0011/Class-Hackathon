import "./style.css";
import Image from "next/image";
export default function Category() {
  return (
    <div>
      <div className="parentContainer2">
        <div className="childContainer2">
          <p className="p2">Browse By Category</p>
          <div className="allArrow">
            <Image
              className="arrow"
              src="/arrowLeft.png"
              alt="arrow"
              width={20}
              height={20}
            />
            <Image
              className="arrow2"
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="container2">
          <div className="box2">
            <div className="items">
              <Image src="/Phones.png" alt="phones" width={48}  height={48}/>{" "}
            </div>
            Phones
          </div>

          <div className="box2">
            <div className="items">
              <Image src="/Watches.png" alt="watch" width={48}  height={48} />{" "}
            </div>
            Smart Watches
          </div>

          <div className="box2">
            <div className="items">
              <Image src="/Cameras.png" alt="Cameras"  width={48}  height={48}/>{" "}
            </div>
            Cameras
          </div>

          <div className="box2">
            <div className="items">
              <Image src="/Headphones.png" alt="Headphones" width={48}  height={48} />
            </div>
            Headphones
          </div>

          <div className="box2">
            <div className="items">
              <Image src="/Computers.png" alt="Computers"  width={48}  height={48}/>
            </div>
            Computers
          </div>

          <div className="box2">
            <div className="items">
              <Image src="/Gaming.png" alt="Gaming"  width={48}  height={48}/>
            </div>
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
}
