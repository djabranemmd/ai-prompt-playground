const enhancements = [
  "highly detailed",
  "cinematic lighting",
  "professional composition",
  "ultra realistic",
  "4K quality",
  "optimized for AI generation",
];

export function enhancePrompt(prompt) {
  const randomEnhancements = enhancements
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return `${prompt}, ${randomEnhancements.join(", ")}`;
}
