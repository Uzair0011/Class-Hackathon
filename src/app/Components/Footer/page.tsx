import Image from "next/image";
import "./style.css";
export default function Footer() {
  return (
    <div className="footerBack">
      <div className="footerParent">
        <div className="footerChild">
          <div className="c1">
            <div className="format1">
              <h2 className="ctext">
                <b>Cyber</b>
              </h2>
              <p className="downText">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
          </div>

          <div className="c2">
            <h2 className="ctext1">
              <b>Services</b>
            </h2>
            <div className="ptext">
              <ul>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </div>
          </div>

          <div className="c3">
            <h2 className="ctext1">
              <b>Assistance to the buyer</b>
            </h2>
            <div className="ptext">
              <ul>
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fourIcon">
          <div className="fourlogo">
            <div>
          
              <Image src="/twitter.png" alt="logo" width={25} height={25} />
            </div>
            <div>
              <Image src="/fb.png" alt="logo" width={25} height={25} />
            </div>
            <div>
              <Image src="/tiktok.png" alt="logo" width={25} height={25} />
            </div>
            <div>
            
              <Image src="/insta.png" alt="logo" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
