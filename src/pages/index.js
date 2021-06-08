import * as React from "react";
import "../styles/global.css";
import Card from '../components/card';
import Link from '../components/link';
import TimLongSquareSmall from "../images/TimLongSquareSmall.jpg";
import TimLongWebDeveloperResume from "../files/TimLongWebDeveloperResume.pdf";

const navLinkClassList = "text-primary-1 text-xl font-semibold no-underline hover:text-primary-2 hover:underline";
const links = [
  {href: 'https://github.com/timuism', text: 'GitHub'},
  {href: 'https://twitter.com/timuism', text: 'Twitter'},
  {href: 'https://www.linkedin.com/in/timuism/', text: 'LinkedIn'},
  {href: 'mailto:tim@timuism.net', text: 'Email Me'},
]

const IndexPage = () => {
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

        <Card>
          <div className="space-y-5">
            <p className={"text-2xl"}>
                I'm Tim Long. A Web Developer in Baltimore, Maryland.
            </p>
            <p className={"text-2xl"}>
              While my role at <Link href="https://blueoceanideas.com" text="Blue Ocean Ideas" /> keeps me busy enough, I am also looking to take on small freelance projects. If you are looking for logo design, UI design, front-end development or consulting, I'd love to hear from you!
            </p>
            <p className={"text-2xl"}> 
              I also play bass & make <Link href="https://soundcloud.com/timuism" text="music" />.
            </p>
          </div>

          <nav className="flex flex-col justify-start pt-8 space-y-2 md:space-y-0 md:space-x-8 md:flex-row">
            {links.map(link => <Link href={link.href} text={link.text} classList={navLinkClassList} />)}
          </nav>
          
        </Card>

        <Card>
          <section className="flex flex-col items-center justify-center">
            <h5 className="pb-1 mb-5 uppercase border-b border-dotted opacity-75 border-gray-1">
              What's New
            </h5>
            
            <ul className="space-y-4 divide-y divide-primary-1">
              <li class="p-4 space-y-6">
                <a 
                  href="https://purposeovaeverything.com" 
                  target="_blank noopener noreferrer"
                >
                  <h2 className="text-xl font-bold">Purpose Ova Everything Website</h2>
                  <p>
                    An online store designed and developed by me and built with shopify.
                  </p>
                </a>
                <div>
                    <a 
                      href="https://purposeovaeverything.com"
                      className="p-4 text-white transition duration-300 rounded-lg bg-primary-1 hover:bg-primary-2"
                      role="button"
                    >
                      View Site
                    </a>
                  </div>
              </li>

              <li className="p-4 space-y-6">
                <a 
                  href="https://aprilcooksalon.com" 
                  target="_blank noopener noreferrer"
                >
                  <h2 class="text-xl font-bold">April Cook Salon</h2>
                  <p>
                    A site for a local business that provides hair, makeup, styling services and individuals and events. The focus was for the client to be able to manage the site on her own going forward and to provide online booking. I served as a web consultant and helped build a custom WIX theme
                  </p>
                </a>
                <div>
                    <a 
                      href="https://aprilcooksalon.com "
                      className="p-4 text-white transition duration-300 rounded-lg bg-primary-1 hover:bg-primary-2"
                      role="button"
                    >
                      View Site
                    </a>
                  </div>
              </li>
            </ul>
          </section>
        </Card>

      </div>
    </main>
  )
}

export default IndexPage
