import blogr from '../images/web-design/desktop/image-blogr.jpg';
import builder from '../images/web-design/desktop/image-builder.jpg';
import camp from '../images/web-design/desktop/image-camp.jpg';
import express from '../images/web-design/desktop/image-express.jpg';
import photon from '../images/web-design/desktop/image-photon.jpg';
import transfer from '../images/web-design/desktop/image-transfer.jpg';
import airfilter from '../images/app-design/desktop/image-airfilter.jpg';
import eyecam from '../images/app-design/desktop/image-eyecam.jpg';
import faceit from '../images/app-design/desktop/image-faceit.jpg';
import loopstudios from '../images/app-design/desktop/image-loopstudios.jpg';
import todo from '../images/app-design/desktop/image-todo.jpg';
import change from '../images/graphic-design/desktop/image-change.jpg';
import boxedwater from '../images/graphic-design/desktop/image-boxed-water.jpg';
import science from '../images/graphic-design/desktop/image-science.jpg';
import designMobile from '../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import designTablet from '../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg';
import designWeb from '../images/web-design/desktop/bg-pattern-intro-web.svg';
import designApp from '../images/app-design/desktop/bg-pattern-intro-app.svg';
import designGraphic from '../images/graphic-design/desktop/bg-pattern-intro-graphic.svg';

export type DesignImage = {
  label: string;
  p: string;
  img: string;
};

export const designData: {
  [category: string]: {
    copy: string;
    imgs: DesignImage[];
    heroSvg: string[];
  };
} = {
  web: {
    copy: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    heroSvg: [designMobile, designTablet, designWeb],
    imgs: [
      {
        label: 'Express',
        p: 'A multi-carrier shipping website for ecommerce businesses',
        img: express,
      },
      {
        label: 'Transfer',
        p: 'Site for low-cost money transfers and sending money within seconds',
        img: transfer,
      },
      {
        label: 'Photon',
        p: 'A state-of-the-art music player with high-resolution audio and DSP effects',
        img: photon,
      },
      {
        label: 'Builder',
        p: 'Connects users with local contractors based on their location',
        img: builder,
      },
      {
        label: 'Blogr',
        p: 'Blogr is a platform for creating an online blog or publication',
        img: blogr,
      },
      {
        label: 'Camp',
        p: 'Get expert training in coding, data, design, and digital marketing',
        img: camp,
      },
    ],
  },
  app: {
    copy: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    heroSvg: [designMobile, designTablet, designApp],
    imgs: [
      {
        label: 'Airfilter',
        p: 'Solving the problem of poor indoor air quality by filtering the air',
        img: airfilter,
      },
      {
        label: 'Eyecam',
        p: 'Product that lets you edit your favorite photos and videos at any time',
        img: eyecam,
      },
      {
        label: 'Faceit',
        p: 'Get to meet your favorite internet superstar with the faceit app',
        img: faceit,
      },
      {
        label: 'Todo',
        p: 'A todo app that features cloud sync with light and dark mode',
        img: todo,
      },
      {
        label: 'Loopstudios',
        p: 'A VR experience app made for Loopstudios',
        img: loopstudios,
      },
    ],
  },
  graphic: {
    copy: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    heroSvg: [designMobile, designTablet, designGraphic],
    imgs: [
      {
        label: 'Tim Brown',
        p: 'A book cover designed for Tim Brown’s new release, ‘Change’',
        img: change,
      },
      {
        label: 'Boxed water',
        p: 'A simple packaging concept made for Boxed Water',
        img: boxedwater,
      },
      {
        label: 'Science!',
        p: 'A poster made in collaboration with the Federal Art Project',
        img: science,
      },
    ],
  },
};
