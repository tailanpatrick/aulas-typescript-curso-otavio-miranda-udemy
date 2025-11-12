interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
  showControls(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private referenceTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }
  iniciarEventos(): void {
    this.playButton.addEventListener('click', this.playToggle);
    this.stopButton.addEventListener('click', this.stop);
    this.videoPlayer.addEventListener('mousemove', this.showControls);
  }
  playToggle = (): void => {
    const isVideoPlaying = !this.videoPlayer.paused;

    if (isVideoPlaying) {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
      return;
    }

    this.playButton.innerText = 'Pause';
    this.videoPlayer.play();
    this.showControls();
  };
  stop = (): void => {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
  };

  showControls = (): void => {
    clearTimeout(this.referenceTimeout);

    this.playButton.style.opacity = '1';
    this.stopButton.style.opacity = '1';

    const isVideoPaused = this.videoPlayer.paused;

    if (isVideoPaused) return;

    this.referenceTimeout = setTimeout(() => {
      this.playButton.style.opacity = '0';
      this.stopButton.style.opacity = '0';
    }, 2000);
  };
}

const videoPlayerElements: VideoPlayerElements = {
  playButton: document.querySelector('.play-pause') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  videoPlayer: document.querySelector('.video-container') as HTMLVideoElement,
};

console.log(videoPlayerElements);

const videoPlayer = new VideoPlayer(videoPlayerElements);
videoPlayer.iniciarEventos();
