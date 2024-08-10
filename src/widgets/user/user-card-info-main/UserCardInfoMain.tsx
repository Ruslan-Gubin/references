import InfoItemValue from "../info-item-value/InfoItemValue";
import { CardMain } from "../info-card-main/CardMain";
import { stateColorMap } from "@/shared/constants/referenceStateColorsMap";
import type { ReferenceModel } from "@/shared/data/types";
import { ShowMore } from "../show-more/ShowMore";

import styles from "./UserCardInfoMain.module.scss";

type Props = {
  reference: ReferenceModel;
};

const UserCardInfoMain = ({ reference }: Props) => {
  return (
    <CardMain title="Основная информация">
      <div className={styles.root}>
        <div className={styles.infoGridLine}>
          <InfoItemValue label="Номер" value={reference.number} />
          <InfoItemValue label="дата создания" value={reference.date_create} />
        </div>
        <InfoItemValue label="тема" value={reference.theme} />
        <InfoItemValue label="описание" value={reference.description} />
        <InfoItemValue label="крайний срок" value={reference.deadline} />
        <InfoItemValue
          label="состояние"
          value={reference.state}
          color={stateColorMap[reference.state]}
        />
        <InfoItemValue label="решение" value={reference.decision} />

        <ShowMore>
          <>
            <InfoItemValue label="услуга" value={reference.service} />
            <InfoItemValue
              label="состав услуги"
              value={reference.composition_service}
            />
          </>
        </ShowMore>
      </div>
    </CardMain>
  );
};

export { UserCardInfoMain };
