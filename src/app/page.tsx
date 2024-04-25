import Image from "next/image";
import Answer1, { UserImg } from "./Components/Answer1";
import Question1 from "./Components/Question1";
import BottomIcon from "./Components/BottomIcon";


export function LeftArrow(){
  return (
    <svg width="23" height="26" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.878681 20.8787C-0.292892 22.0502 -0.292893 23.9497 0.878681 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.78679C23.0416 0.615221 21.1421 0.615221 19.9706 1.78679L0.878681 20.8787ZM43 20L3 20L3 26L43 26L43 20Z" fill="#F8F8F8"/>
</svg>

  )
}

export default function Home() {

  

  return (
    <main className="mb-4">
      <div className="mb-2">
      <nav className="text-white flex justify-between items-center">
        <div>
          <h1>The Product Platform</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="p-3">
            Learn
          </div>

          <div className="p-3">
            Practise
          </div>

          <div className="p-3">
            <UserImg />
          </div>
        </div>
      </nav>
      <hr />
      </div>
      <div>
        <div className="text-white flex items-center mb-3 ml-16">
          <LeftArrow /> <span className=" px-3">Back To Questions</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        
        <Question1 />
        <Answer1 />
      </div>
      <BottomIcon />
    </main>
  );
}
