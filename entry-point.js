var topKFrequent = (nums, k) => {
   /**
     make a frequency object

     move values to a bucket array
     [frequency: [number]]

     Arr to hold numbers since multiple numbers could have same frequency.Convert to string because 
     object keys are strings, not numbers

     init result arr

     iterate backwards through the buckets, while result arr length is less than k

     return result
    */ 
    const result = [];

    const freq = nums.reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    }, {})

    const buckets = new Array(nums.length + 1).fill([])

    Object.entries(freq).forEach(([numberKey, count]) => {

        buckets[count].push(Number(numberKey))

    })


    for (let i = buckets.length - 1; result.length < k; i -= 1) {
           result.push(...buckets[i])
        
        
    }

    return result;
};

topKFrequent([1,1,1,2,2,3], 2)