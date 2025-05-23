# PowerShell script to create number SVG icons

$iconsDir = "docs\.vuepress\public\icons"

# Ensure icons directory exists
if (!(Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force
}

# Create SVG icons for units 1-12
for ($i = 1; $i -le 12; $i++) {
    $svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#3eaf7c" stroke="#ffffff" stroke-width="2"/>
  <text x="32" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">$i</text>
</svg>
"@
    
    $fileName = "unit$i.svg"
    $filePath = Join-Path $iconsDir $fileName
    
    $svgContent | Out-File -FilePath $filePath -Encoding UTF8
    Write-Host "Created $fileName"
}

Write-Host "All number icons created successfully!" 