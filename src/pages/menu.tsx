import { sample } from 'lodash';
import React from 'react';

const Menu = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      {theMenu.map(({ description, name }) => (
        <div key={name}>
          <p className="text-xl tracking-widest">
            {name} - {sample(['$4.20', '$0.69'])}
          </p>
          <p className="text-sm tracking-wide">{description}</p>
        </div>
      ))}
    </div>
  );
};

const theMenu = [
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Hot dog 1',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Hot dog 2',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Hot dog 3',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Hot dog 4',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Fries',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Wings',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Burger',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Sandwich',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Mystery box',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Cole slaw',
  },
  {
    description:
      'Spicy jalapeno shankle leberkas t-bone alcatra porchetta pork. Chislic drumstick cow ham burgdoggen, tongue ground round tri-tip pancetta pork loin porchetta pork chop.',
    name: 'Beef Jerky',
  },
];

export default Menu;
