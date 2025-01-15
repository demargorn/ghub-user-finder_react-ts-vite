import searchIcon from '../../assets/icon-search.svg';
import Button from '../Button/Button';
import styles from './SearchField.module.scss';

interface ISearchProps {
   hasError: boolean;
   onSubmit: (text: string) => void;
}

type TypeFormFields = {
   username: HTMLInputElement;
};

const SearchIcon = () => <img src={searchIcon} className={styles['icon']} alt='icon search' />;

const SearchField = ({ hasError, onSubmit }: ISearchProps) => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement & TypeFormFields>) => {
      e.preventDefault();
      const text = e.currentTarget.username.value;

      if (text.trim()) {
         onSubmit(text);
         e.currentTarget.reset();
      }
   };

   return (
      <form onSubmit={handleSubmit} autoComplete='off'>
         <div className={styles['search']}>
            <label htmlFor='search' className={styles['label']}>
               <SearchIcon />
            </label>
            <input
               type='text'
               className={styles['textField']}
               id='search'
               name='username'
               placeholder='Search GitHub username...'
            />
            {hasError && <div className={styles['error']}>No result</div>}
            <Button>Search</Button>
         </div>
      </form>
   );
};

export default SearchField;
