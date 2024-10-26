import Image from "next/image";
import "./style.css";
export default function Main() {
  return (
    <div className="base">
      <div className="text">
        <p className="beyound">Pro.Beyond.</p>
        <p className="iphone">
          IPhone 14 <span className="pro">Pro</span>{" "}
        </p>
        <p className="matter1">
          Created to change everything for the better. For everyone
        </p>
        <button className="button1">Shop Now</button>
      </div>
      <div className="image">
        <Image src="/iphone.png" alt="iphone" width={420} height={0} />
      </div>
    </div>
  );
}
