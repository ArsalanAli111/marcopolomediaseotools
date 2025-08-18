import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you use our Service. This includes URLs, text content, and images that you input into our optimization tools. We do not store this information permanently; it is used solely to provide the requested service and then discarded. We may also collect anonymous usage data to improve our Service.
          </p>

          <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>
            The information you provide is sent to third-party AI service providers (such as Google's Gemini) to generate the analysis and suggestions that form the core of our Service. We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Service.</li>
            <li>Analyze usage and trends to enhance user experience.</li>
            <li>Communicate with you, if you provide contact information.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-foreground">5. Your Consent</h2>
          <p>
            By using our site, you consent to our website's privacy policy.
          </p>

          <h2 className="text-xl font-semibold text-foreground">6. Changes to Our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
