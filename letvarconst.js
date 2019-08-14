function range(start, end, step) {
  while (start < end) {
    // yield start
    return (start += step);
  }
}

for (let i of range(0, 10, 2)) {
  console.log(i); // 0, 2, 4, 6, 8
}
