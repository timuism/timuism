import React from "react";
import TimLongSquareSmall from "../../images/TimLongSquareSmall.jpg";
import TimLongWebDeveloperResume from "../../files/TimLongWebDeveloperResume.pdf";

const PageTemplate = ({children}) => {
    return (
        <main className="flex flex-col items-center justify-center text-gray-1 font-display">
          
          <div id="banner" class="bg-green-500 text-white p-3 w-full text-center">
            <p>Looking for my <strong>resume</strong>? <a href={TimLongWebDeveloperResume} class="underline hover:opacity-80 transition duration-300">You can download it here!</a></p>
          </div>
    
          <header className={"flex justify-center md:justify-start items-center w-full bg-primary-1 px-12 py-5 border-b-4 border-primary-2"}>
            <div className="flex items-center justify-start" style={{maxWidth: "1440px"}}>
              <img src={TimLongSquareSmall} className={"border-primary-2 rounded-full bg-green-100 border-2 mr-5 md:mx-5"} alt="tim long" />
              <h1 className={"hidden"}>Tim Long (timuism)'s Virtual Home</h1>
              <h2 className="text-3xl md:text-5xl text-secondary-1 font-logo" style={{textShadow: "2px 2px 0px rgba(0, 0, 0, 0.25)"}}>timuism</h2>
            </div>
          </header>
    
          <div className="flex flex-col items-start justify-center max-w-7xl md:flex-row md:p-12">
    
            {children}
    
          </div>
        </main>
    );
}

export default PageTemplate;