import React from 'react';
import Image from 'next/image';

const Whole = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-full"
        src="/images/whole/whole_bg.jpg"
      />
      <div className="mt-4">
        <a
          className="hover:text-gray-700 mr-4"
          href="https://www.youtube.com/watch?v=3cJwVT1RyWE"
          target="_blank"
          rel="noreferrer"
        >
          WHOLE
        </a>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}

export default Whole;