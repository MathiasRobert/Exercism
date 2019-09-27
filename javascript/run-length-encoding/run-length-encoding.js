//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => str.replace(/(\w|\s)\1+/g, (m, c) => `${m.length}${c}`);

export const decode = (str) => str.replace(/(\d+)(\w|\s)/g, (_, d, c) => c.repeat(d));
