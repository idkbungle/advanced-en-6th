# Add frontmatter to unit files
for ($i = 2; $i -le 12; $i++) {
    $unitFile = "docs\units\unit$i\README.md"
    if (Test-Path $unitFile) {
        $content = Get-Content $unitFile -Raw
        $frontmatter = @"
---
title: Unit $i
date: 2024-01-01 12:00:00
permalink: /units/unit$i/
sidebar: auto
categories:
  - Units
tags:
  - English Learning
  - Translation
  - Unit $i
author:
  name: idkbungle
  link: https://github.com/idkbungle
---

# Unit $i

"@
        $newContent = $frontmatter + $content
        Set-Content -Path $unitFile -Value $newContent -Encoding UTF8
        Write-Host "Added frontmatter to Unit $i"
    }
} 