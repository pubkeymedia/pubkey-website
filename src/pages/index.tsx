import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import landingPageImg from '../../public/images/landing-page.gif';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-y-8">
      <Image alt="Homepage" height={420} width={880} src={landingPageImg} />
      <div className="flex flex-col items-center text-3xl">
        <p className="uppercase tracking-widest">Enter?</p>
        <YesNoSelection />
      </div>
    </div>
  );
};

const YesNoSelection: React.FC = () => {
  const yesRef = useRef<HTMLAnchorElement>(null);
  const noRef = useRef<HTMLAnchorElement>(null);
  // const { push } = useRouter();
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

  // useEffect(() => {
  //   const skipSplash = localStorage.getItem('skipSplash');
  //   if (skipSplash === 'true') {
  //     push('/home');
  //   }
  // }, [push]);

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
        <Link
          className="flex focus:outline-0"
          onClick={() => localStorage.setItem('skipSplash', 'true')}
          ref={yesRef}
          href="/home"
        >
          <p>Yes</p>
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
          <p>No</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
