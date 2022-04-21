import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CanvasClient } from "@uniformdev/canvas";
import { enhance, EnhancerBuilder, CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas";
import { createClient, CANVAS_MONSTER_LIST_PARAMETER_TYPES, createMonsterEnhancer } from "canvas-monsterpedia";
import { useLivePreviewNextStaticProps } from "../hooks/useLivePreviewNextStaticProps";
import FeaturedMonster from "../src/components/FeaturedMonster";

export async function getStaticProps({ preview }) {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug: "/",
    state: preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
  });
  //
  //
  const monsterEnhancer = createMonsterEnhancer(createClient());
  await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_MONSTER_LIST_PARAMETER_TYPES,
      monsterEnhancer
    ),
  });
  return {
    props: { composition },
  };
}

export default function Home({composition}) {
  const { parameters } = composition;
  const { featuredMonster, pageName } = parameters;
  const { value } = featuredMonster;

  useLivePreviewNextStaticProps({
    compositionId: composition._id,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Monsterpedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{pageName.value}</h1>
        <FeaturedMonster monster={value} />
      </main>

    </div>
  );
}
