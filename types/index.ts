export interface Office {
  country: string;
  address: [string, string, string];
  contact: [string, string];
}

export interface OfficeWithCoordinates extends Office {
  coords: [number, number];
}

export type SvgProps = {
  title: string;
};
