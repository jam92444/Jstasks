const obj = {
    name: 'Alice',
    address: {
        city: 'Paris',
        coordinates: { lat: 48.85, lng: 2.35 }
    }
};

function prefixKeys(obj, prefix) {
    if (typeof obj !== 'object' || obj === null) return obj;
  
    const result = {};
    console.log(Object.entries(obj))
    for (const [key, value] of Object.entries(obj)) {
      const newKey = `${prefix}${key}`;
      result[newKey] = prefixKeys(value, prefix);
    }
  
    return result;
  }


const result = prefixKeys(obj,'user_');
console.log(result)