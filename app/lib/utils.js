export const formattedDate = function (dateString) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Remove the comma if present
  return formattedDate.replace(",", "");
};
