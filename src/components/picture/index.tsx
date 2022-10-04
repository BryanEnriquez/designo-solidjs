type Props = {
  imgs: string[];
  breakpoints: [number, number];
  alt?: string;
  loading?: 'lazy' | 'eager';
};

const Picture = (props: Props) => (
  <picture>
    <source
      media={`(max-width: ${props.breakpoints[0]}px)`}
      srcset={props.imgs[0]}
    />
    <source
      media={`(max-width: ${props.breakpoints[1]}px)`}
      srcset={props.imgs[1]}
    />
    <img
      src={props.imgs[2]}
      alt={props.alt || ''}
      loading={props.loading || 'lazy'}
    />
  </picture>
);

export default Picture;
