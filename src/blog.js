// 2️⃣ Create your list of blog entries
var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-entry";
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read more →";
    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(description);
    blogDiv.appendChild(link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
