---
layout: ../../../layouts/DocsLayout.astro
title: Setup - Mikasa Agent
---

# Setting Up Mikasa Agent

Follow these steps to set up your Mikasa Agent environment.

## System Requirements

- Operating System: Linux, macOS, or Windows
- Memory: 4GB RAM minimum
- Storage: 1GB free space

## Installation Steps

1. Install Node.js and npm
2. Set up Python environment
3. Configure Go workspace

## Configuration

```javascript
{
  "agent": {
    "name": "my-mikasa-agent",
    "version": "1.0.0",
    "extensions": [
      "core",
      "custom-extension"
    ]
  }
}
```

## Environment Variables

- `MIKASA_ENV`: Development/Production
- `MIKASA_PORT`: Agent port number
- `MIKASA_HOST`: Host address