const courses = [
  {
    id: 1,
    title: "Create/Update Sitemap",
    slug: "react-auth0-authentication-security",
    authorId: 3,
    refurl: "https://www.crazyegg.com/blog/seo-benefits-of-xml-html-sitemaps/"
  },
  {
    id: 2,
    title: "Update Style Guide",
    slug: "react-big-picture",
    authorId: 1,
    refurl: "https://gravitatecreative.com/benefits-brand-style-guide/"
  },
  {
    id: 3,
    title: "Security Review",
    slug: "react-creating-reusable-components",
    authorId: 5,
    refurl: "https://www.cloudflare.com/learning/security/what-is-web-application-security/"
  },
  {
    id: 4,
    title: "SEO Update",
    slug: "javascript-development-environment",
    authorId: 1,
    refurl: "https://www.forbes.com/sites/jaysondemers/2015/11/03/the-top-10-reasons-you-need-seo/#6e145af37f36"
  },
  {
    id: 5,
    title: "Review Competitor Site",
    slug: "react-redux-react-router-es6",
    authorId: 5,
    refurl: "https://www.singlegrain.com/blog-posts/analytics/10-ways-to-do-modern-day-website-competitive-analysis-quickly/"
  }
];

const authors = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  refurl: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
