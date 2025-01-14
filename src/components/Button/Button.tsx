import styles from './Button.module.scss';

interface IButtonProps {
   children: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: IButtonProps) => (
   <button className={styles.button} onClick={onClick}>
      {children}
   </button>
);

export default Button;
