import React, { useCallback, useContext, useState } from 'react';

const FlyoutContext = React.createContext(null);

const FlyoutContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const toggle = () => setOpen((open) => !open);
  return (
    <FlyoutContext.Provider value={{ open, value, setValue, toggle }}>
      {props.children}
    </FlyoutContext.Provider>
  );
};

const Input = (props) => {
  const { value, toggle, setValue } = useContext(FlyoutContext);
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter an address, city ,or ZIP code"
      {...props}
    />
  );
};

const Item = (props) => {
  const { listing } = props;
  const { setValue } = useContext(FlyoutContext);
  return (
    <li
      key={listing.id}
      onMouseDown={() => {
        setValue(listing.name);
      }}
      className="flyout-list-item"
    >
      {listing.name}
    </li>
  );
};

const List = (props) => {
  const { open } = useContext(FlyoutContext);
  return (
    open && (
      <div className="flyout-list">
        <ul>{props.children}</ul>
      </div>
    )
  );
};

const FlyOut = (props) => {
  return (
    <FlyoutContextProvider>
      <div className="flyout">{props.children}</div>
    </FlyoutContextProvider>
  );
};

FlyOut.Item = Item;
FlyOut.Input = Input;
FlyOut.List = List;

export default FlyOut;
