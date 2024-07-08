import Head from "next/head";
import DrawerComponent from "./Drawer/page";
import styles from "./page.module.css";
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Next.js Drawer example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <DrawerComponent />
      </header>
      <main className={styles.main}>
        <h1> Drawer Example</h1>
        <p>
          A simple example to demonstrate how to use drawer components in
          Next.js.
        </p>
      </main>
    </div>
  );
};
export default Home;
