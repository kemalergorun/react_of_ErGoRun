import { login } from "../api/login";

export const loginAction = async ({ request }) => {
  console.log(request);
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  const data = await login(payload);
  return { data };
};
