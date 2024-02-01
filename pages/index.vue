<template>
	<article>
    <section>
      <div class="space-y-6">
        <p class="text-base font-light tracking-wide mt-4 font-serif">
          I'm a software engineer with  ~{{(new Date().getFullYear()) - 2017}} years of experience in building web sites and applications. My focus is mostly in front-end development but I am able to design user interfaces and I have also worked in the back-end.  
        </p>
        <p>
          I'm currently available for freelance work (development and consulting) and also open to mid/senior roles that will push me to strengthen my leadership and mentoring skills.
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
              <h4 class="font-sans font-semibold">DART One Year: From Impact to Innovation</h4>
              <p class="text-sm my-2">Another developer and I tag-teamed this interactive website and had a lot of fun with gsap timelines with Nuxt.</p>
              <InlineLink href="https://secwww.jhuapl.edu/dart-one-year-anniversary/" target>View DART One Year site</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">2022 Annual Report for JHU APL</h4>
              <p class="text-sm my-2">Developed the interface and content management for the Applied Physics Laboratory's Annual Report.</p>
              <InlineLink href="https://secwww.jhuapl.edu/2022-Annual-Report/" target>View Annual Report</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">2022 Diversity, Equity and Inclusion Annual Report for JHU APL</h4>
              <p class="text-sm my-2">Lead development & content management for the DEI report for the Applied Physics Laboratory.</p>
              <InlineLink href="https://www.jhuapl.edu/Diversity-Equity-Inclusion-Annual-Report-2022/" target>View DEI Report</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">JHU APL Website</h4>
              <p class="text-sm my-2">Served as a technical consultant for APL's primary external website.</p>
              <InlineLink href="https://www.jhuapl.edu" target>View APL Website</InlineLink>
            </div>
          </li>
          <li>
            <div>
              <h4 class="font-sans font-semibold">MSBA Website</h4>
              <p class="text-sm my-2">Developed many front-end components, the page-builder for marketing pages and premium features for members.</p>
              <InlineLink href="https://www.msba.org" target>View MSBA.org</InlineLink>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-8 border-secondary">
        <h3 class="mt-8 text-secondary text-xs font-sans font-medium">Let's Connect</h3>
        <table class="mt-2">
          <tr>
            <td class="text-gray-300 font-medium">Twitter</td>
            <td class="pl-16"><InlineLink href="https://twitter.com/timuism">@timuism</InlineLink></td>
          </tr>
          <tr>
            <td class="text-gray-300 font-medium">GitHub</td>
            <td class="pl-16"><InlineLink href="https://github.com/timuism">timuism</InlineLink></td>
          </tr>
          <tr>
            <td class="text-gray-300 font-medium">Email</td>
            <td class="pl-16"><InlineLink href="mailto:tim@timuism.com">tim@timuism.com</InlineLink></td>
          </tr>
        </table>

        <p class="mt-4">Check out my <InlineLink href="/links">Links</InlineLink> page for more of my socials and InlineLinks</p>
      </div>
    </section>
  </article>


</template>