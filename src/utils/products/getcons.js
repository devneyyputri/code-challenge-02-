import { cache } from "react";

export const revalidate = 1;

export const getCont = cache(async (id) => {
  console.log(id);
  const item = await fetch(
    `https://cdn.contentful.com/spaces/4dzwulfzvlla/environments/master/entries?${id}?access_token=oHZkqlejIrSGoX-mGUa_jrbJ3kj2FwbceNTvWs8Ct7w&content_type=productsPage`,
    );
  
  return item.json();
});