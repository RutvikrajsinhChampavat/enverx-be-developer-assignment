interface CREATE_BLOG_BODY {
  title: string;
  category: string;
  description: string;
}

interface UPDATE_BLOG_BODY {
  title?: string;
  category?: string;
  description?: string;
}
