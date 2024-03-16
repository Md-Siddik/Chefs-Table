const Banner = () => {
    return (
        <div class="hero banner rounded-3xl">
            <div class="hero-overlay bg-opacity-20 rounded-3xl"></div>
            <div class="hero-content text-center text-neutral-content w-[75%] py-[120px]">
                <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p class="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <button class="btn rounded-full bg-[#0be58a] border-none text-lg px-5 mx-3">Explore Now</button>
                    <button class="btn rounded-full bg-[transparent] border-[1px] text-lg px-5 mx-3 text-white">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;