import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "我不",
      "真哒?",
      "你确定?",
      "在考虑考虑嘛!",
      "再给你最后一次机会昂!",
      "别?",
      "二十年后当我们回想起这一幕，你会不会后悔：（",
      "心都碎成二维码了，扫出来我还是好爱你呜呜呜",
      "我们MBTI绝配啊",
      "星座也绝配啊!",
      "你没有心！！!",
      "我只是一个可怜的小狗你忍心吗!",
      "真不？",
      "我biubiubiu你!",
      "你这个冷酷无情的女人!",
      "好 ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="https://media.tenor.com/PS4dJbjo7mIAAAAi/heart-love.gif" />
              <img src="https://media1.tenor.com/m/62YQCrZkjiQAAAAC/yellow-pochacco.gif" />
            </div>
            <div className="text-container">芜湖起飞飞飞飞!!!</div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media1.tenor.com/m/HA61HwAtP8wAAAAC/pochacco-sanrio.gif"
              />
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media1.tenor.com/m/zZnfFImvNj4AAAAC/cinnamoroll-cappuccino.gif"
              />
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media1.tenor.com/m/nSeXvWhdjPEAAAAC/pochacco-happy.gif"
              />
            </div>

            <h1 className="text-container">蒋雯妮情人节快乐，所以要不要做我女朋友?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                哦ker
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "狠心残忍冰心水泥封心大反派拒绝" : getNoButtonText()}
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media1.tenor.com/m/4OONA09xhs4AAAAC/pochacco-sleepy.gif"
              />
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media.tenor.com/ROK6T7ydNksAAAAi/verguenza-que.gif"
              />
              <img
                className="h-[200px]"
                style={{ width: "400x", height: "240px" }}
                src="https://media1.tenor.com/m/UgHmWKl51EMAAAAC/puglie-puglie-pug.gif"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
