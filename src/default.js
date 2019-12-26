import utils from "./utils";

const randomFace = {
  base: utils.formatNumberDigit(utils.randomInt(1,3),2),
  eye: utils.formatNumberDigit(utils.randomInt(1,3),2),
  nose: utils.formatNumberDigit(utils.randomInt(1,3),2),
  mouth: utils.formatNumberDigit(utils.randomInt(1,3),2)
}
const randomLayout = {
  leftEye: {
    top: utils.randomInt(100,700),
    left: utils.randomInt(0,400),
  },
  rightEye: {
    top: utils.randomInt(100,700),
    right: utils.randomInt(0,400),
  },
  nose: {
    bottom: utils.randomInt(300,500),
    left: utils.randomInt(300,700),
  },
  mouth: {
    bottom: utils.randomInt(10,300),
    left: utils.randomInt(200,600),
  }
}
export const defFacePartsList = `{
  /******************************
   ▼ 👨 輪郭を選ぶ "01"〜"03"
  *******************************/
  "base": "${randomFace.base}",
  /******************************
   ▼ 👁 👁 目を選ぶ "01"〜"03"
  *******************************/
  "eye": "${randomFace.eye}",

  /******************************
   ▼ 👃 鼻を選ぶ "01"〜"03"
  *******************************/
  "nose": "${randomFace.nose}",

  /******************************
   ▼ 👄 口を選ぶ "01"〜"03"
  *******************************/
  "mouth": "${randomFace.mouth}"
}`;

export const defFaceLayout =`/*******************************
 ▼ 	👁 左目の位置を調整
*******************************/
.left-eye {
  /* 上からの距離 */
  top: ${randomLayout.leftEye.top}px;
  /* 左からの距離 */
  left: ${randomLayout.leftEye.left}px;
}
/*******************************
 ▼ 	👁 右目の位置を調整
*******************************/
.right-eye {
  /* 上からの距離 */
  top: ${randomLayout.rightEye.top}px;
  /* 右からの距離 */
  right: ${randomLayout.rightEye.right}px;
}

/*******************************
 ▼ 	👃 鼻の位置を調整
*******************************/
.nose {
  /* 下からの距離 */
  bottom: ${randomLayout.nose.bottom}px;
  /* 左からの距離 */
  left: ${randomLayout.nose.left}px;
}
/*******************************
 ▼ 	👄 口の位置を調整
*******************************/
.mouth {
  /* 下からの距離 */
  bottom: ${randomLayout.mouth.bottom}px;
  /* 左からの距離 */
  left: ${randomLayout.mouth.left}px;
}`