import * as React from 'react';
import './style.css';
import Listings from './components/Listings';
import Input from './components/Input';
import { ListingContextProvider } from './context/ListingContext';

export default function App() {
  return (
    <ListingContextProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3em',
        }}
      >
        <Input />
        <Listings />
      </div>
    </ListingContextProvider>
  );
}
