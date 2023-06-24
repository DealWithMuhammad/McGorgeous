import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6anb4ivh",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "sk1DT1VRMc45Zo9iUmezz3LayG3LsnZl1MZKyfFkynclZS6a5jplSiM1b0inJaGkKSNfPjBmEAjTEaxoj7AOvYBMNnARkGP7e3gw5p2qRzCdfPkvw89ff0uOciOCed3hKIwMn7TLQLTRVzWlDcToyl04hZlWXsEMimbKKodqclCV0mBLjLhI",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
