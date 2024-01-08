import React from 'react';
import styles from './page.module.css'; // Stellen Sie sicher, dass der Pfad zu Ihrer CSS-Datei korrekt ist

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Willkommen zu meiner App!
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
      {/* Weitere Inhalte... */}
    </main>
  );
}
