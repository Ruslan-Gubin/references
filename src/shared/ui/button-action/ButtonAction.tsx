import styles from "./ButtonAction.module.scss";

type Props = {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
};

const ButtonAction = ({ onClick, text, type }: Props) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {text}
    </button>
  );
};

export { ButtonAction };
