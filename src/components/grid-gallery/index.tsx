import { createSignal } from 'solid-js';
import PadContent from '../../layout/pad-content';
import type { DesignImage } from '../../data/designCopy';
import style from './gallery.module.scss';
import Modal from '../modal';

type Props = {
  imgs: DesignImage[];
};

const GridGallery = (props: Props) => {
  const [selected, setSelected] = createSignal<DesignImage | null>(null);

  const onModalExit = () => setSelected(null);

  return (
    <PadContent>
      <div class={style.gallery}>
        {props.imgs.map((img) => (
          <div class={style.gallery__card} onClick={() => setSelected(img)}>
            <div class={style.gallery__img}>
              <img src={img.img} alt={img.p} loading="lazy" />
            </div>
            <div class={style.gallery__copy}>
              <span>{img.label}</span>
              <p>{img.p}</p>
            </div>
          </div>
        ))}
      </div>
      {selected() && (
        <Modal onExit={onModalExit} zIndex={100}>
          <div class={style.gallery__modalBox}>
            <button
              onClick={() => setSelected(null)}
              type="button"
              aria-label="Close modal"
            >
              X
            </button>
            <img src={selected()!.img} alt={selected()!.p} />
          </div>
        </Modal>
      )}
    </PadContent>
  );
};

export default GridGallery;
