export const urlFetch = async (url: string) => {
  try {
    let unit8array, unit8arrayToString;

    //fetch Article Extractor
    let artExt = await fetch(
      `https://document-parser-api.lateral.io/?url=${url}`,
      {
        method: "get",
        headers: {
          "content-type": "application/json",
          "subscription-key": "f53dd4aea5bfc8ecd850fcbe1b08921e",
        },
      }
    );
    //get propper body description
    unit8array = await artExt.body?.getReader().read();
    unit8arrayToString = new TextDecoder("utf-8").decode(unit8array?.value);
    let newsDescription = JSON.parse(unit8arrayToString).description.replace(
      "\n",
      ""
    );
    //fetch News Recomendation
    let newsRec = await fetch(
      "https://news-api.lateral.io/documents/similar-to-text",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
          "subscription-key": "f53dd4aea5bfc8ecd850fcbe1b08921e",
        },
        body: JSON.stringify({ text: newsDescription }),
      }
    );
    //return final array
    unit8array = await newsRec.body?.getReader().read();
    unit8arrayToString = new TextDecoder("utf-8").decode(unit8array?.value);
    let suggestions = JSON.parse(unit8arrayToString);

    return suggestions;
  } catch (e) {
    console.log(e);
    return [];
  }
};
