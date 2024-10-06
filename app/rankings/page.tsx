'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Candidate {
  name: string;
  score: number;
}

export default function RankingsPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from a database
    const mockCandidates: Candidate[] = [
      { name: 'Alice Johnson', score: 85 },
      { name: 'Bob Smith', score: 78 },
      { name: 'Charlie Brown', score: 92 },
      { name: 'Diana Ross', score: 88 },
    ];
    setCandidates(mockCandidates.sort((a, b) => b.score - a.score));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Candidate Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}