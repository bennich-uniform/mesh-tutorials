import { UniformContext } from "@uniformdev/context-react";
import { Context } from "@uniformdev/context";

const context = new Context({
  manifest: { 
    project: {
      id: process.env.NEXT_PUBLIC_UNIFORM_PROJECT_ID,
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <UniformContext context={context}>
      <Component {...pageProps} />
    </UniformContext>
  );
}

export default MyApp;