import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:id", "routes/projects.$id.tsx"),
  route("publications", "routes/publications.tsx"),
  route("publications/:id", "routes/publications.$id.tsx"),
  route("photography", "routes/photography.tsx"),
  route("books", "routes/books.tsx"),
  route("books/:slug", "routes/books.$slug.tsx"),
  route("books/success", "routes/books.success.tsx"),
] satisfies RouteConfig;
