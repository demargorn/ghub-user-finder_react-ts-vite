import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
   children: ReactNode;
}

const Container = ({ children }: IContainerProps) => (
   <section className={styles['container']}>{children}</section>
);

export default Container;
