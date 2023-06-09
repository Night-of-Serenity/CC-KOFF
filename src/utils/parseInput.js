// Utility function for change string into numbers
// '500','2','100', '600' => [500,2,100,600]
export const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str));
};
