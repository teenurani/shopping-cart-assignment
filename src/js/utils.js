module.exports = {
  categoriesData: function(categories) {
    return categories
      .filter((item, index) => item.enabled == true)
      .sort((a, b) => (a.order < b.order ? 0 : 1));
  }
};
