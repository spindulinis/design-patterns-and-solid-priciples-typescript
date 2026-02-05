import { MediaPlayerAbstraction } from "./media-player.abstract";

export class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}