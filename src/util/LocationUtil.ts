export default class LocationUtil {
  private constructor() {}

  public static getPathName(): string {
    // 本来は react-routerのuseLocationをHooksで使いたいのだが、electronだとhook出来ないポイントでhookしているとエラーが出てしまう。
    // そのためhooksを使わずに、window.locationの情報から取得するようにしている。
    if (window) {
      return window.location.hash.replace('#', '');
    }
    return '';
  }
}
