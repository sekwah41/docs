---
title: Overview
slug: /developer
description: Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.
keywords:
  [
    Jan,
    Customizable Intelligence, LLM,
    local AI,
    privacy focus,
    free and open source,
    private and offline,
    conversational AI,
    no-subscription fee,
    large language models,
  ]
---

The following docs are aimed at developers who want to build extensions on top of the Jan Framework.

:::tip
If you are interested to **contribute to the framework's Core SDK itself**, like adding new drivers, runtimes, and infrastructure level support, please refer to [framework docs](/developer/framework) instead.
:::

## Extensions

Jan an **extensible framework** (like VSCode or Obsidian) that lets you build, customize and run AI applications everywhere, with an emphasis on local first.

Extensions are automatically available across Mac, Windows, Linux Desktops.

Extensions can also be made available in local API server-mode, which can be deployed on any VM.

### Building Extensions

This framework is packaged and regularly published as an SDK through [npm](https://www.npmjs.com/org/janhq) and [pip](https://pypi.org/).

The framework provides built-in support for the following:

- Native OS integrations with Electron and Chromium
- Native server integrations with Nodejs
- Native mobile integrations with Capacitor (coming soon)

:::tip
Build once, deploy everywhere
:::

## Jan in Action

The [Jan Desktop client](https://github.com/janhq/jan/releases) is built with Jan SDK. This means you can customize any part of the application from the branding to the features, and truly make it your own.

[Gif: show desktop & server side by side]