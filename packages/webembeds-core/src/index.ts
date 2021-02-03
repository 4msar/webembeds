import WebembedHandler from "./modules/WebembedHandler";

type WebEmbedInitOptions = {
  host: string | null,
  queryParams: {},
};

async function init(incomingURL: string, options?: WebEmbedInitOptions) {
  console.log(incomingURL, options)
  try {
    // eslint-disable-next-line no-new
    new URL(incomingURL);
  } catch (error) {
    console.log("Invalid url", error);
    return {
      output: null,
      error: true,
    };
  }

  const handler = new WebembedHandler(incomingURL, options || {});

  return handler.generateResponse();
}

export type { WebEmbedInitOptions };

export default init;
