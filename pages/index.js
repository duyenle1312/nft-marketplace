import { useEffect, useState, useRef, useContext } from 'react';
import { Banner, CreatorCard } from '../components';
import { makeId } from '../utils/makeId';
import images from '../assets';

const Home = () => {
  const scrollRef = useRef(null);
  const parentRef = useRef(null);
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name={(<>Discover, collect, and sell <br /> extraordinary NFTs</>)}
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyle="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />
      </div>
      <div>
        <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
          <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
            {/* {creators.map((creator, i) => (
            <CreatorCard
              key={creator.seller}
              rank={i + 1}
              creatorImage={images[`creator${i + 1}`]}
              creatorName={shortenAddress(creator.seller)}
              creatorEths={creator.sumall}
            />
          ))} */}
            {[6, 7, 8, 9, 10].map((i) => (
              <CreatorCard
                key={`creator-${i}`}
                rank={i}
                creatorImage={images[`creator${i}`]}
                creatorName={`0x${makeId(3)}...${makeId(4)}`}
                creatorEths={10 - i * 0.534}
              />
            ))}
            {/* {!hideButtons && (
          <>
            <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0">
              <Image src={images.left} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
            </div>
            <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0">
              <Image src={images.right} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
            </div>
          </>
          )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
