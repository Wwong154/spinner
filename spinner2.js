const spin = ['\r|   ','\r/   ','\r-   ','\r\\   '];
for (let i = 0; i < 9; i++) {
  setTimeout(() => process.stdout.write(spin[i % 4]), i * 200 + 100);
}
setTimeout(() => {
  process.stdout.write('\n');
}, 1800);