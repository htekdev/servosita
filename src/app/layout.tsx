import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servosita — Tu salón, en tu bolsillo",
  description:
    "Gestiona tu salón de belleza desde tu celular. Agenda citas por WhatsApp, cobra automáticamente, y deja que Servosita se encargue del resto.",
  keywords: [
    "salón de belleza",
    "gestión de salón",
    "agenda citas",
    "WhatsApp booking",
    "México",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">{children}</body>
    </html>
  );
}
