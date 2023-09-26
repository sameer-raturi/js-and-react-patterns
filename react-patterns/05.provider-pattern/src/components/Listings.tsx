import React, { useContext } from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import { listingContext } from '../context/ListingContext';

export default function Listings() {
  const listings = useContext(listingContext);

  if (!listings) return null;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
