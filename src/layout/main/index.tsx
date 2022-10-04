import { Show } from 'solid-js';
import { Outlet, useLocation } from '@solidjs/router';
import CTA from '../../components/cta';
import { getPattern } from '../../data/pagePatterns';
import style from './main.module.scss';

const Main = () => {
  const location = useLocation();

  const path = () => location.pathname;

  return (
    <main class={style.main}>
      <div class={style.main__pageContent}>
        <Outlet />
      </div>
      <div class={style.main__patternBox}>
        {getPattern(path()).map((el) => (
          <div style={el} />
        ))}
      </div>
      <Show when={path() !== '/contact'}>
        <CTA />
      </Show>
    </main>
  );
};

export default Main;
