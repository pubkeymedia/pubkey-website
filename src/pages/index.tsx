import { Transition } from '@headlessui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import landingPageImg from '../../public/images/landing-page/landing-page.gif';

const Home: NextPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const popupTimeout = setTimeout(() => setShowPopup(true), 2_500);
    return () => clearTimeout(popupTimeout);
  }, []);

  return (
    <div id="container" className="flex flex-col h-full items-center justify-center gap-y-8">
      <div className="relative">
        <Transition
          className="absolute h-16 w-36 sm:h-32 sm:w-48 md:h-44 md:w-52 -top-8 sm:top-16 left-1/2 sm:left-2/3 lg:left-auto lg:-right-12 lg:top-1/2"
          enter="transition-transform duration-200 ease-in"
          enterFrom="scale-0 rotate-180"
          enterTo="scale-100 rotate-0"
          show={showPopup}
        >
          <Link href="/shop">
            <Image
              alt="Homepage"
              className="animate-bounce"
              height={169}
              width={210}
              src="/images/landing-page/popup.svg"
            />
          </Link>
        </Transition>
        <Image alt="Homepage" height={420} width={880} src={landingPageImg} />
      </div>
      <div className="flex flex-col items-center text-3xl">
        <p className="uppercase tracking-widest">Enter?</p>
        <YesNoSelection />
      </div>
      <style jsx>{`
        #container {
          background-image: url('/images/bg.gif');
        }
      `}</style>
    </div>
  );
};

const YesNoSelection: React.FC = () => {
  const yesRef = useRef<HTMLAnchorElement>(null);
  const noRef = useRef<HTMLAnchorElement>(null);
  const [focusedElem, setFocusedElem] = useState<'yes' | 'no'>('yes');

  useEffect(() => yesRef.current?.focus(), []);

  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        const { activeElement } = document;
        if (activeElement === yesRef.current) {
          noRef.current?.focus();
          setFocusedElem('no');
        } else {
          yesRef.current?.focus();
          setFocusedElem('yes');
        }
      }
    };
    document.addEventListener('keydown', onKeyup);
    return () => document.removeEventListener('keydown', onKeyup);
  }, []);

  return (
    <div>
      <div className="relative">
        {focusedElem === 'yes' ? (
          <div className="absolute flex items-center right-14 top-0 bottom-0 my-auto">
            <AiFillCaretRight className="flex text-2xl" />
          </div>
        ) : (
          <div />
        )}
        <Link className="flex focus:outline-0" prefetch={false} ref={yesRef} href="/home">
          Yes
        </Link>
      </div>
      <div className="relative">
        {focusedElem === 'no' ? (
          <div className="absolute flex items-center right-14 top-0 bottom-0 my-auto">
            <AiFillCaretRight className="flex text-2xl" />
          </div>
        ) : (
          <div />
        )}
        <Link className="flex focus:outline-0" href="/try-again" ref={noRef}>
          No
        </Link>
      </div>
    </div>
  );
};

export default Home;
