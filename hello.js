const data = {
  name: 'javascript',
  email: 'javascript@test.com'
};

function enhancePropertiesWithLogging(obj) {
  const cache = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cache[key] = obj[key];

      Object.defineProperty(obj, key, {
        get: () => { return cache[key]},
        set: (value) => {
          const oldValue = cache[key];
          cache[key] = value;
          console.log(`${key}: ${oldValue} -> ${value}`)
        }
      })
    }
  }
}

enhancePropertiesWithLogging(data);

console.log('------------ before modification -------------');
console.log(data.name);
console.log(data.email);

console.log('------------ now modification -------------');
data.name = 'new-javascript';
data.email = 'new-email@test.com';

console.log('------------ after modification ---------------');
console.log(data.name);
console.log(data.email);
