export default class CharactarUtil {
  private constructor() {}

  public static convertZenkakuToHankaku(value: string): string {
    return value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }

  public static convertHankakuToZenkaku(value: string): string {
    return value.replace(/[A-Za-z0-9]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
  }
}
