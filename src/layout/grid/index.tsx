import type { JSX } from 'solid-js';
import style from './grid.module.scss';

type Props = {
  children?: JSX.Element;
  startGap?: '0' | '96' | '120';
};

/**
 * @param props.startGap Default: `'120'`
 */
const Grid = (props: Props) => (
  <div class={`${style.grid} ${style[`grid--${props.startGap || '120'}`]}`}>
    {props.children}
  </div>
);

export default Grid;
