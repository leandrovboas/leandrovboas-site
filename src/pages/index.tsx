import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Leandrovboas</title>
        <meta name="description" content="Sou um Engenheiro de software" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um Engenheiro de software"
        />
      </Head>
      <header>Menu</header>
      <main>Conteúdo</main>
      <footer>footer</footer>
    </div>
  );
}
