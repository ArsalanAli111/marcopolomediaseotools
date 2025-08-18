import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
          About MarcoPolo Media Optimizer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We are a team of passionate developers, SEO experts, and AI enthusiasts dedicated to building tools that empower businesses to achieve their digital marketing goals.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Target className="h-10 w-10 text-primary" />
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission is to democratize SEO and content optimization. We believe that every business, regardless of size, should have access to powerful, easy-to-use tools that drive growth and improve online visibility. We strive to create intuitive solutions that simplify complex marketing tasks.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Bot className="h-10 w-10 text-primary" />
              <CardTitle>Our Technology</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At the heart of MarcoPolo is a powerful AI engine trained on vast amounts of data. We leverage cutting-edge generative models to provide intelligent suggestions for headings, meta descriptions, keywords, and more, helping you create content that resonates with both search engines and your audience.
            </p>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader className="items-center">
            <Users className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-center">Meet the Team</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
             <p className="text-muted-foreground mb-6">
                We are a diverse team of innovators and problem-solvers. While we prefer to let our product speak for itself, know that behind every feature is a dedicated professional committed to your success.
            </p>
            <div className="flex justify-center space-x-8">
                <div>
                    <h3 className="font-semibold text-lg text-foreground">AI & Backend Team</h3>
                    <p className="text-muted-foreground">The brains behind the algorithms.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-foreground">Frontend & UX Team</h3>
                    <p className="text-muted-foreground">The artists who craft your experience.</p>
                </div>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
