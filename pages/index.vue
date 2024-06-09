<template>
	<article>
    <section>
      <div class="space-y-6">
        <p class="text-base font-light tracking-wide mt-4 font-serif">
          I'm a software engineer with  ~{{(new Date().getFullYear()) - 2017}} years of experience in building web sites and applications. My focus is mostly in front-end development but I am able to design user interfaces and I have also worked in the back-end.  
        </p>
        <p>
          I am currently looking for new opportunities (both full-time, part-time or freelance) so feel free to reach out if you think I'd be a good fit for your team or project. 
        </p>

        <p>
          Say hello by <InlineLink href="mailto:tim@timuism.com" >sending me an email</InlineLink> if you'd like to work together or just chat!
        </p>
      </div>

      
      <div class="mt-8 pl-6 border-l-2 border-secondary">
        <h3 class="text-secondary text-xs font-sans font-medium inline-block leading-none">Recent Work</h3>
        <ul class="mt-2 space-y-6">
          <li>
            <div>
              <h4 class="font-sans font-semibold">Into Vanishing Ice</h4>
              <p class="text-sm my-2">A 4-part scrollytelling website about Arctic research done by JHU APL. Built with Vue.</p>
              <InlineLink href="https://secwww.jhuapl.edu/johns-hopkins-apl-arctic-climate-research/" target>View Scrollytelling Site</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">DART One Year: From Impact to Innovation</h4>
              <p class="text-sm my-2">Another developer and I tag-teamed this interactive website and had a lot of fun with gsap timelines with Nuxt.</p>
              <InlineLink href="https://secwww.jhuapl.edu/dart-one-year-anniversary/" target>View DART One Year site</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">Annual Reports for JHU APL</h4>
              <p class="text-sm my-2">Developed the interface and content management for the Applied Physics Laboratory's Annual Report.</p>
              <p class="space-x-2">
                <span class="font-sans font-semibold">Explore Annual Reports:</span>
                <InlineLink href="https://secwww.jhuapl.edu/2023-Annual-Report/" target>2023</InlineLink>
                <InlineLink href="https://secwww.jhuapl.edu/2022-Annual-Report/" target>2022</InlineLink>
                <InlineLink href="https://secwww.jhuapl.edu/2021-Annual-Report/" target>2021</InlineLink>
              </p>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">Diversity, Equity and Inclusion Annual Reports for JHU APL</h4>
              <p class="text-sm my-2">Lead development & content management for the DEI report for the Applied Physics Laboratory.</p>
              <p class="space-x-2">
                <span class="font-sans font-semibold">Explore DEI Annual Reports:</span>
                <InlineLink href="https://www.jhuapl.edu/Diversity-Equity-Inclusion-Annual-Report-2023/" target>2023</InlineLink>
                <InlineLink href="https://www.jhuapl.edu/Diversity-Equity-Inclusion-Annual-Report-2022/" target>2022</InlineLink>
                <InlineLink href="https://www.jhuapl.edu/Diversity-Inclusion-Annual-Report-2021/" target>2021</InlineLink>
              </p>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">JHU APL Website</h4>
              <p class="text-sm my-2">Served as a technical consultant for APL's primary external website.</p>
              <InlineLink href="https://www.jhuapl.edu" target>View APL Website</InlineLink>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-8 border-secondary">
        <h3 class="mt-8 text-secondary text-xs font-sans font-medium">Let's Connect</h3>
        <table class="mt-2">
          <tr>
            <td class="text-gray-300 font-medium">GitHub</td>
            <td class="pl-16"><InlineLink href="https://github.com/timuism">timuism</InlineLink></td>
          </tr>
          <tr>
            <td class="text-gray-300 font-medium">Email</td>
            <td class="pl-16"><InlineLink href="mailto:tim@timuism.com">tim@timuism.com</InlineLink></td>
          </tr>
        </table>

        <p class="mt-4">Check out my <InlineLink href="/links">Links</InlineLink> page for more of my socials and links.</p>
      </div>
    </section>
  </article>


</template>