const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
  "Cache-Control": "no-cache",
};

export const fetchHygraph = async (query) =>
  (
    await (
      await fetch(
        process.env.HYGRAPH_ENDPOINT +
          "?t=" +
          Math.floor(Math.random() * 100000000000 + 1),
        {
          cache: "no-store",
          method: "POST",
          headers,
          body: JSON.stringify(query),
        }
      )
    ).json()
  ).data;
