const promptTemplates = {
  ChatGPT: (idea) =>
    `Act as an advanced AI assistant and provide a highly detailed and professional response for the following request: ${idea}. Include clarity, structure, and useful insights.`,

  "Image Generator": (idea) =>
    `Create an ultra-detailed cinematic image of ${idea}, with dramatic lighting, realistic textures, vibrant colors, highly detailed environment, 4K digital art, trending on ArtStation.`,

  "Coding Assistant": (idea) =>
    `Act as a senior software engineer and help build the following project or feature: ${idea}. Provide clean, scalable, and optimized code with explanations.`,

  Marketing: (idea) =>
    `Create a high-converting marketing strategy for: ${idea}. Include branding ideas, audience targeting, emotional hooks, and persuasive messaging.`,

  "Video Generator": (idea) =>
    `Generate a cinematic video concept for: ${idea}. Include scene descriptions, camera angles, lighting, atmosphere, and storytelling details.`,
};

export function generatePrompt(category, idea) {
  const generator = promptTemplates[category];

  if (!generator) {
    return idea;
  }

  return generator(idea);
}
