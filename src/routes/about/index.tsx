import Grid from '../../layout/grid';
import PadContent from '../../layout/pad-content';
import AboutHero from '../../components/about-hero';
import AboutInfo from '../../components/about-info';
import { aboutInfo, aboutInfo2 } from '../../data/aboutInfo';
import style from './about.module.scss';
import LocationsLinks from '../../components/locations-links';

const About = () => (
  <div class={style.about}>
    <Grid>
      <PadContent startAt="tablet">
        <Grid startGap="0">
          <AboutHero />
          <AboutInfo {...aboutInfo} />
        </Grid>
      </PadContent>
      <LocationsLinks />
      <PadContent startAt="tablet">
        <AboutInfo {...aboutInfo2} />
      </PadContent>
    </Grid>
  </div>
);

export default About;
