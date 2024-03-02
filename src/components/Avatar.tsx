import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean; // O "?" vai indicar que a propriedade é opcional
  // src: string; não há necessidade de informar essas tags pois elas existem no 
  // alt?: string; HTML convencional, que está a ser importado por ImgHTMLAttributes 
  // title?: string;
}
export function Avatar({ hasBorder = true, ...props }:AvatarProps) {
  //Quando feita a desestruturação, é possível dar valores padrão para aquela props.
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
