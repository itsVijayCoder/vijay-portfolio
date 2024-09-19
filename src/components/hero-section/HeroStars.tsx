import StarImage from "@/assets/icons/star.svg";
import SparkleImage from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "./HeroOrbit";
import { heroBGImage } from "@/db/heroBGData";

export const HeroStars = () => {
  return (
    <>
      {heroBGImage?.map((item) => {
        const imgStyle = {
          height: `${item.imgSize * 4}px`,
          width: `${item.imgSize * 4}px`,
        };

        return (
          <HeroOrbit
            key={item.id}
            size={item.orbitSize}
            rotation={item.orbitRotation}
          >
            {item.tag === "star" ? (
              <StarImage style={imgStyle} className={`hero-star-color`} />
            ) : item.tag === "sparkle" ? (
              <SparkleImage style={imgStyle} className={`hero-sparkle-color`} />
            ) : (
              <div style={imgStyle} className={`hero-circle-color`}></div>
            )}
          </HeroOrbit>
        );
      })}
    </>
  );
};
