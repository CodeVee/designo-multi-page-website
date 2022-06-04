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
  pageUrl: string;
}

export const Designs: Design[] = [
  { type: DesignType.WebDesign, header: 'Web Design', imageUrl: 'assets/home/desktop/image-web-design-small.jpg', pageUrl: '/web-design' },
  { type: DesignType.WebDesignLarge, header: 'Web Design', imageUrl: 'assets/home/desktop/image-web-design-large.jpg', pageUrl: '/web-design' },
  { type: DesignType.AppDesign, header: 'App Design', imageUrl: 'assets/home/desktop/image-app-design.jpg', pageUrl: '/app-design' },
  { type: DesignType.GraphicDesign, header: 'Graphic Design', imageUrl: 'assets/home/desktop/image-graphic-design.jpg', pageUrl: '/graphic-design' },
]
