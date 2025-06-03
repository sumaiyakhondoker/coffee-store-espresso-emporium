import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(/more/3.png)] h-[800px] '>
            <div className='max-w-7xl h-full mx-auto flex justify-center items-center lg:justify-end '>
                <div className='max-w-2xl text-white px-5 lg:px-0'>
                <h3 className="text-5xl mb-0">Would you like a Cup of Delicious Coffee?</h3>
                <p className='mt-4 mb-8 font-raleway'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn bg-[#e3b577]  hover:bg-transparent text-[#242222] text-xl hover:text-white hover:border-white mt-0 px-6">Learn More</button>
            </div>
            </div>
        </div>

        {/* lower part */}
        <div className='bg-[#eceae3]'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-0  gap-12 py-12 text-[#331a15]  '>
            <div>
                <img src="/icons/1.png" alt="" />
                <h3 className='text-3xl mt-4'>Awesome Aroma</h3>
                <p className='font-raleway text-[#1b1a1a]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src="/icons/2.png" alt="" />
                <h3 className='text-3xl mt-4'>High Quality</h3>
                <p className='font-raleway text-[#1b1a1a]'>We served the coffee to you maintaining the best quality </p>
            </div>
            <div>
                <img src="/icons/3.png" alt="" />
                <h3 className='text-3xl mt-4'>Pure Grades</h3>
                <p className='font-raleway text-[#1b1a1a]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src="/icons/4.png" alt="" />
                <h3 className='text-3xl mt-4'>Proper Roasting</h3>
                <p className='font-raleway text-[#1b1a1a]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>

        </div>
        </div>

        </div>
    );
};

export default Banner;