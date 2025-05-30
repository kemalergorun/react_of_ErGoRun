import { getContacts } from "../contact";

export async function rootLoader() {
  // This function suppose to be fetching data and returning the data inside of an object:
  const contacts = await getContacts();
  return { contacts };
}
