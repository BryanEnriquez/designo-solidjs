import { Link } from '@solidjs/router';
import style from './links.module.scss';

type Props = {
  footer?: boolean;
};

const links = [
  { label: 'Our company', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'contact', href: '/contact' },
];

const NavLinks = (props: Props) => (
  <nav>
    <ol class={`${style.links} ${props.footer ? style['links--f'] : ''}`}>
      {links.map((el) => (
        <li>
          <Link href={el.href}>{el.label}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default NavLinks;
