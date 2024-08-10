import styles from "./InfoItemValue.module.scss";

type Props = {
  label?: string;
  value: string | undefined | null | number;
  minWidthLabel?: number;
  color?: string;
};

const InfoItemValue = ({ label, value, minWidthLabel, color }: Props) => {
  return (
    <div className={styles.infoLineItem}>
      {label &&
      <label
      style={minWidthLabel ? { minWidth: minWidthLabel } : {}}
      className={styles.infoLineItemLabel}
      >
        {label}
      </label>
      }
      <span style={{ color }} className={styles.infoLineItemValue}>{value ? value : "---"}</span>
    </div>
  );
};

export default InfoItemValue;
