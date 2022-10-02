import { Link } from '@solidjs/router';
import style from './btn.module.scss';

type ButtonColors = 'white' | 'orange';

interface BaseButton {
  label: string;
  color?: ButtonColors;
}

interface LinkButton extends BaseButton {
  type: 'link';
  href: string;
}

interface ButtonRegular extends BaseButton {
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

type Props = LinkButton | ButtonRegular;

const Button = (props: Props) => {
  const cn = `${style.btn} ${style[`btn--${props.color || 'white'}`]}`;

  return props.type === 'link' ? (
    <Link href={props.href} class={cn}>
      {props.label}
    </Link>
  ) : (
    <button
      type={props.type || 'button'}
      disabled={props.disabled || false}
      {...(props.onClick && { onClick: props.onClick })}
      class={cn}
    >
      {props.label}
    </button>
  );
};

export default Button;
