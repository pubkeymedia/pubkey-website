import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-grow p-8">
      <div className="w-full">
        <img
          className="h-[569px] object-cover mb-12"
          width="100%"
          src="https://placebeard.it/800/500"
        />
        <div className="gap-8 grid grid-cols-2 grid-rows-6">
          <img className="row-span-2" src="https://placebeard.it/800/400" />
          <img className="h-full row-span-3" width="100%" src="https://placebeard.it/800/400" />
          <img className="h-full row-span-3" width="100%" src="https://placebeard.it/800/400" />
          <img className="h-full row-span-3" width="100%" src="https://placebeard.it/800/400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
