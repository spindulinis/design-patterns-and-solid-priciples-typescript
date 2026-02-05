import { VideoPlayer } from "./video-player";
import { AudioPlayer } from "./audio-player";
import { WindowsMediaPlayer } from "./windows-media-player";
import { MacOsMediaPlayer } from "./macos-media-player";

const windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile();

const macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
macOSVideoPlayer.playFile();