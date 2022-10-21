import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-y-8">
      <img height={500} width={800} src="https://placebeard.it/800/500" />
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
        <Link href="/home">
          <a className="flex focus:outline-0" ref={yesRef}>
            <p>Yes</p>
          </a>
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
        <Link href="/try-again">
          <a className="flex focus:outline-0" ref={noRef}>
            <p>No</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
