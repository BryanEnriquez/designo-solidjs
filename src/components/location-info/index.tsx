import type { Office } from '../../../types';

type Props = {
  office: Office;
  withCountry?: boolean;
  class?: string;
  main?: boolean;
};

const LocationInfo = (props: Props) => (
  <div {...(props.class && { class: props.class })}>
    {props.withCountry && <span>{props.office.country}</span>}
    <ol>
      {props.office.address.map((el) => (
        <li>{el}</li>
      ))}
    </ol>
    <ol>
      <li>{`Contact${props.main ? ' Us (Central Office)' : ''}`}</li>
      {props.office.contact.map((el) => (
        <li>{el}</li>
      ))}
    </ol>
  </div>
);

export default LocationInfo;
