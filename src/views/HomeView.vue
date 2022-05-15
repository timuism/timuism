<template>
    <main class="text-white border-t-8 md:pt-24 md:pl-40 md:w-screen md:h-screen bg-sand border-sand-dark font-dmsans">
        <div class="flex flex-col max-w-screen-xl mx-auto my-12 md:space-x-56 md:flex-row item-center">
            <header class="font-dmserif md:border-l-4 border-white/50 space-y-6 md:space-y-24 md:pl-12 py-12 lowercase min-w-[360px] mx-auto md:mx-0">
                <h1 class="text-6xl">tim _u _ism</h1>
                <h2 class="flex flex-col space-y-4 text-4xl">
                    <span>Web Developer</span>
                    <span>& Musician</span>
                </h2>
            </header>

            <section class="relative md:space-y-16 text-2xl md:pr-12 min-w-[250px] mx-auto md:mx-0">
                <img src="@/assets/JoinedCircles.svg" alt="Two Overlapping Circles" class="md:absolute mx-auto min-h-[190px]" />

                <article class="px-4 -mt-40 space-y-8 md:px-0 md:-mt-16 md:absolute w-[250px] mx-auto md:mx-0">
                    <p>
                        <span class="font-dmserif">You</span>
                        are somebody different to everyone you meet
                    </p>

                    <p>
                        and still, you are always
                        <span class="font-dmserif">you</span>.
                    </p>
                </article>
            </section>
        </div>
        
        <section class="flex flex-col items-center max-w-screen-xl pt-12 pb-24 mx-16 space-y-8 lowercase border-t-4 md:pb-0 md:mx-auto md:flex-row md:space-y-0 md:space-x-12 border-white/10 md:border-0">
            <a href="https://detached.dev" target="_new" class="px-8 py-6 space-y-4 duration-200 hover:bg-dt-gray hover:text-dt-yellow rounded-xl">
                <div class="text-5xl">Detached</div>
                <div class="text-xs">(A Web Development Blog)</div>
            </a>

            <a href="https://subatmc.co" target="_new" class="px-8 py-6 space-y-4 duration-200 hover:bg-black hover:text-sb-gold rounded-xl">
                <div class="text-5xl">Subatmc</div>
                <div class="text-xs">(original music)</div>
            </a>

            <a href="https://github.com/timuism" target="_new" class="px-8 py-6 space-y-4 duration-200 hover:bg-sand-dark hover:text-white rounded-xl">
                <div class="text-5xl">Projects</div>
                <div class="text-xs">(code code code)</div>
            </a>
        </section>
    </main>
</template>
