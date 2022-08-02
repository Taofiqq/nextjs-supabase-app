import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Built with{" "}
        <Link href="https://nextjs.org/">
          <span className={styles.stack}>Nextjs</span>
        </Link>{" "}
        and{" "}
        <Link href="https://supabase.com/">
          <span className={styles.stack}>Supabase</span>
        </Link>
      </h1>
      <Link href="">
        <p className={styles.repo}>Github Repo</p>
      </Link>
    </div>
  );
};

export default Footer;
