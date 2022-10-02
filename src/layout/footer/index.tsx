// import { createSignal, onMount, lazy, onCleanup } from 'solid-js';
import Logo from '../../components/logo';
import NavLinks from '../../components/nav-links';
import LocationInfo from '../../components/location-info';
import SocialIcons from '../../components/social-icons';
import { mainOffice } from '../../copy/mainOffice';
import style from './footer.module.scss';

// const SocialIcons = lazy(() => import('../social-icons'));

const Footer = () => {
  // const [iconsAreVisible, setIconAreVisible] = createSignal(false);
  // const [observer, setObserver] = createSignal<IntersectionObserver>();
  let iconsEl: HTMLDivElement | undefined;

  // onMount(() => {
  //   if (!iconsEl) return;

  //   const observerInstance = new IntersectionObserver(
  //     (entries, observer) => {
  //       const [entry] = entries;

  //       if (!entry.isIntersecting) return;

  //       setIconAreVisible(true);

  //       observer.unobserve(entry.target);
  //     },
  //     {
  //       root: null,
  //       rootMargin: '10px',
  //       threshold: 0.1,
  //     }
  //   );

  //   observerInstance.observe(iconsEl);

  //   setObserver(observerInstance);
  // });

  // onCleanup(() => {
  //   const instance = observer();
  //   if (instance) instance.disconnect();
  // });

  return (
    <footer class={style.footer}>
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
            <SocialIcons />
            {/* {iconsAreVisible() && <SocialIcons />} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
