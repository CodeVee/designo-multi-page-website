export interface Product {
  header: string;
  message: string;
  imageUrl: string;
}

export enum ProductType {
  Web,
  App,
  Graphic
}

export const WebProducts: Product[] = [
  { header: 'Express', message: 'A multi-carrier shipping website for ecommerce businesses', imageUrl: 'assets/web-design/desktop/image-express.jpg' },
  { header: 'Transfer', message: 'Site for low-cost money transfers and sending money within seconds', imageUrl: 'assets/web-design/desktop/image-transfer.jpg' },
  { header: 'Photon', message: 'A state-of-the-art music player with high-resolution audio and DSP effects', imageUrl: 'assets/web-design/desktop/image-photon.jpg' },
  { header: 'Builder', message: 'Connects users with local contractors based on their location', imageUrl: 'assets/web-design/desktop/image-builder.jpg' },
  { header: 'Blogr', message: 'Blogr is a platform for creating an online blog or publication', imageUrl: 'assets/web-design/desktop/image-blogr.jpg' },
  { header: 'Camp', message: 'Get expert training in coding, data, design, and digital marketing', imageUrl: 'assets/web-design/desktop/image-camp.jpg' }
]

export const AppProducts: Product[] = [
  { header: 'Airfilter', message: 'Solving the problem of poor indoor air quality by filtering the air', imageUrl: 'assets/app-design/desktop/image-airfilter.jpg' },
  { header: 'Eyecam', message: 'Product that lets you edit your favorite photos and videos at any time', imageUrl: 'assets/app-design/desktop/image-eyecam.jpg' },
  { header: 'Faceit', message: 'Get to meet your favorite internet superstar with the faceit app', imageUrl: 'assets/app-design/desktop/image-faceit.jpg' },
  { header: 'Todo', message: 'A todo app that features cloud sync with light and dark mode', imageUrl: 'assets/app-design/desktop/image-todo.jpg' },
  { header: 'Loopstudios', message: 'A VR experience app made for Loopstudios', imageUrl: 'assets/app-design/desktop/image-loopstudios.jpg' }
]

export const GraphicProducts: Product[] = [
  { header: 'Tim Brown', message: 'A book cover designed for Tim Brown’s new release, ‘Change’', imageUrl: 'assets/graphic-design/desktop/image-change.jpg' },
  { header: 'Boxed water', message: 'A simple packaging concept made for Boxed Water', imageUrl: 'assets/graphic-design/desktop/image-boxed-water.jpg' },
  { header: 'Science!', message: 'A poster made in collaboration with the Federal Art Project', imageUrl: 'assets/graphic-design/desktop/image-science.jpg' }
]
