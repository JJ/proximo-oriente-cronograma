document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("tbody tr");
  const blocks = [
    { start: 2, end: 8 },
    { start: 9, end: 16 },
    { start: 17, end: 17 },
    { start: 18, end: 18 },
    { start: 19, end: 19 },
    { start: 20, end: 21 },
    { start: 22, end: 23 },
    { start: 24, end: 30 },
    { start: 31, end: 34 },
    { start: 35, end: rows.length },
  ];

  function showRows(start, end) {
    for (let i = start; i <= end; i++) {
      rows[i].style.display = "table-row";
    }
  }

  function animateBlocks(blocks, index = 0) {
    if (index >= blocks.length) return;
    const { start, end } = blocks[index];
    showRows(start, end);
    setTimeout(() => animateBlocks(blocks, index + 1), 1000);
  }

  // Initially hide all rows
  rows.forEach((row) => (row.style.display = "none"));

  // Start the animation
  animateBlocks(blocks);
});
