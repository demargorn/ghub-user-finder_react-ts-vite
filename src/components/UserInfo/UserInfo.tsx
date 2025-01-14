import companyIcon from '../../assets/icon-company.svg';
import locationIcon from '../../assets/icon-location.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import blogIcon from '../../assets/icon-website.svg';
import InfoItem, { IInfoItemProps } from '../InfoItem/InfoItem';
import { TypeLocalGithubUser } from '../../types';
import styles from './UserInfo.module.scss';

const CompanyIcon = () => <img src={companyIcon} alt='company icon'  />;
const LocationIcon = () => <img src={locationIcon} alt='company icon'  />;
const TwitterIcon = () => <img src={twitterIcon} alt='company icon'  />;
const BlogIcon = () => <img src={blogIcon} alt='company icon'  />;

type TypeUserInfoProps = Pick<TypeLocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>;

const UserInfo = ({ blog, company, location, twitter }: TypeUserInfoProps) => {
   const items: IInfoItemProps[] = [
      {
         icon: <LocationIcon />,
         text: location,
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
      {
         icon: <CompanyIcon />,
         text: company,
      },
   ];

   return (
      <div className={styles['userInfo']}>
         {items.map((item, index) => (
            <InfoItem {...item} key={index} />
         ))}
      </div>
   );
};

export default UserInfo;
