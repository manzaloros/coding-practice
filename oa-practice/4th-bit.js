const fourthBitShort = (num) => parseInt(num.toString(2).slice(-4)[0], 10);

const fourthBit = (num) => {
  const binary = num.toString(2);
  const fourth = binary.slice(-4)[0];
  const bit = parseInt(fourth, 10);
  return bit;
};

fourthBit(32);
