import React from 'react';
import ReactDOM from 'react-dom/client';
import AutoSlide from './AutoSlide';
import ItemList from './ItemList';


const SlideBlock = ReactDOM.createRoot(document.getElementById('auto-carousel'));
SlideBlock.render(
  <AutoSlide />
);

const ItemListBlock = ReactDOM.createRoot(document.querySelector('.item-list'));
ItemListBlock.render(
  <ItemList />
);
