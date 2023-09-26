import React from 'react';

export const listingContext = React.createContext(null);

export const ListingContextProvider = (props) => {
  const [listings, setListings] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);
  return (
    <listingContext.Provider value={listings}>
      {props.children}
    </listingContext.Provider>
  );
};

// const listingContextConsumer = (wrappedComponent) => (props) => {
//   return (
//     <listingContext.Consumer>
//       ({listings}) => <wrappedComponent {...props} listings={listings} />
//     </listingContext.Consumer>
//   );
// };

export default function useListings() {
  const [listings, setListings] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);
  return listings;
}
