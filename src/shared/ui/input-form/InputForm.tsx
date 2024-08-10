import type { HTMLInputTypeAttribute } from 'react';

import styles from './LoginMainForm.module.scss';
import { EyeOpenSvg } from './EyeOpenSvg';
import { EyeCloseSvg } from './EyeCloseSvg';

type Props = {
  value: string;
  onChange: (value: string) => void;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  onClickEye?: () => void;
  error?: boolean;
}

const InputForm = ({ error, onClickEye, name, onChange, placeholder, type, value }: Props) => {
  return (
    <label className={styles.label}>
    <input 
    className={ error  ? `${styles.input} ${styles.error}` : styles.input}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value} 
    onChange={e => onChange(e.target.value)} 
    />
    {onClickEye &&
    <button onClick={onClickEye} className={styles.eyeContainer}>
      {type === 'password' ? <EyeCloseSvg /> : <EyeOpenSvg />}
    </button>
    }
    </label>
  );
};

export  { InputForm };