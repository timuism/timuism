<template>
    <main class="w-screen h-screen pt-24 pl-40 text-white border-t-8 bg-sand border-sand-dark font-dmsans">
        <div class="flex flex-col max-w-screen-xl mx-auto my-12 space-x-56 md:flex-row item-center">
            <header class="font-dmserif border-l-4 border-white/50 space-y-24 pl-12 py-12 lowercase min-w-[360px]">
                <h1 class="text-6xl">tim _u _ism</h1>
                <h2 class="flex flex-col space-y-4 text-4xl">
                    <span>Web Developer</span>
                    <span>& Musician</span>
                </h2>
            </header>

            <section class="md:relative space-y-16 text-2xl min-w-[300px] pr-12">
                <img src="@/assets/JoinedCircles.svg" alt="Two Overlapping Circles" class="md:absolute min-w-[250px] min-h-[190px]" />

                <article class="-mt-16 space-y-8 md:absolute">
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
        
        <section class="flex items-center max-w-screen-xl pt-12 mx-auto space-x-12 lowercase">
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
