import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router";

export default function RootLayout() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation);

  // console.log(contacts);

  // If we would not use NavLink, we have to find the id from route and match this id from the fetched data and only if it is matching we need to give active className which is more difficult than using NavLink:
  // const conId = useParams();
  // console.log(conId.contactId);
  // const selectedContact = contacts.find((contact, index) => contact.id === conId.contactId);
  // console.log(selectedContact);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation?.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
