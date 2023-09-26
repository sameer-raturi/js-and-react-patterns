import React from 'react';
import { useListingsContext } from '../context/ListingsProvider';
import FlyOut from './flyout/Flyout';
export default function Input(props) {
  const listings = useListingsContext();

  return (
    <FlyOut>
      <FlyOut.Input />
      <FlyOut.List>
        {listings.map((listing) => (
          <FlyOut.Item listing={listing} />
        ))}
      </FlyOut.List>
    </FlyOut>
  );
}
