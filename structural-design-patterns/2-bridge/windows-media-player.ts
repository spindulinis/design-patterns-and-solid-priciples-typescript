import { MediaPlayer } from "./media-player.interface";

export class WindowsMediaPlayer implements MediaPlayer {
  public playAudio(): void {
    console.log("Playing audio on windows media player");
  }

  public playVideo(): void {
    console.log("Playing video on windows media player");
  }
}
