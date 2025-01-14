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

const SearchIcon = () => <img src={searchIcon} alt='icon search' width='30' height='30' />;

const SearchField = ({ hasError, onSubmit }: ISearchProps) => {
   const handleSubmit = (event: React.FormEvent<HTMLFormElement & TypeFormFields>) => {
      event.preventDefault();
      const text = event.currentTarget.username.value;

      if (text.trim()) {
         onSubmit(text);
         event.currentTarget.reset();
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
