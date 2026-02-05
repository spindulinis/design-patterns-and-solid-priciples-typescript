import { MediaPlayerAbstraction } from "./media-player.abstract";

export class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}