import Image from "next/image";
import "./styles.css";
export default function New2() {
  return (
    <div >
      <div className="textContainer66">
        <b>Discounts up to -50%</b>
      </div>
     <div className="new2All">  <div className="allBox44">
        <div className="boxSize88">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={32}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/n1.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Apple iPhone 14 Pro Max 128GB Deep Purple</b>
          </h5>
          <h4 className="rate">$900</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize88">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={32}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/h4.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Blackmagic Pocket Cinema Camera 6k</b>
          </h5>
          <h4 className="rate">$2535</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize88">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={32}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/w3.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Apple Watch Series 9 GPS 41mm Starlight Aluminium </b>
          </h5>
          <h4 className="rate">$399</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize88">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={32}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/n4.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>AirPods Max Silver Starlight Aluminium </b>
          </h5>
          <h4 className="rate">$549</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div> </div>
    
    </div>
  );
}
