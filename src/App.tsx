import { useState } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import SearchField from './components/SearchField/SearchField';
import UserCard from './components/UserCard/UserCard';
import defaultUser from './mock';
import { TypeGithubError, TypeGithubUser, TypeLocalGithubUser } from './types';
import extractLocalUser from './utils/exract-local-user';
import isGithubUser from './utils/typeguards';

const BASE_URL = 'https://api.github.com/users/';

const App = () => {
   const [user, setUser] = useState<TypeLocalGithubUser | null>(defaultUser);

   const fetchUser = async (username: string) => {
      const url = BASE_URL + username;
      
      const res = await fetch(url);
      const user = (await res.json()) as TypeGithubUser | TypeGithubError;

      if (isGithubUser(user)) {
         setUser(extractLocalUser(user));
      } else {
         setUser(null);
      }
   };

   return (
      <Container>
         <Header />
         <SearchField hasError={!user} onSubmit={fetchUser} />
         {user && <UserCard {...user} />}
      </Container>
   );
};

export default App;
