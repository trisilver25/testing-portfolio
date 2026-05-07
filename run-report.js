// open the html file using the open package
(async () => {
  const open = await import("open");
  open.default('./reports/html/index.html');
})();