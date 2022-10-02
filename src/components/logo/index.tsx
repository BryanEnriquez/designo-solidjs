import { Link } from '@solidjs/router';
import logoDark from '../../images/shared/desktop/logo-dark.png';
import logoLight from '../../images/shared/desktop/logo-light.png';
import style from './logo.module.scss';

const Logo = (props: { color: 'dark' | 'light' }) => (
  <Link href="/" class={style.logo}>
    <img
      src={props.color === 'dark' ? logoDark : logoLight}
      alt="logo"
      class={style.logo__img}
    />
  </Link>
);

export default Logo;
