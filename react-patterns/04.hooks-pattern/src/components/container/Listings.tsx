import React from "react";
import { Listings } from "../presentational/Listings";
import { useListings } from "../../hooks/useListings";
import { useHover } from "../../hooks/useHover";

export default function ListingsContainerComponent() {
  const data = useListings();
  const [ref, isHovering] = useHover();

  React.useEffect(() => {
    if (isHovering) {
      // Add logic here
    }
  }, [isHovering]);

  if (!data) return null;
  return (
    <div ref={ref}>
      <Listings listings={data.listings} />
    </div>
  );
}
