import { getDeployStore } from "@netlify/blobs";
import fs from "fs";

export const onPostBuild = async ({ constants }) => {
  const store = getDeployStore({
    siteID: constants.SITE_ID,
    token: constants.NETLIFY_API_TOKEN,
  });
  let zippedSite = await fs.readFile("my-site.zip");

  await store.set("1.0.0", zippedSite);

  console.log("Nail blob set for this deploy");
};
