import React from "react";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingGrid";

export default function Listings(props) {
  const { data } = props;

  if (!data) return null;

  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
