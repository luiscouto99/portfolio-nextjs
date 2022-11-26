const API_KEY = '69168ef14a354d4aa320e0708814dcf2';
export const getLondonTime = async () => {
  const response = await fetch(
    `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&location=London,%20UK`,
  );
  const data = await response.json();
  return data.time_12.slice(0, 5) + data.time_12.slice(8, 11);
};
