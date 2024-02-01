interface Post {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  overview: string;
  featured: boolean;
  publishedAt: string;
  lastUpdated: string;
  author: any;
  category: string;
  image: any;
  slug: {
    _type: string;
    current: string;
  };
  content: Array<{
    _key: string;
    _type: string;
    style: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
  }>;
}
