export const filterData = (data, option) => {
  const { genre, releaseYear, rating, searchQuery } = option;
  let arr = [...data];
  if (genre) {
    if (genre !== "all") {
      arr = arr.filter(({ genre: g }) => g.includes(genre));
    }
  }
  if (releaseYear) {
    if (releaseYear !== "all") {
      arr = arr.filter(({ year }) => year == +releaseYear);
    }
  }
  if (rating) {
    if (rating !== "all") {
      arr = arr.filter(({ rating: r }) => r == +rating);
    }
  }
  if (searchQuery) {
    const searchQueryLowered = searchQuery.toLowerCase();
    arr = arr.filter(
      ({ title, cast, director }) =>
        title?.toLowerCase()?.includes(searchQueryLowered) ||
        cast?.some((cast) =>
          cast?.toLowerCase()?.includes(searchQueryLowered)
        ) ||
        director?.toLowerCase()?.includes(searchQueryLowered)
    );
  }
  return arr;
};
