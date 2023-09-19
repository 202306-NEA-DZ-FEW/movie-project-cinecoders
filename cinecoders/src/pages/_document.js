import { Html, Head, Main, NextScript } from "next/document"
import Footer from "@/components/Footer/Footer"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>
          <Main />

          <NextScript />

          <div style={{ marginTop: "7rem" }}>
            <Footer />
          </div>
        </div>
      </body>
    </Html>
  )
}
