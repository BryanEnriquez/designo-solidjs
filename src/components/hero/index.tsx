import PadContent from '../../layout/pad-content';
import Button from '../button';
import heroBg from '../../images/home/desktop/bg-pattern-hero.svg';
import phone from '../../images/home/desktop/image-hero-phone.png';
import style from './hero.module.scss';

const Hero = () => (
  <PadContent startAt="tablet">
    <div class={`${style.hero} round-689`}>
      <img class={style.hero__bg} src={heroBg} alt="" />
      <div class={style.hero__copy}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button type="link" href="/about" label="learn more" />
      </div>
      <div class={style.hero__imgBox}>
        <img src={phone} alt="phone with the word frame" />
      </div>
    </div>
  </PadContent>
);

export default Hero;
