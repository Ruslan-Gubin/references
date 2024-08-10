
import styles from './LayoutHeader.module.scss';


const LayoutHeader = () => {

  return (
    <header className={styles.root}>
      <div className={styles.logo}>i</div>
      <h1 className={styles.title}>itilium</h1>
    </header>
  );
};

export  {LayoutHeader};