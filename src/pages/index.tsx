import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div>
      <img height={500} width={800} src="https://placebeard.it/800/500" />
      <div className="flex flex-col items-center">
        <p>Enter?</p>
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
    document.addEventListener('keyup', onKeyup);
    return () => document.removeEventListener('keyup', onKeyup);
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      {focusedElem === 'yes' ? (
        <div className="flex items-center">
          <AiFillCaretRight className="flex text-sm" />
        </div>
      ) : (
        <div />
      )}
      <Link href="/home">
        <a className="flex focus:outline-0" ref={yesRef}>
          <p>Yes</p>
        </a>
      </Link>
      {focusedElem === 'no' ? (
        <div className="flex items-center">
          <AiFillCaretRight className="flex text-sm" />
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
  );
};

export default Home;
