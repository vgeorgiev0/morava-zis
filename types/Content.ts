export interface Content {
  sys: Sys;
  total: number;
  skip: number;
  limit: number;
  items?: Apartments[];
  includes: Includes;
}
export interface Sys {
  type: string;
}
export interface Apartments {
  metadata: Metadata;
  sys: Sys1;
  fields: Fields;
}
export interface Metadata {
  tags?: null[];
}
export interface Sys1 {
  space: SpaceOrEnvironmentOrContentTypeOrImages;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentTypeOrImages;
  revision: number;
  contentType: SpaceOrEnvironmentOrContentTypeOrImages;
  locale: string;
}
export interface SpaceOrEnvironmentOrContentTypeOrImages {
  sys: Sys2;
}
export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}
export interface Fields {
  name: string;
  slug: string;
  price: number;
  size: number;
  capacity: number;
  featured: boolean;
  description: string;
  extras?: string[];
  images?: SpaceOrEnvironmentOrContentTypeOrImages[];
}
export interface Includes {
  Asset?: Asset[];
}
export interface Asset {
  metadata: Metadata;
  sys: Sys3;
  fields: Fields1;
}
export interface Sys3 {
  space: SpaceOrEnvironmentOrContentTypeOrImages;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentTypeOrImages;
  revision: number;
  locale: string;
}
export interface Fields1 {
  title: string;
  file: File;
}
export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}
export interface Details {
  size: number;
  image: Image;
}
export interface Image {
  width: number;
  height: number;
}
