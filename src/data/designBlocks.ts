import webS from '../images/home/mobile/image-web-design.jpg';
import appS from '../images/home/mobile/image-app-design.jpg';
import graphicS from '../images/home/mobile/image-graphic-design.jpg';
import webM from '../images/home/tablet/image-web-design.jpg';
import appM from '../images/home/tablet/image-app-design.jpg';
import graphicM from '../images/home/tablet/image-graphic-design.jpg';
import webL from '../images/home/desktop/image-web-design-small.jpg';
import webL2 from '../images/home/desktop/image-web-design-large.jpg';
import appL from '../images/home/desktop/image-app-design.jpg';
import graphicL from '../images/home/desktop/image-graphic-design.jpg';

export type LocationLink = 'home' | 'web' | 'app' | 'graphic';

const WEB_IMAGES = [webS, webM, webL];
const WEB_IMAGES_HOME = [webS, webM, webL2];
const APP_IMAGES = [appS, appM, appL];
const GRAPHIC_IMAGES = [graphicS, graphicM, graphicL];

const WEB = 'web';
const APP = 'app';
const GRAPHIC = 'graphic';

const web = { name: WEB, imgs: WEB_IMAGES };
const webHome = { name: WEB, imgs: WEB_IMAGES_HOME };
const app = { name: APP, imgs: APP_IMAGES };
const graphic = { name: GRAPHIC, imgs: GRAPHIC_IMAGES };

export const designBlocks = {
  home: [webHome, app, graphic],
  web: [app, graphic],
  app: [web, graphic],
  graphic: [app, web],
};
