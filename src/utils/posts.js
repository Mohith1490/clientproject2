import matter from "gray-matter";
import fs from "fs";  

const BLOG_DIR = "../content/post";
export const findPostBySlug = async (slug) => {
  if (!slug) return null;

  try {
    const readFile = await fs.readFile(`../post/${BLOG_DIR}/${slug}.md`, "utf-8");
    const { data, content } = matter(readFile);

    const {
      publishDate: rawPublishDate = new Date(),
      updateDate: rawUpdateDate,
      title,
      excerpt,
      image,
      tags = [],
      category,
      author,
      draft = false,
      metadata = {},
    } = data;

    const publishDate = new Date(rawPublishDate);
    const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

    return {
      id: slug,
      slug: slug,

      publishDate: publishDate,
      updateDate: updateDate,

      title: title,
      excerpt: excerpt,
      image: image,

      category: category,
      tags: tags,
      author: author,

      draft: draft,

      metadata,

      content
    };
  } catch (e) {
    // empty catch block
  }

  return null;
};

