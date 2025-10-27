// 1️⃣ Define your Blog type
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// 2️⃣ Create your list of blog entries
const blogs: Blog[] = [
  {
    title: "Understanding TypeScript",
    date: "October 26, 2025",
    description: "A beginner-friendly dive into TypeScript and static typing.",
    image: "./images/typescript.png",
    imageAlt: "TypeScript logo",
    slug: "understanding-typescript",
  },
  {
    title: "Why JSON Matters",
    date: "October 20, 2025",
    description: "Exploring how JSON powers data flow in modern web apps.",
    image: "./images/json.png",
    imageAlt: "JSON example graphic",
    slug: "why-json-matters",
  },
];

// 3️⃣ Dynamically Append Blogs (your code goes here)
const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.className = "blog-entry";

  const title = document.createElement("h2");
  title.textContent = blog.title;

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const description = document.createElement("p");
  description.textContent = blog.description;

  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  link.textContent = "Read more →";

  blogDiv.appendChild(title);
  blogDiv.appendChild(image);
  blogDiv.appendChild(description);
  blogDiv.appendChild(link);

  blogContainer?.appendChild(blogDiv);
});
