export enum DesignType {
  WebDesign,
  WebDesignLarge,
  AppDesign,
  GraphicDesign
}

export interface Design {
  type: DesignType,
  header: string;
  imageUrl: string;
}

export const Designs: Design[] = [
  { type: DesignType.WebDesign, header: 'Web Design', imageUrl: 'assets/home/desktop/image-web-design-small.jpg' },
  { type: DesignType.WebDesignLarge, header: 'Web Design', imageUrl: 'assets/home/desktop/image-web-design-large.jpg' },
  { type: DesignType.AppDesign, header: 'App Design', imageUrl: 'assets/home/desktop/image-app-design.jpg' },
  { type: DesignType.GraphicDesign, header: 'Graphic Design', imageUrl: 'assets/home/desktop/image-graphic-design.jpg' },
]
