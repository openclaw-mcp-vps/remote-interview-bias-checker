import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Bias Checker — Detect Unconscious Bias in Hiring',
  description: 'AI-powered analysis of interview notes to flag bias indicators and improve fair hiring at your company.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e36ff24a-fba5-468d-b072-fd7863ea24f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
