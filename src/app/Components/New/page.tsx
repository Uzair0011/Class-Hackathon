import Image from "next/image";
import "./styles.css";
export default function New() {
  return (
    <div className="ParentContainer3">
      <div className="childContainer3">
        <p>
          <u>
            <b>New Arrival</b>
          </u>
        </p>
        <p>Bestseller</p>
        <p>Featured Products</p>
      </div>
      <div className="allBox">
        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/1.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Apple iPhone 14 Pro Max 128GB Deep Purple</b>
          </h5>
          <h4 className="rate">$900</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/c2.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Blackmagic Pocket Cinema Camera 6k</b>
          </h5>
          <h4 className="rate">$2535</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
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

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/h4.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>AirPods Max Silver Starlight Aluminium </b>
          </h5>
          <h4 className="rate">$549</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/w5.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Samsung Galaxy Watch6 Classic 47mm Black</b>
          </h5>
          <h4 className="rate">$369</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/m6.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</b>
          </h5>
          <h4 className="rate">$1799</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/e7.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <div className="downGalaxy">
              <b>Galaxy Buds FE Graphite</b>
            </div>
          </h5>
          <h4 className="rate">$99.99</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>

        <div className="boxSize">
          <div className="heart">
            <Image
              // className="imgSize1"
              src="/heart.png"
              alt="pic"
              width={30}
              height={20}
            />
          </div>
          <div className="itemsAll1">
            <Image src="/m8.png" alt="itemsAll" width={160} height={160} />
          </div>

          <h5 className="fontSize">
            <b>Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021</b>
          </h5>
          <h4 className="rate">$398</h4>
          <div className="buttonPadding">
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
