"use client";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { ButtonAction } from "@/shared/ui/button-action/ButtonAction";
import { InputForm } from "@/shared/ui/input-form/InputForm";

import styles from "./LoginMainForm.module.scss";



const LoginMainForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [values, setValues] = useState<{ login: string, password: string }>({ login: '', password: '' });
  const [errors, setErrors] = useState<{ login: boolean, password: boolean }>({ login: false, password: false });
  const router = useRouter();

  const changeValues = (value: string, field: 'login' | 'password') => {
    setValues(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false}));
    }
  }

  const valideteForm = () => {
    let isError = false;
    const errorsMap = { ...errors };

    if (values.login === '') {
      isError = true;
      errorsMap.login = true;
    }

    if (values.password === '') {
      isError = true;
      errorsMap.password = true;
    }

    setErrors(() => errorsMap);
    return isError;
  }

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (valideteForm()) return;

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('isLogin', 'true');
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.formRoot}>
      <InputForm
        name="login"
        onChange={(value) => changeValues(value, 'login')}
        placeholder="Логин"
        type="text"
        value={values.login}
        error={errors.login}
      />
      <InputForm
      error={errors.password}
        name="password"
        onChange={(value) => changeValues(value, 'password')}
        placeholder="Пароль"
        type={showPassword ? "text" : "password"}
        value={values.password}
        onClickEye={() => setShowPassword((prev) => !prev)}
      />
      <div className={styles.checkboxContainer}>
        <Checkbox
          active={remember}
          onClick={() => setRemember((prev) => !prev)}
        />
      </div>

      <div className={styles.submitBtnContainer}>
        <ButtonAction text="ВОЙТИ" type="submit" />
      </div>
    </form>
  );
};

export { LoginMainForm };
