import Picture from '../../components/picture';
import heroS from '../../images/about/mobile/image-about-hero.jpg';
import heroM from '../../images/about/tablet/image-about-hero.jpg';
import heroL from '../../images/about/desktop/image-about-hero.jpg';
import heroSvgS from '../../images/about/mobile/bg-pattern-hero-about-mobile.svg';
import heroSvgM from '../../images/about/desktop/bg-pattern-hero-about-desktop.svg';
import style from './hero.module.scss';

const heroImages = [heroS, heroM, heroL];
const heroBreakpoints: [number, number] = [499, 949];
const heroSvgs = [heroSvgS, heroSvgM, heroSvgM];
const heroSvgBreakpoints: [number, number] = [767, 949];

const AboutHero = () => (
  <div class={`${style.hero} round-689`}>
    <div class={style.hero__img}>
      <Picture
        imgs={heroImages}
        breakpoints={heroBreakpoints}
        loading="eager"
      />
    </div>
    <div class={style.hero__copy}>
      <h1 class="h">About Us</h1>
      <p class="p">
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients' audiences.
      </p>
      <Picture imgs={heroSvgs} breakpoints={heroSvgBreakpoints} />
    </div>
  </div>
);

export default AboutHero;
