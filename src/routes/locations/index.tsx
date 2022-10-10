import Maps from '../../components/maps';
import PadContent from '../../layout/pad-content';
import style from './locations.module.scss';

const Locations = () => (
  <div class={style.locations}>
    <PadContent startAt="tablet">
      <Maps />
    </PadContent>
  </div>
);

export default Locations;
