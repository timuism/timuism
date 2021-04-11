import * as React from "react";
import "../styles/global.css";
import Card from '../components/card';
import Link from '../components/link';
// import "@fontsource/vampiro-one";
import TimLongSquareSmall from "../images/TimLongSquareSmall.jpg";

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
      <header className={"flex justify-center md:justify-start items-center w-full bg-primary-1 px-12 py-5 border-b-4 border-primary-2"}>
        <div className="flex items-center justify-start" style={{maxWidth: "1440px"}}>
          <img src={TimLongSquareSmall} className={"border-primary-2 rounded-full bg-green-100 border-2 mr-5 md:mx-5"} alt="tim long" />
          <h1 className={"hidden"}>Tim Long (timuism)'s Virtual Home</h1>
          <h2 className="text-3xl md:text-5xl text-secondary-1 font-logo" style={{textShadow: "2px 2px 0px rgba(0, 0, 0, 0.25)"}}>timuism</h2>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center max-w-3xl">

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

        <section className="flex flex-col items-center justify-center p-12 m-5">
          <h5 className="pb-1 mb-5 uppercase border-b border-dotted opacity-75 border-gray-1">What's New</h5>
          <p class="text-xl opacity-50">No Projects, Articles, or Links at this time <span role="img">😭</span></p>
        </section>

      </div>
    </main>
  )
}

export default IndexPage
