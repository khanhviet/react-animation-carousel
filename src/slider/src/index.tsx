import React, { useCallback, useEffect } from "react";
import "./index.scss";

type SliderProps = {
  listImg: Array<string>;
  time?: number;
};

export default function Slider(props: SliderProps) {
  const { listImg, time = 100 } = props;

  const renderArrImg = useCallback((arrImg: any) => {
    return (
      <>
        {arrImg.map((src: any, index: any) => {
          return (
            <div className="card-holder" key={index}>
              <img className="v-img" src={src} />
            </div>
          );
        })}
      </>
    );
  }, []);

  useEffect(() => {
    const elemSlider = Array.from(
      document.getElementsByClassName(
        "v-slider"
      ) as HTMLCollectionOf<HTMLElement>
    );
    for (let i = 0; i < elemSlider.length; i++) {
      const element = elemSlider[i];
      element.style.animation = `${time}s linear 0s infinite translationLeftSide`;
    }
  }, []);

  return (
    <div className={"v-container-holder"}>
      <div className="v-slider v-left">{renderArrImg(listImg)}</div>
      <div className="v-slider v-right">{renderArrImg(listImg)}</div>
    </div>
  );
}
