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
    image: "https://via.placeholder.com/600x400/003366/ffffff?text=TypeScript",
    imageAlt: "TypeScript logo",
    slug: "understanding-typescript",
  },
  {
    title: "Why JSON Matters",
    date: "October 20, 2025",
    description: "Exploring how JSON powers data flow in modern web apps.",
    image: "https://via.placeholder.com/600x400/003366/ffffff?text=JSON",
    imageAlt: "JSON example graphic",
    slug: "why-json-matters",
  },
];

// 3️⃣ Dynamically Append Blogs to the DOM
const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  // Create the blog entry container
  const blogDiv = document.createElement("div");
  blogDiv.className = "blog-entry";

  // Create and append the title
  const title = document.createElement("h2");
  title.textContent = blog.title;
  blogDiv.appendChild(title);

  // Create and append the date
  const date = document.createElement("p");
  date.className = "blog-date";
  date.textContent = blog.date;
  blogDiv.appendChild(date);

  // Create and append the image
  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  blogDiv.appendChild(image);

  // Create and append the description
  const description = document.createElement("p");
  description.textContent = blog.description;
  blogDiv.appendChild(description);

  // Create and append the "Read more" link
  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  link.textContent = "Read more →";
  link.className = "blog-link";
  blogDiv.appendChild(link);

  // Append the blog entry to the container
  blogContainer?.appendChild(blogDiv);
});
