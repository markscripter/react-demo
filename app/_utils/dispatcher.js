import Bacon from 'baconjs';

const Dispatcher = () => {
  let busCache = {}

  return {
    stream(name) {
      return bus(name)
    },
    push(name, value) {
      bus(name).push(value)
    },
    plug(name, value) {
      bus(name).plug(value)
    }
  };

  function bus(name) {
    return busCache[name] = busCache[name] || new Bacon.Bus()
  }
};

export default Dispatcher();
