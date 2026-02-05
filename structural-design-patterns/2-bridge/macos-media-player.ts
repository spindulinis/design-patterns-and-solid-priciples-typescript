import { MediaPlayer } from "./media-player.interface";

export class MacOsMediaPlayer implements MediaPlayer {
  public playAudio(): void {
    console.log("Playing audio on MacOS media player");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS media player");
  }
}