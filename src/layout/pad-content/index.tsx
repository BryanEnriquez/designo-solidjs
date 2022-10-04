import type { JSX } from 'solid-js';
import style from './pad.module.scss';

type Props = {
  children?: JSX.Element;
  startAt?: 'mobile' | 'tablet';
};

/**
 * @param props.startAt Default: `'mobile'`
 */
const PadContent = (props: Props) => (
  <div class={style[`pad-${props.startAt || 'mobile'}`]}>{props.children}</div>
);

export default PadContent;
