exports.default = ({ orig }) => {
  if (orig === 'import("vue3")') {
    return 'import("vue")';
  } else {
    return orig;
  }
};
