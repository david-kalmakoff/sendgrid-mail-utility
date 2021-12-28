import { Config, Options, CreateMeeting } from "./types";

export default class Zoom {
  private _config: Config;
  private _token: string;
  private _options: Options;

  constructor(config: Config) {
    this._config = config;
  }

  /**
   * Filler
   * @param {object} options Options create a meeting
   * @return {void}
   */
  filler(options: CreateMeeting): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        await resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
