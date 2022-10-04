import Grid from '../../layout/grid';
import Hero from '../../components/hero';
import DesignBlockLinks from '../../components/design-block-links';
import ThreeKeyPoints from '../../components/three-key-points';
import style from './home.module.scss';

const Home = () => (
  <div class={style.home}>
    <Grid>
      <Hero />
      <DesignBlockLinks location="home" />
      <ThreeKeyPoints />
    </Grid>
  </div>
);

export default Home;
