import { redirect } from "react-router";
import { updateContact } from "../contact";

// context, request, params
export async function updateContactAction({ request, params }) {
  console.log(params);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
