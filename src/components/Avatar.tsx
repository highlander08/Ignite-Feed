import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IPropsAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export const Avatar: React.FC<IPropsAvatar> = ({
  hasBorder = true,
  ...props
}: IPropsAvatar) => {
  return (
    <img
      {...props}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
};
