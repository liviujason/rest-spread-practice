const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);


const findMin = (...nums) => {
   return nums.reduce((min, currVal) => {
      return currVal < min ? currVal : min;
   });
}

const mergeObjects = (obj1, obj2) => [{...obj1, ...obj2}];

const doubleAndReturnArgs = (arr, ...nums) => {
   const doubles = nums.map((num) => {
      return num * 2;
   });
   return [...arr, ...doubles];
}

const removeRandom = (items) => {
   let idx = Math.floor(Math.random() * items.length);
   return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
   const newObj = {[key]: val};
   return [{...obj, ...newObj}];
};

const removeKey = (obj, key) => {
   delete obj[key];
   return obj;
}

const combine = (obj1, obj2) => {
   return {...obj1, ...obj2};
};

const update = (obj, key, value) => {
   return {...obj, [key]:value};
}

