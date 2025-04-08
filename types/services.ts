export type ServiceType = 'One-time' | 'Subscription';

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
  description: string;
  price: number;
  type: ServiceType;
  gumroadLink: string;
  thumbnail: Thumbnail[];
  active: boolean;
}

export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    Slug: string;
    Description: string;
    Price: number;
    Type: ServiceType;
    'Gumroad Link': string;
    Thumbnail: Thumbnail[];
    Active: boolean;
  };
}

export interface AirtableResponse {
  records: AirtableRecord[];
} 