'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { interviewQuestions, evaluateCandidate } from '@/lib/interview';

export default function InterviewPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [candidateName, setCandidateName] = useState('');

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = evaluateCandidate(answers);
      // In a real application, you would save this data to a database
      console.log(`Candidate ${candidateName} scored: ${score}`);
      router.push('/rankings');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>AI Role Interview</CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion === 0 && (
            <div className="mb-4">
              <Label htmlFor="candidateName">Candidate Name</Label>
              <Input
                id="candidateName"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Enter candidate name"
              />
            </div>
          )}
          <div className="mb-4">
            <Label>Question {currentQuestion + 1}</Label>
            <p className="text-lg mb-2">{interviewQuestions[currentQuestion].question}</p>
            <Textarea
              placeholder="Enter your answer"
              className="mb-2"
              rows={4}
              onChange={(e) => handleAnswer(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleAnswer('')}
            disabled={currentQuestion === interviewQuestions.length - 1}
          >
            Next Question
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}