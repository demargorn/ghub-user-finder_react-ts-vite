import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
   children: ReactNode;
}

const Container = ({ children }: IContainerProps) => (
   <div className={styles['container']}>{children}</div>
);

export default Container;
