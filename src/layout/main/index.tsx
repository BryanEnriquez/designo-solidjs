import { Show } from 'solid-js';
import { Outlet, useLocation } from '@solidjs/router';
import style from './main.module.scss';
import CTA from '../../components/cta';

const Main = () => {
  const location = useLocation();

  const path = () => location.pathname;

  return (
    <main class={style.main}>
      <Outlet />
      <Show when={path() !== '/contact'}>
        <CTA />
      </Show>
    </main>
  );
};

export default Main;
