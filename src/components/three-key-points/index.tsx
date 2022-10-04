import PadContent from '../../layout/pad-content';
import CircleGradient from '../circle-gradient';
import illus1 from '../../images/home/desktop/illustration-passionate.svg';
import illus2 from '../../images/home/desktop/illustration-resourceful.svg';
import illus3 from '../../images/home/desktop/illustration-friendly.svg';
import style from './points.module.scss';

export const points = [
  {
    label: 'Passionate',
    desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    illus: illus1,
  },
  {
    label: 'Resourceful',
    desc: `Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.`,
    illus: illus2,
    deg: 270,
  },
  {
    label: 'Friendly',
    desc: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    illus: illus3,
    deg: 90,
  },
];

const ThreeKeyPoints = () => (
  <PadContent>
    <ol class={style.points}>
      {points.map((el) => (
        <li>
          <div class={style.points__img}>
            <img src={el.illus} alt="" loading="lazy" />
            <CircleGradient rotate={el.deg} />
          </div>
          <div class={style.points__copy}>
            <span>{el.label}</span>
            <p>{el.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  </PadContent>
);

export default ThreeKeyPoints;
