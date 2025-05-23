# PowerShell script to fix frontmatter for hope theme compatibility

$unitsDir = "docs\units"

# Get all unit directories
$unitDirs = Get-ChildItem -Path $unitsDir -Directory | Where-Object { $_.Name -match "^unit\d+$" }

foreach ($unitDir in $unitDirs) {
    $readmeFile = Join-Path $unitDir.FullName "README.md"
    
    if (Test-Path $readmeFile) {
        Write-Host "Fixing $readmeFile"
        
        # Read the file content
        $content = Get-Content $readmeFile -Raw
        
        # Fix frontmatter issues
        $content = $content -replace "sidebar: auto", "sidebar: true"
        $content = $content -replace "permalink: /units/unit(\d+)/", ""
        $content = $content -replace "categories:", "category:"
        
        # Write back to file
        Set-Content -Path $readmeFile -Value $content -NoNewline
        
        Write-Host "Fixed frontmatter in $readmeFile"
    }
}

Write-Host "All unit frontmatter has been fixed for hope theme compatibility!" 