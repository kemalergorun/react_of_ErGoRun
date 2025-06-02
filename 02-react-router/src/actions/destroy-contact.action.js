import { redirect } from "react-router";
import { deleteContact } from "../contact";

export async function destroyContactAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
