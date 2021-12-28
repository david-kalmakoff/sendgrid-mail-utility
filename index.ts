import { Config, Options, CreateMeeting } from "./types";

export default class Zoom {
  private _config: Config;
  private _token: string;
  private _options: Options;

  constructor(config: Config) {
    this._config = config;
  }

  /**
   * Create a meeting
   * https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate
   * @param {object} options Options create a meeting
   * @return {void}
   */
  createMeeting(options: CreateMeeting): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        await resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
