type Pattern = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
};

const p1 = { top: '320px', left: '-165px' };
const p2 = { bottom: '146px', right: '-164px', transform: 'rotate(180deg)' };
const p3 = { top: '126px', left: '-165px' };
const p4 = { bottom: '840px', right: '-560px' };
const p5 = { bottom: '-160px', right: '-165px' };

export const getPattern = (path: string): Pattern[] => {
  switch (path) {
    case '/':
      return [p1, p2];
    case '/about':
      return [p1, p4];
    case '/locations':
      return [];
    case '/contact':
      return [p5];
    default:
      return [p3];
  }
};
