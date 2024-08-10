import Link from "next/link";
import { TableHeader } from "../table-header/TableHeader";
import { TableFooter } from "../table-footer/TableFooter";
import { EmptyResurse } from "@/shared/ui/empty-resurse/EmptyResurse";
import { WarnTableSvg } from "../svg/WarnTableSvg";
import { stateColorMap } from "@/shared/constants/referenceStateColorsMap";
import type { ReferenceModel } from "@/shared/data/types";

import styles from "./TableMain.module.scss";

type Props = {
  referencesList: ReferenceModel[];
  totalCount: number;
  limit: number;
};

const TableMain = ({ referencesList, totalCount, limit }: Props) => {
  return (
    <>
      {referencesList.length > 0 && (
        <div className={styles.tableWrapper}>
          <section style={{ minWidth: 1250 }} className={styles.root}>
            <TableHeader
              cellGridColums={"2fr 1fr 1fr 1fr 1fr 1fr"}
              headerDescription={[
                "Тема",
                "Номер",
                "Дата создания",
                "Дата измерения",
                "Крайний срок",
                "Состояние",
              ]}
            />
            <ul className={styles.tableBodyList}>
              {referencesList.map((references) => (
                <ul key={references.id} className={styles.tableBodyItem}>
                  <li className={styles.userItem}>
                    <Link
                      href={`/references-info/${references.id}`}
                      className={styles.theme}
                    >
                      {references.theme}
                      {references.response === "Да" && <WarnTableSvg />}
                    </Link>

                    <span title={references.number} className={styles.userInfo}>
                      {references.number}
                    </span>
                    <span
                      title={references.date_create}
                      className={styles.userInfo}
                    >
                      {references.date_create}
                    </span>
                    <span
                      title={references.date_update}
                      className={styles.userInfo}
                    >
                      {references.date_update}
                    </span>
                    <span
                      title={references.deadline}
                      className={styles.userInfo}
                    >
                      {references.deadline}
                    </span>

                    <span title={references.state} className={styles.userInfo}>
                      <div className={styles.stateContainer}>
                        <div
                          style={{
                            backgroundColor: `${
                              stateColorMap[references.state]
                            }`,
                          }}
                          className={styles.stateRect}
                        ></div>
                        <p className={styles.statusText}>{references.state}</p>
                      </div>
                    </span>
                  </li>
                </ul>
              ))}
            </ul>
            <TableFooter totalCount={totalCount} limit={limit} />
          </section>
        </div>
      )}

      {/* {!isLoading && userList.length === 0 && !isSearch && (
        <EmptyResurse text="В настоящее время данные отсутствуют" />
      )} */}
      {/* {!isLoading && itemsList.length === 0 && isSearch && onCancelSearch && (
        <div className={styles.emptySearch}>
          <div>По результату поиска данные отсутствуют</div>
          <button onClick={onCancelSearch} className={styles.emptyClearSearch}>
            Отменить поиск
          </button>
        </div>
      )}  */}
    </>
  );
};

export { TableMain };
