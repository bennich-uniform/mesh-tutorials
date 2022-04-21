import { CanvasClient, enhance, EnhancerBuilder, CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas";
import { Composition } from "@uniformdev/canvas-react";
import LandingPageLayout from "../src/components/LandingPageLayout";
import resolveRenderer from "../lib/resolveRenderer";

import { createClient, CANVAS_MONSTER_LIST_PARAMETER_TYPES, createMonsterEnhancer } from "canvas-monsterpedia";
import { useLivePreviewNextStaticProps } from "../hooks/useLivePreviewNextStaticProps";

export async function getStaticProps({ preview }) {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.NEXT_PUBLIC_UNIFORM_PROJECT_ID,
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

export default function Home({ composition }) {
  useLivePreviewNextStaticProps({
    compositionId: composition._id,
    projectId: process.env.NEXT_PUBLIC_UNIFORM_PROJECT_ID,
  });

  return (
    <Composition data={composition} resolveRenderer={resolveRenderer}>
      <LandingPageLayout composition={composition} />
    </Composition>
  );
}
