import { createClient } from "next-sanity";

const projectId = "yqrw8lvf";
const dataset = "production";
const apiVersion = "2024-01-30";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
