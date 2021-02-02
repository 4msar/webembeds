import Platform, { OEmbedResponseType, PlatformType } from "../../modules/Platform";

export default class GithubGist extends Platform {
  // eslint-disable-next-line no-useless-constructor
  constructor(args: PlatformType) {
    super(args);
  }

  run = async (): Promise<OEmbedResponseType> => ({
    version: 0.1,
    type: "rich",
    title: "Github Gist",
    html: `<script src="${this.embedURL}.js"></script>`,
  })
}
