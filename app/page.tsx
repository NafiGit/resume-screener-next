import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Candidate Screening System</h1>
        <p className="text-xl text-muted-foreground">Evaluate and rank candidates for AI-related roles</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Start New Interview</CardTitle>
            <CardDescription>Begin the screening process for a new candidate</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/interview" passHref>
              <Button className="w-full">
                <Brain className="mr-2 h-4 w-4" /> Start Interview
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>View Rankings</CardTitle>
            <CardDescription>See the current rankings of all evaluated candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/rankings" passHref>
              <Button className="w-full" variant="outline">View Rankings</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}