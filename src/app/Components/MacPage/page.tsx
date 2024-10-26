import Image from "next/image";
import "./style.css";
export default function MacPage() {
  return (
    <div className="main">
      {/* left side */}
      <div className="one">
        <div className="img01">
          <Image
            // className="imgg"
            src="/PlayStation.png"
            alt="playstation"
            width={1500}
            height={0}
          />
        </div>
        <div className="text01">
          <h2 className="t1">Playstation 5</h2>
          <p className="p1">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div className="half">
        <div className="text04">
          <h2 className="t4">Macbook Air</h2>
          <p className="p4">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>

          <button className="button4">Shop Now</button>
        </div>
        <div className="img04">
          <Image
            // className="img4"
            src="/MacBook.png"
            alt="playstation"
            width={500}
            height={200}
          />
        </div>
      </div>

      <div className="second">
        <div className="two">
          <div className="img02">
            <Image
              // className="img2"
              src="/airpod.png"
              alt="playstation"
              width={100}
              height={0}
            />
          </div>
          <div className="text033">
            <h2 className="t2">Apple AirPods Max</h2>
            <p className="p22">
              Computational audio. Listen, it&apos;s powerful
            </p>
          </div>
        </div>
        <div className="two2">
          <div className="img03">
            <Image
              // className="img3"
              src="/vision.png"
              alt="playstation"
              width={136}
              height={190}
            />
          </div>
          <div className="text02">
            <h2 className="t2">Apple Vision Pro</h2>
            <p className="p22">An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
