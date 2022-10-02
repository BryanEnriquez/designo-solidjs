import Button from '../button';
import pattern from '../../images/shared/desktop/bg-pattern-cta.svg';
import style from './cta.module.scss';

const CTA = () => (
  <div class={style.ctaWrapper}>
    <div class={style.cta}>
      <img src={pattern} alt="" loading="lazy" />
      <div class={style.cta__content}>
        <div class={style.cta__copy}>
          <h2>Let&rsquo;s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button type="link" href="/contact" label="Get in touch" />
      </div>
    </div>
  </div>
);

export default CTA;
