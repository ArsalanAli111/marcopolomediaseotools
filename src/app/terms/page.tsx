import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing and using MarcoPolo Media Optimizer (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
          </p>

          <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
          <p>
            The Service provides AI-powered tools for SEO and content optimization. These tools are provided "as is" and are subject to change without notice. We do not guarantee any specific results from using the Service, including but not limited to search engine rankings or website traffic.
          </p>

          <h2 className="text-xl font-semibold text-foreground">3. User Conduct</h2>
          <p>
            You agree not to use the Service for any unlawful purpose or in any way that could harm the Service or its users. You are responsible for any content you input into the Service.
          </p>

          <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
          <p>
            All content and technology associated with the Service are the property of MarcoPolo Media Optimizer. You may not copy, modify, or distribute any part of the Service without our express written permission.
          </p>

          <h2 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
          <p>
            In no event shall MarcoPolo Media Optimizer be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.
          </p>
          
          <h2 className="text-xl font-semibold text-foreground">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
