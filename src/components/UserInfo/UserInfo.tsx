import { TypeLocalGithubUser } from '../../types';
import companyIcon from '../../assets/icon-company.svg';
import locationIcon from '../../assets/icon-location.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import blogIcon from '../../assets/icon-website.svg';
import InfoItem, { IInfoItemProps } from '../InfoItem/InfoItem';
import styles from './UserInfo.module.scss';

const LocationIcon = () => (
   <img src={locationIcon} className={styles['icon']} alt='location icon' />
);
const CompanyIcon = () => <img src={companyIcon} className={styles['icon']} alt='company icon' />;
const BlogIcon = () => <img src={blogIcon} className={styles['icon']} alt='blog icon' />;
const TwitterIcon = () => <img src={twitterIcon} className={styles['icon']} alt='twitter icon' />;

type TypeUserInfoProps = Pick<TypeLocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>;

const UserInfo = ({ location, company, blog, twitter }: TypeUserInfoProps) => {
   const items: IInfoItemProps[] = [
      {
         icon: <LocationIcon />,
         text: location,
      },
      {
         icon: <CompanyIcon />,
         text: company,
      },

      {
         icon: <BlogIcon />,
         text: blog,
         isLink: true,
      },
      {
         icon: <TwitterIcon />,
         text: twitter,
      },
   ];

   return (
      <div className={styles['userInfo']}>
         {items.map((item, idx) => (
            <InfoItem {...item} key={idx} />
         ))}
      </div>
   );
};

export default UserInfo;
