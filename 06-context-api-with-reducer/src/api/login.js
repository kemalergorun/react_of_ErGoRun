export const login = async (payload) => {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch("https://dummyjson.com/auth/login", settings);

    if (!response.ok) throw new Error("Invalid Credentials.");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
