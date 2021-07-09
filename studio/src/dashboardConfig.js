export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e793c7a1c38d00bad028bb",
                  title: "Sanity Studio",
                  name: "billy-webb-sanity-gatsby-blog-studio",
                  apiId: "3702514f-41b2-4a75-9d7a-a13bf3a9043b",
                },
                {
                  buildHookId: "60e793c7a1c38d00b3d02a4f",
                  title: "Blog Website",
                  name: "billy-webb-sanity-gatsby-blog",
                  apiId: "c4775b9c-083a-44e7-93f2-976e9d26c99e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/billywebb/billy-webb-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://billy-webb-sanity-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
