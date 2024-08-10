"use client";
import React, { useState } from "react";
import { ButtonAction } from "@/shared/ui/button-action/ButtonAction";

import styles from "./ShowMore.module.scss";

type Props = {
  children: React.ReactElement;
};

const ShowMore = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className={show ? `${styles.root} ${styles.rootShow}` : styles.root}>
        {children}
      </div>

      <div className={styles.buttonShowContainer}>
        <ButtonAction
          text={
            show
              ? "Скрыть дополнительную информацию"
              : "Показать дополнительную информацию"
          }
          onClick={() => setShow((prev) => !prev)}
          type="button"
        />
      </div>
    </>
  );
};

export { ShowMore };
