import Link from "next/link";
import Image from "next/image";

import "./style.css";
export default function Header() {
  return (
    <div className="parentContainer">
      <div className="childContainer">
        <div className="logo">
          <Image src="/logo.png" alt="Company logo" width={80} height={80} />
        </div>

        <div className="box">
          <div className="search">
            <Image src="/search.png" alt="search" width={20} height={20} />
          </div>
          <h1>search</h1>
        </div>
        <ul className="navbar">
          <Link href={"/"}>
            <li>Home </li>
          </Link>
          <Link href={"/Components/About"}>
            <li className="opp">About</li>
          </Link>
          <Link href={"/Components/Contact"}>
            <li className="opp">Contact us</li>
          </Link>
          <Link href={"/Components/Blog"}>
            <li className="opp">Blog</li>
          </Link>
        </ul>

        <div className="icon">
          <Image src="/heart.png" alt="pic1" width={20} height={20} />
          <Image src="/man.png" alt="pic3" width={20} height={20} />
          <Image src="/trolly.png" alt="pic2" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
