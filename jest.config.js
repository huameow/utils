module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  rootDir: ".",
  roots: ["<rootDir>/src/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts?)$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
    "^.+\\.(t|j)sx$": "ts-jest",
  },
};
