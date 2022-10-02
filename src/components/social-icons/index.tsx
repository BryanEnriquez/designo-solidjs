import { Facebook } from '../icons/facebook';
import { Youtube } from '../icons/youtube';
import { Twitter } from '../icons/twitter';
import { Pinterest } from '../icons/pinterest';
import { Instagram } from '../icons/instagram';
import style from './socials.module.scss';

const icons = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Youtube', Icon: Youtube },
  { label: 'Twitter', Icon: Twitter },
  { label: 'Pinterest', Icon: Pinterest },
  { label: 'Instagram', Icon: Instagram },
];

const SocialIcons = () => (
  <ul class={style.socials}>
    {icons.map(({ label, Icon }) => {
      const text = `Visit our ${label} page`;

      return (
        <li>
          <a href="#">
            <span>{text}</span>
            <Icon title={text} />
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialIcons;
