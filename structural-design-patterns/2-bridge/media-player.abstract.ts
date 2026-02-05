import { MediaPlayer } from "./media-player.interface";

export abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayer) {
  }

  abstract playFile(): void;
}
