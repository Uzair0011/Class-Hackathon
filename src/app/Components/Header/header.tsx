import Link from "next/link";


import "./style.css";
export default function Header() {
  return (
    <div className="parentContainer">
      <div className="childContainer">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="box">
          <div className="search">
            <img src="/search.png" alt="search" />
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
          <img className="iconSize1" src="/heart.png" alt="pic1" />
          <img className="iconSize1" src="/trolly.png" alt="pic2" />
          <img className="iconSize1" src="/man.png" alt="pic3" />
        </div>
      </div>
    </div>
  );
}
