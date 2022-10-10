import { batch, createSignal, onCleanup, onMount } from 'solid-js';
import mapboxgl from 'mapbox-gl';
import style from './map.module.scss';

type Props = {
  coords: [number, number];
};

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = (props: Props) => {
  const [lng, setLng] = createSignal(props.coords[0]);
  const [lat, setLat] = createSignal(props.coords[1]);
  let mapContainerEl: HTMLDivElement | undefined;

  onMount(() => {
    if (!mapContainerEl) return;

    const map = new mapboxgl.Map({
      container: mapContainerEl,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng(), lat()],
      zoom: 11,
    });

    map.on('move', () => {
      if (!mapContainerEl) return;

      batch(() => {
        setLng(+map.getCenter().lat.toFixed(4));
        setLat(+map.getCenter().lat.toFixed(4));
      });
    });

    onCleanup(() => {
      map.remove();
      mapContainerEl = undefined;
    });
  });

  return (
    <div class={style.map}>
      <div class={style.map__info}>
        Longitude: <span>{lng()}</span> | Latitude: <span>{lat()}</span>
      </div>
      <div ref={mapContainerEl} class={style.map__container}></div>
    </div>
  );
};

export default Map;
