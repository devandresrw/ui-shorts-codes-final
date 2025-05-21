import "./globals.css";
import { WrapperSceneMemo } from '@/components/scenes/WrapperScene'
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <WrapperSceneMemo>
          {children}
        </WrapperSceneMemo>
      </body>
    </html>
  );
}
