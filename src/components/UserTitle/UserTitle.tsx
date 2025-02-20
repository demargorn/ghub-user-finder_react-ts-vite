import { TypeLocalGithubUser } from '../../types';
import styles from './UserTitle.module.scss';

type TypeUserTitleProps = Pick<TypeLocalGithubUser, 'name' | 'login' | 'created'>;

const localDate = new Intl.DateTimeFormat('en-GB', {
   day: 'numeric',
   month: 'short',
   year: 'numeric',
});

const UserTitle = ({ created, name, login }: TypeUserTitleProps) => {
   const joinedDate = localDate.format(new Date(created));

   return (
      <div className={styles['userTitle']}>
         <h2>{name}</h2>
         <h3>{login}</h3>
         <span>{joinedDate}</span>
      </div>
   );
};

export default UserTitle;
