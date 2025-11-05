// 2️⃣ Create your list of blog entries
var blogs = [
    {
        title: "Blockchain Excursion",
        date: "November 5, 2025",
        description: "Exploring three full-stack blockchain projects on the Base network: real-time transaction visualization, DeFi leaderboards, and yield dashboards.",
        image: "https://via.placeholder.com/600x400/003366/ffffff?text=Blockchain",
        imageAlt: "Blockchain projects showcase",
        slug: "blockchain-excursion",
    },
    {
        title: "Understanding TypeScript",
        date: "October 26, 2025",
        description: "A beginner-friendly dive into TypeScript and static typing.",
        image: "assets/Typescript.png",
        imageAlt: "TypeScript logo",
        slug: "understanding-typescript",
    },
    {
        title: "Why JSON Matters",
        date: "October 20, 2025",
        description: "Exploring how JSON powers data flow in modern web apps.",
        image: "assets/json_example_image.png",
        imageAlt: "JSON example graphic",
        slug: "why-json-matters",
    },
];
// 3️⃣ Dynamically Append Blogs to the DOM
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    // Create the blog entry container
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-entry";
    // Create and append the title
    var title = document.createElement("h2");
    title.textContent = blog.title;
    blogDiv.appendChild(title);
    // Create and append the date
    var date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = blog.date;
    blogDiv.appendChild(date);
    // Create and append the image
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogDiv.appendChild(image);
    // Create and append the description
    var description = document.createElement("p");
    description.textContent = blog.description;
    blogDiv.appendChild(description);
    // Create and append the "Read more" link
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read more →";
    link.className = "blog-link";
    blogDiv.appendChild(link);
    // Append the blog entry to the container
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
