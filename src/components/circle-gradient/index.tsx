import gradient from '../../images/shared/desktop/bg-pattern-small-circle.svg';

type Props = {
  rotate?: number;
};

const CircleGradient = (props: Props) => (
  <img
    src={gradient}
    alt=""
    loading="lazy"
    {...(props.rotate && {
      style: { transform: `rotate(${props.rotate}deg)` },
    })}
  />
);

export default CircleGradient;
