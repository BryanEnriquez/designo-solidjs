import Grid from '../../layout/grid';
import PadContent from '../../layout/pad-content';
import ContactHero from '../../components/contact-hero';
import LocationsLinks from '../../components/locations-links';
import style from './contact.module.scss';

const Contact = () => (
  <div class={style.contact}>
    <Grid>
      <PadContent startAt="tablet">
        <ContactHero />
      </PadContent>
      <LocationsLinks />
    </Grid>
  </div>
);

export default Contact;
