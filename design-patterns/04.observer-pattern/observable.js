let observers = [];

export default Object.freeze({
  notify: (data) =>
    observers.forEach((observer) => {
      console.log("calling ", observer);
      observer(data);
    }),
  subscribe: (func) => {
    console.log("subscribing ", func);
    observers.push(func);
  },
  unsubscribe: (func) => observers.filter(observers !== func),
});
