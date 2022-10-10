import { Link } from '@solidjs/router';
import style from './404.module.scss';

const NotFound = () => (
  <div class={style.notFound}>
    <h1>Looks like nothing's here!</h1>
    <Link href="/" replace={true}>
      Back to homepage
    </Link>
  </div>
);

export default NotFound;
