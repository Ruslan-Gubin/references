import Link from 'next/link';
import { LoginMainForm } from '../login-main-form/LoginMainForm';

import styles from './LoginMainBlock.module.scss';


const LoginMainBlock = () => {
  return (
    <section className={styles.root}>
    <h1 className={styles.loginTitle}>Вход в сервис</h1>
    <LoginMainForm />
    <div className={styles.linkForgotContainer}>
    <Link className={styles.linkForgot} href={'/login'}>
    Забыли пароль?
    </Link>
    </div>
    </section>
  );
};

export default LoginMainBlock;