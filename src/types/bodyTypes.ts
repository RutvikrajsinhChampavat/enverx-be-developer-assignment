export interface CREATE_BLOG_BODY {
  title: string;
  category: string;
  description: string;
}

export interface UPDATE_BLOG_BODY {
  title?: string;
  category?: string;
  description?: string;
}
