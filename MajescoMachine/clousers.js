var counter = (() => {
  current = 0;
  return {
    increment: function() {
      current += 1;
    },
    decrement: function() {
      current += 1;
    },
    currentValue: function() {
      return current;
    }
  };
})();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.currentValue());
