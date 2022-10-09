import ContactForm from '../contact-form';
import Picture from '../picture';
import svgS from '../../images/contact/mobile/bg-pattern-hero-contact-mobile.svg';
import svgM from '../../images/contact/desktop/bg-pattern-hero-desktop.svg';
import style from './hero.module.scss';

const heroBackground: { imgs: string[]; breakpoints: [number, number] } = {
  imgs: [svgS, svgM, svgM],
  breakpoints: [767, 1049],
};

const ContactHero = () => (
  <div class={`${style.hero} round-689`}>
    <div class={style.hero__content}>
      <ContactForm />
    </div>
    <Picture {...heroBackground} />
  </div>
);

export default ContactHero;
