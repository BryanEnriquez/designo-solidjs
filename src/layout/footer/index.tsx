import { createSignal, onMount, lazy, onCleanup } from 'solid-js';
import Logo from '../../components/logo';
import NavLinks from '../../components/nav-links';
import LocationInfo from '../../components/location-info';
import PadContent from '../pad-content';
import { mainOffice } from '../../copy/mainOffice';
import style from './footer.module.scss';

const SocialIcons = lazy(() => import('../../components/social-icons'));

const Footer = () => {
  const [iconsAreVisible, setIconAreVisible] = createSignal(false);
  let iconsEl: HTMLDivElement | undefined;

  onMount(() => {
    if (!iconsEl) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        setIconAreVisible(true);

        observer.unobserve(entry.target);
      },
      {
        root: null,
        rootMargin: '10px',
        threshold: 0.1,
      }
    );

    observer.observe(iconsEl);

    onCleanup(() => observer.disconnect());
  });

  return (
    <footer class={style.footer}>
      <PadContent>
        <div class="mwr">
          <div class={style.footer__links}>
            <Logo color="light" />
            <div class={style.footer__line} />
            <NavLinks footer />
          </div>
          <div class={style.footer__info}>
            <LocationInfo
              class={style.footer__location}
              office={mainOffice}
              main
            />
            <div ref={iconsEl} class={style.footer__icons}>
              {iconsAreVisible() && <SocialIcons />}
            </div>
          </div>
        </div>
      </PadContent>
    </footer>
  );
};

export default Footer;
