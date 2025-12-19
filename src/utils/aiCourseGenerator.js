export const generateAICourse = (topic) => {
  /**
   * NOTE:
   * This file simulates AI-generated course creation.
   * In production, this logic would be replaced by a call to
   * OpenAI / Claude / Gemini using the same prompt structure.
   */
  return {
    id: "c_" + Date.now(),
    title: `${topic} Fundamentals`,
    description: `Learn practical ${topic} skills with step-by-step guidance`,
    level: "Beginner",
    duration: "2 hours",
    modules: [
      {
        id: "m_" + Date.now() + "_1",
        title: `${topic} Safety Basics`,
        content: `This module explains basic safety rules required while working with ${topic}.`,
        quiz: [
          {
            q: `Why is safety important in ${topic}?`,
            options: [
              "To avoid accidents",
              "For fun",
              "No reason",
              "To waste time",
            ],
            correct: 0,
          },
        ],
        assignment: {
          task: `List 3 safety rules you must follow while doing ${topic}.`,
          submitted: false,
        },
      },
      {
        id: "m_" + Date.now() + "_2",
        title: `${topic} Tools & Techniques`,
        content: `Learn about tools and techniques used in ${topic}.`,
        quiz: [
          {
            q: `Why should correct tools be used in ${topic}?`,
            options: [
              "Better results",
              "More risk",
              "Slower work",
              "No impact",
            ],
            correct: 0,
          },
        ],
        assignment: {
          task: `Name 2 tools used in ${topic} and explain their use.`,
          submitted: false,
        },
      },
    ],
  };
};
