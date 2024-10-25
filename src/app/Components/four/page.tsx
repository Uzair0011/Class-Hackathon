import "./style.css";
import Image from "next/image";
export default function Four() {
  return (
    <div className="four">
      <div className="fourContainer">
        <div className="fourContainerBox">
          <Image className="img21" src="/01a.png" alt="" width={400} height={400} />
          <Image className="img22" src="/01b.png" alt="" width={400} height={400} />
        </div>
        <div className="matter">
     
          <h2 className="popupar">Popular Products</h2>
          <p className="ipad">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="buttonFour">
            <b>Shop Now</b>
          </button>
        </div>
      </div>

      <div className="fourContainer">
        <div className="color2">
          <div className="fourContainerBox">
            <Image className="img21" src="/02a.png" alt="" width={400} height={400} />
          </div>
          <div className="matter">
          
            <h2 className="popupar">Popular Products</h2>
            <p className="ipad">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="buttonFour">
              <b>Shop Now</b>
            </button>
          </div>
        </div>
      </div>

      <div className="fourContainer">
        <div className="color3">
          <div className="fourContainerBox">
            <Image className="img21" src="/04a.png" alt="" width={400} height={400} />
          </div>
          <div className="matter">
            
            <h2 className="popupar">Popular Products</h2>
            <p className="ipad">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="buttonFour">
              <b>Shop Now</b>
            </button>
          </div>
        </div>
      </div>

      <div className="fourContainer">
        <div className="color4">
          <div className="fourContainerBox">
            <Image className="img21" src="/03a.png" alt="" width={4000} height={400} />
          </div>
          <div className="matterColor">
            <div className="matter">
           
              <h2 className="popupar">Popular Products</h2>
              <p className="ipad">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <button className="buttonFour4">
                <b>Shop Now</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
