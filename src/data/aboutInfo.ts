import infoImgS from '../images/about/mobile/image-world-class-talent.jpg';
import infoImgM from '../images/about/tablet/image-world-class-talent.jpg';
import infoImgL from '../images/about/desktop/image-world-class-talent.jpg';
import infoImg2S from '../images/about/mobile/image-real-deal.jpg';
import infoImg2M from '../images/about/tablet/image-real-deal.jpg';
import infoImg2L from '../images/about/desktop/image-real-deal.jpg';
import svgPattern from '../images/shared/desktop/bg-pattern-three-circles.svg';

export type AboutInfoData = {
  heading: string;
  text: string[];
  imgs: string[];
  breakpoints: [number, number];
  svg: string;
  placeImgOnRight?: boolean;
};

export const aboutInfo: AboutInfoData = {
  heading: 'World-class talent',
  text: [
    'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
  ],
  imgs: [infoImgS, infoImgM, infoImgL],
  breakpoints: [499, 949],
  svg: svgPattern,
};

export const aboutInfo2: AboutInfoData = {
  heading: 'The real deal',
  text: [
    'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
    'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
  ],
  imgs: [infoImg2S, infoImg2M, infoImg2L],
  breakpoints: [499, 949],
  svg: svgPattern,
  placeImgOnRight: true,
};
