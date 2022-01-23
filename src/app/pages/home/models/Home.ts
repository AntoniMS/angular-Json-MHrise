import { Image } from '../../../shared/models/Shared';

export interface Home {
  img: Image;
  description: string;
}

export interface Gallery {
  title: string;
  imageGallery: Image[];
}
