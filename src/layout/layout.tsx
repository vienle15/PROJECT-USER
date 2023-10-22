import React, { ReactElement } from "react";

import styles from "./Layout.module.scss";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={styles.layout}>
      <div></div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
