import { createSignal, onCleanup, onMount, lazy } from 'solid-js';
import LocationInfo from '../../components/location-info';
import Picture from '../../components/picture';
import { mainOffice } from '../../copy/mainOffice';
import { offices } from '../../copy/otherOffices';
import threeCircles from '../../images/locations/mobile/three-circles.svg';
import twoCircles from '../../images/shared/desktop/bg-pattern-two-circles.svg';
import style from './maps.module.scss';

const Map = lazy(() => import('../map'));

const locations = [mainOffice, ...offices];
const bgImages = [threeCircles, twoCircles, twoCircles];
const breakpoints: [number, number] = [767, 1049];

const Maps = () => {
  const [showMaps, setShowMaps] = createSignal(false);

  onMount(() => {
    const linkEl = document.createElement('link');
    linkEl.href = 'https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css';
    linkEl.rel = 'stylesheet';
    document.head.appendChild(linkEl);
    linkEl.addEventListener('load', () => setShowMaps(true));
    onCleanup(() => linkEl.remove());
  });

  return (
    <div class={style.maps}>
      {locations.map((el) => (
        <div class={style.maps__item}>
          <div class={`${style.maps__itemMapBox} round-689`}>
            {showMaps() && <Map coords={el.coords} />}
          </div>
          <div class={`${style.maps__itemCopyBox} round-689`}>
            <LocationInfo
              class={style.maps__itemCopy}
              office={el}
              withCountry
            />
            <Picture imgs={bgImages} breakpoints={breakpoints} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Maps;
