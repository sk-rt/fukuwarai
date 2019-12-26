export default class utils {
  /**
   * ランダムな数
   * @return {Number}
   */
  static randomNum(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
  }
  /**
   * ランダムな整数
   * @return {Number}
   */
  static randomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  /**
   * ランダムに正負
   * @return {Number} 1 or -1
   */
  static randomPlusMinus() {
    return Math.floor(Math.random() * 2 + 1) * 2 - 3;
  }
  static formatNumberDigit(num, length = 3) {
    return (Array(length).join("0") + num).slice(-length);
  }
  static degToRad(deg) {
    return deg * (180 / Math.PI);
  }
  static radToDeg(rad) {
    return (rad * Math.PI) / 180;
  }
  static randomColor() {
    var randomColor = "";
    for (var i = 0; i < 6; i++) {
      randomColor += ((16 * Math.random()) | 0).toString(16);
    }
    return randomColor;
  }
  static getDevice() {
    const ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") > 0 ||
      ua.indexOf("iPod") > 0 ||
      (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
    ) {
      return "sp";
    } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
      return "tab";
    } else {
      return "other";
    }
  }
}
