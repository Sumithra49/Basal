import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Job Platform</h1>

        <div className={styles.ctas}>
          <Link href="/apply" className={styles.primary}>
            Apply for a Job
          </Link>

          <Link href="/recruiter" className={styles.secondary}>
            Recruiter Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
