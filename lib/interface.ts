interface Author {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  bio: string;
}

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
  authors: Author[];
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
