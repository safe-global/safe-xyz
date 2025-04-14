import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'safe-xyz'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // add the support for svgr / webpack
  webpack(config) {
    // Exclude SVG from Next.js's default file loader
    const fileLoaderRule = config.module.rules.find((rule: { test?: { test?: (path: string) => boolean } }) =>
      rule.test?.test?.('.svg'),
    )
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Add custom rule for handling SVGs with SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    })

    return config
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  trailingSlash: true,
}

export default nextConfig
