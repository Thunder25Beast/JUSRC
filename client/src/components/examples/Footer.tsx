import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Footer example - scroll down to see the footer</p>
      </div>
      <Footer />
    </div>
  );
}