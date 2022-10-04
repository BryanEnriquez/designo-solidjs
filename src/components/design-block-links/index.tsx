import { Link } from '@solidjs/router';
import PadContent from '../../layout/pad-content';
import Picture from '../picture';
import { designBlocks } from '../../data/designBlocks';
import type { LocationLink } from '../../data/designBlocks';
import style from './links.module.scss';

type Props = {
  location: LocationLink;
};

const breakpoints: [number, number] = [549, 1049];

const DesignBlockLinks = (props: Props) => (
  <PadContent>
    <nav class="mwr">
      <ol
        class={`${style.links} ${
          style[`links--${props.location === 'home' ? '3' : '2'}blocks`]
        }`}
      >
        {designBlocks[props.location].map(({ name, imgs }) => (
          <li class={style.links__block}>
            <Link href={`/design/${name}`} class={style.links__link}>
              <span>{`${name} design`}</span> <span>View projects</span>
              <Picture alt="" imgs={imgs} breakpoints={breakpoints} />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </PadContent>
);

export default DesignBlockLinks;
