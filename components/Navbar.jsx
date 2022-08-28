import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '.';
import images from '../assets';

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;
  return hasConnected ? (
    <Button
      btnName="Create"
      handleClick={() => {
        setActive('');
        router.push('/create-nft');
      }}
      classStyle="mx-2 rounded-xl"
    />
  ) : (
    <Button btnName="Connect" classStyle="mx-2 rounded-xl" />
  );
};

const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/created-nfts';
      case 2:
        return '/my-nfts';
      default:
        return '/';
    }
  };
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && 'flex-col h-full'
      }`}
    >
      {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);

            if (isMobile) setIsOpen(false);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
          ${
            active === item
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
          } 
          ${isMobile && 'my-5 text-xl'}`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Explore NFTs');
  const router = useRouter();
  console.log({ theme });
  console.log(active);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter cursor-pointer" onClick={() => {}}>
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={32}
            />
            <p className="md:hidden dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              CryptoKet
            </p>
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        {/* Desktop */}
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
          <div>
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="hidden md:flex ml-2">
        {!isOpen
          ? (
            <Image
              src={images.menu}
              objectFit="contain"
              width={25}
              height={25}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          )
          : (
            <Image
              src={images.cross}
              objectFit="contain"
              width={20}
              height={20}
              alt="close"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'light' && 'filter invert'}
            />
          )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
