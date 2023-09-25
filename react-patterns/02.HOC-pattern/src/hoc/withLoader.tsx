import React from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export default function withLoader(Element, url) {
  return (props) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */
    const [listings, setListings] = React.useState([]);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setListings(res.listings));
    }, []);

    if (!listings.length) return null;

    return listings ? (
      <Element {...props} listings={listings} />
    ) : (
      <LoadingSpinner />
    );
  };
}
