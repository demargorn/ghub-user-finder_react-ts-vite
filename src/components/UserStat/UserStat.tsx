import { TypeLocalGithubUser } from '../../types';
import styles from './UserStat.module.scss';

type TypeUserStatProps = Pick<TypeLocalGithubUser, 'repos' | 'followers' | 'following'>;

const UserStat = ({ repos, followers, following }: TypeUserStatProps) => (
   <div className={styles['userStat']}>
      <div className={styles['info']}>
         <div className={styles['infoTitle']}>Repos</div>
         <div className={styles['infoNumber']}>{repos}</div>
      </div>
      <div className={styles['info']}>
         <div className={styles['infoTitle']}>Following</div>
         <div className={styles['infoNumber']}>{following}</div>
      </div>
      <div className={styles['info']}>
         <div className={styles['infoTitle']}>Followers</div>
         <div className={styles['infoNumber']}>{followers}</div>
      </div>
   </div>
);

export default UserStat;
