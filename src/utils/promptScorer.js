export function calculatePromptScore(prompt) {
  let score = 0;

  if (prompt.length > 100) score += 20;

  if (prompt.includes("detailed") || prompt.includes("cinematic")) {
    score += 25;
  }

  if (prompt.includes("lighting") || prompt.includes("4K")) {
    score += 20;
  }

  if (prompt.includes("professional") || prompt.includes("optimized")) {
    score += 20;
  }

  if (prompt.length > 250) score += 15;

  return Math.min(score, 100);
}
