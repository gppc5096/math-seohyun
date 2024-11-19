import { Howl } from 'howler';

class SoundManager {
  private static instance: SoundManager;
  private bgm: Howl;
  private effects: {
    correct: Howl;
    incorrect: Howl;
    click: Howl;
    success: Howl;
  };

  private constructor() {
    this.bgm = new Howl({
      src: ['/sounds/background.mp3'],
      loop: true,
      volume: 0.3
    });

    this.effects = {
      correct: new Howl({
        src: ['/sounds/correct.mp3'],
        volume: 0.5
      }),
      incorrect: new Howl({
        src: ['/sounds/incorrect.mp3'],
        volume: 0.5
      }),
      click: new Howl({
        src: ['/sounds/click.mp3'],
        volume: 0.5
      }),
      success: new Howl({
        src: ['/sounds/success.mp3'],
        volume: 0.5
      })
    };
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public playBGM() {
    this.bgm.play();
  }

  public stopBGM() {
    this.bgm.stop();
  }

  public playEffect(effect: keyof typeof this.effects) {
    this.effects[effect].play();
  }
}

export const soundManager = SoundManager.getInstance(); 