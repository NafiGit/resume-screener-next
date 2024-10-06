export const interviewQuestions = [
  {
    question: "Can you explain the difference between supervised and unsupervised learning?",
    keywords: ["labeled data", "training set", "classification", "regression", "clustering", "dimensionality reduction"]
  },
  {
    question: "What is deep learning and how does it differ from traditional machine learning?",
    keywords: ["neural networks", "layers", "feature extraction", "representation learning", "big data"]
  },
  {
    question: "Explain the concept of overfitting and how to prevent it.",
    keywords: ["regularization", "cross-validation", "dropout", "early stopping", "data augmentation"]
  },
  {
    question: "What is the role of activation functions in neural networks?",
    keywords: ["non-linearity", "sigmoid", "ReLU", "tanh", "softmax", "vanishing gradient"]
  },
  {
    question: "Describe the process of feature engineering and its importance in machine learning.",
    keywords: ["domain knowledge", "data transformation", "dimensionality reduction", "feature selection", "feature extraction"]
  }
];

export function evaluateCandidate(answers: string[]): number {
  let totalScore = 0;
  
  answers.forEach((answer, index) => {
    const question = interviewQuestions[index];
    const keywordCount = question.keywords.filter(keyword => 
      answer.toLowerCase().includes(keyword.toLowerCase())
    ).length;
    const questionScore = (keywordCount / question.keywords.length) * 20; // 20 points per question
    totalScore += questionScore;
  });

  return Math.round(totalScore);
}