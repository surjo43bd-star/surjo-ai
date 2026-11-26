export const metadata = {
  title: "Surjo AI",
  description: "Your Personal AI Assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
