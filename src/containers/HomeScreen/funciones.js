export const isSearched = (searchValue) => (item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase());
