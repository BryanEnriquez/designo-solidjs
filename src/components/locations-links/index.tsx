import PadContent from '../../layout/pad-content';
import CircleGradient from '../circle-gradient';
import Button from '../button';
import svgAustralia from '../../images/shared/desktop/illustration-australia.svg';
import svgCanada from '../../images/shared/desktop/illustration-canada.svg';
import svgUK from '../../images/shared/desktop/illustration-united-kingdom.svg';
import style from './locations.module.scss';

const locations = [
  { label: 'canada', gradientDeg: 90, svg: svgCanada },
  { label: 'australia', svg: svgAustralia },
  { label: 'united kingdom', gradientDeg: 270, svg: svgUK },
];

const LocationsLinks = () => (
  <PadContent>
    <div class={style.locations}>
      {locations.map((el) => (
        <div class={style.locations__item}>
          <div class={style.locations__img}>
            <img src={el.svg} alt="" loading="lazy" />
            <CircleGradient rotate={el.gradientDeg} />
          </div>
          <span>{el.label}</span>
          <Button
            label="see location"
            type="link"
            href="/locations"
            color="orange"
          />
        </div>
      ))}
    </div>
  </PadContent>
);

export default LocationsLinks;
