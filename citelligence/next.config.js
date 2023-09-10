/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const path = require('path')

const nextConfig = {
    experimental: {
        serverActions: true
    },
    webpack: (config, { isServer }) => {
        // Add a rule to handle video files
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|ogv|mov|mkv|m4v)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/', // Adjust the path as needed
            //   outputPath: isServer ? path.join(__dirname, '.next/static/media') : undefined,
            outputPath: isServer ? path.join('.next/static/media') : undefined,
            },
          },
          
        });
    
        return config;
      },
}

module.exports = nextConfig
