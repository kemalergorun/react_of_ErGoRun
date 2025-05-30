import { getContact } from "../contact";

export async function contactLoader({ params }) {
  // console.log(params);

  const contact = await getContact(params.contactId);
  return { contact };
}
