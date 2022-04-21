import Head from "next/head";
import { Slot } from "@uniformdev/canvas-react";

export default function LayoutCanvas(props) {
  const { composition } = props;
  const { parameters } = composition;
  const { pageName } = parameters;
  const { value } = pageName;
  return (
    <div className="container">
      <Head>
        <title>{value}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{value}</h1>
      <Slot name="body" />
    </div>
  );
}
