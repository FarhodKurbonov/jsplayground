let user = {
    name: 'John',
    age: 30,
    hight: 189,
    weight: 60,
  };
  
  function countObjectProperties(objectTobeCounted) {
    return Object.keys(objectTobeCounted).length
  }
  console.log('Number of properties in the object:',countObjectProperties(user));