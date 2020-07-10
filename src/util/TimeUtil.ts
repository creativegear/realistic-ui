export default class TimeUtil {
  private constructor() {}

  public static sleep(msec: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), msec);
    });
  }
}
