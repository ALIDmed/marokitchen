export const getRandomElement = (inputArray) => {
  const currentDate = new Date();
  const seed = currentDate.getDate(); // You can modify this based on your needs
  const randomIndex = Math.floor(Math.random() * inputArray.length);
  return inputArray[randomIndex];
};
