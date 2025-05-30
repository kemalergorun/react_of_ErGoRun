import { redirect } from "react-router";
import { createContact } from "../contact";

export async function createContactAction() {
  const contact = await createContact();
  console.log(contact);
  return redirect(`/contacts/${contact.id}/edit`);
}
