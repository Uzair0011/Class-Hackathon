import Main from "./Components/Main/main";
import MacPage from "./Components/MacPage/page";
import Category from "./Components/Category/page";
import New from "./Components/New/page";
import Four from "./Components/four/page";
import New2 from "./Components/New2/page";

export default function Home() {
  return (
    <div>
      <Main />
      <MacPage />
      <Category />
      <New />
      <Four />
      <New2 />
    </div>
  );
}
