export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground">
      <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-primary rounded-full" />
    </div>
  );
}
