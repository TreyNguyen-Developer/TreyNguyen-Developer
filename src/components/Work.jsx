import React from 'react'
import BlackliteDistrict from '../assets/projects/blacklitedistrict.png'
import BrandonJonesBand from '../assets/projects/brandonjonesband.png'
import BryanLoweree from '../assets/projects/byranloweree.png'
import ChanceyWilliams from '../assets/projects/chanceywilliams.png'
import JustJymnastics from '../assets/projects/justjymnastics.png'
import LoudAmerican from '../assets/projects/loudamericanfoodtruck.png'
import BeerFest from '../assets/projects/mountainwestbeerfest.png'
import WhiskeyFest from '../assets/projects/mountainwestwhiskeyfestival.png'
import OfficialSturgis from '../assets/projects/officialsturgisevents.png'
import Pheasants from '../assets/projects/pheasantsonkaracreek.png'
import RapidCityPolice from '../assets/projects/rapidcitypolicejobs.png'
import RapidSpa from '../assets/projects/rapidspa.png'
import SDCard from '../assets/projects/southdakotacard.png'
import ThePark from '../assets/projects/thepark707.png'
import VoteBlackHills from '../assets/projects/voteblackhills.com.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] xl:max-w-[1440px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-200'>Work</p>
          <p className='py-6'>// Check out some of my recent work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${BlackliteDistrict})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Blacklite District</span>
              <div className='pt-8 text-center'>
                <a href="https://blacklitedistrict.net/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${BrandonJonesBand})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Brandon Jones Band</span>
              <div className='pt-8 text-center'>
                <a href="https://brandonjonesband.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${BryanLoweree})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Bryan Loweree</span>
              <div className='pt-8 text-center'>
                <a href="https://bryanloweree.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${ChanceyWilliams})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Chancey Williams</span>
              <div className='pt-8 text-center'>
                <a href="https://chanceywilliams.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${JustJymnastics})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Just Jymnastics</span>
              <div className='pt-8 text-center'>
                <a href="https://justjymnastics.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${LoudAmerican})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Loud American Foodtruck</span>
              <div className='pt-8 text-center'>
                <a href="https://loudamericanfoodtruck.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${BeerFest})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Mountain West Beer Fest</span>
              <div className='pt-8 text-center'>
                <a href="https://mountainwestbeerfest.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${WhiskeyFest})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Mountain West Whiskey Festival</span>
              <div className='pt-8 text-center'>
                <a href="https://mountainwestwhiskeyfestival.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${OfficialSturgis})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Official Sturgis Events</span>
              <div className='pt-8 text-center'>
                <a href="https://officialsturgisevents.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Pheasants})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Pheasants on Kara Creek</span>
              <div className='pt-8 text-center'>
                <a href="https://pheasantsonkaracreek.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${RapidCityPolice})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Rapid City Police Jobs</span>
              <div className='pt-8 text-center'>
                <a href="https://rapidcitypolicejobs.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${RapidSpa})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Rapid Spa</span>
              <div className='pt-8 text-center'>
                <a href="https://rapidspa.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${SDCard})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>South Dakota Card</span>
              <div className='pt-8 text-center'>
                <a href="https://southdakotacard.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${ThePark})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>The Park 707</span>
              <div className='pt-8 text-center'>
                <a href="https://thepark707.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${VoteBlackHills})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>Vote Black Hills</span>
              <div className='pt-8 text-center'>
                <a href="http://www.voteblackhills.com/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
