const BASE_URL = import.meta.env.VITE_FRANKFURTER_API;

export const getCurrencyRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/latest?from=try`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
