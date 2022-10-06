import { onCleanup, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import type { JSX } from 'solid-js';
import style from './modal.module.scss';

type Props = {
  children?: JSX.Element;
  zIndex?: number;
  onExit: () => void;
};

const Modal = (props: Props) => {
  let onEscape: ((e: KeyboardEvent) => any) | undefined;
  let contentWrapper: HTMLDivElement | undefined;

  onMount(() => {
    onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') props.onExit();
    };

    document.addEventListener('keydown', onEscape);
  });

  onCleanup(() => document.removeEventListener('keydown', onEscape!));

  const handleExit: JSX.EventHandler<HTMLDivElement, MouseEvent> = (e) => {
    if (e.target === e.currentTarget || e.target === contentWrapper) {
      props.onExit();
    }
  };

  return (
    <Portal mount={document.getElementById('portal') as HTMLElement}>
      <div
        onClick={handleExit}
        style={{ 'z-index': props.zIndex || 40 }}
        class={style.modal}
      >
        <div ref={contentWrapper} class={style.modal__content}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
