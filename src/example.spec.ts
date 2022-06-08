const addNumber = (num1: number, num2: number) => {
  return num1 + num2;
};

describe('Firts Test Example', () => {
  it('should equals true', () => {
    expect(true).toBe(true);
  });

  it('should add numbers', () => {
    expect(addNumber(2, 2)).toEqual(4);
  });
});
