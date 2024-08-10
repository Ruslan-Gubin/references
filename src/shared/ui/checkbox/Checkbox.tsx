'use client';
import { CheckboxSvg } from "./CheckboxSvg";

import styles from './Checkbox.module.scss';

type Props = {
  active: boolean;
  onClick: () => void;
}

const Checkbox = ({ active, onClick }: Props) => {


  return (
    <label onClick={onClick} className={styles.ckeckboxWrapper}>
    <div className={styles.checkbox}>
    {active && <CheckboxSvg />}
    </div>
  Запомнить меня
  </label>
  );
};

export { Checkbox };