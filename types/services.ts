export type ServiceType = 'one time' | 'subscription';

export interface Thumbnail {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  width: number;
  height: number;
  thumbnails: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
  };
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  description: string;
  packages_include?: string;
  price: number;
  type: ServiceType;
  gumroadLink: string;
  redirectLink?: string;
  thumbnail: Thumbnail[];
  active: boolean;
  number_of_purchases?: number;
}

export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    Slug: string;
    tagline?: string;
    Description: string;
    packages_include?: string;
    Price: number;
    Type: ServiceType;
    'Gumroad Link': string;
    'Redirect Link'?: string;
    Thumbnail: Thumbnail[];
    Active: boolean;
    number_of_purchases?: number;
  };
}

export interface AirtableResponse {
  records: AirtableRecord[];
} 