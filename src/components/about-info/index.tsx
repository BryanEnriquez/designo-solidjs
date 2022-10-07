import Picture from '../picture';
import type { AboutInfoData } from '../../data/aboutInfo';
import style from './info.module.scss';

type Props = AboutInfoData;

const AboutInfo = (props: Props) => (
  <div
    class={`${style.info}${
      props.placeImgOnRight ? ' ' + style['info--right'] : ''
    } round-689`}
  >
    <div class={style.info__img}>
      <Picture imgs={props.imgs} breakpoints={props.breakpoints} />
    </div>
    <div class={style.info__copy}>
      <h2 class="h h--2">{props.heading}</h2>
      {props.text.map((el) => (
        <p class="p">{el}</p>
      ))}
      <div class={style.info__svg}>
        <img src={props.svg} alt="" loading="lazy" />
      </div>
    </div>
  </div>
);

export default AboutInfo;
