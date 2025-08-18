export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MarcoPolo Media Optimizer. All rights reserved.</p>
      </div>
    </footer>
  );
}
