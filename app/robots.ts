import { NextResponse } from "next/server";

export async function GET() {
  const robots = `
# ============================
# Robots.txt - Suzuki Auto Jogja
# ============================

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# OpenAI
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Google AI
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

# Microsoft
User-agent: Bingbot
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Common Crawlers
User-agent: Applebot
Allow: /

User-agent: DuckDuckBot
Allow: /

Host: https://www.suzukiautojogja.com

Sitemap: https://www.suzukiautojogja.com/sitemap.xml
`;

  return new NextResponse(robots.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}