---
layout: ../../../layouts/DocsLayout.astro
title: Getting Started with Mikasa Agent
---

# Getting Started with Mikasa Agent

Welcome to Mikasa Agent! This guide will help you get started with setting up and using the Mikasa Agent in your projects.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 14 or higher
- Python 3.8 or higher
- Go 1.16 or higher

## Installation

```bash
npm install mikasa-agent
```

## Quick Start

1. Initialize your project:
```bash
npx mikasa-init
```

2. Configure your agent:
```javascript
import { MikasaAgent } from 'mikasa-agent';

const agent = new MikasaAgent({
  // your configuration here
});
```

3. Start the agent:
```javascript
await agent.start();
```

## Next Steps

- Learn about [Architecture](../architecture)
- Explore [Project Structure](../project-structure)
- Try the [Demo](../run-demo)