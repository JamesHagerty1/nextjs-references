/*
For this file to be useable, the installs of react-foundations/package.json are
needed.
*/

import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

/*
"export default" needed to help Next.js distinguish the main component of this
page! Remember, Next.js does routing based on file-system structure and names
*/
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/* This component uses state, so it needs to be delegated to a Client
      Component, while HomePage is a Server Component by Next's default */}
      <LikeButton />
    </div>
  );
}