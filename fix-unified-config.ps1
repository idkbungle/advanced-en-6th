# PowerShell script to unify all unit configurations

$unitsDir = "docs\units"

# Get all unit directories
$unitDirs = Get-ChildItem -Path $unitsDir -Directory | Where-Object { $_.Name -match "^unit\d+$" }

foreach ($unitDir in $unitDirs) {
    $unitName = $unitDir.Name
    $readmeFile = Join-Path $unitDir.FullName "README.md"
    
    if (Test-Path $readmeFile) {
        Write-Host "Updating $readmeFile"
        
        # Read the file content
        $content = Get-Content $readmeFile -Raw
        
        # Fix icon to book (replace any existing icon)
        if ($content -match "icon:\s*.*") {
            $content = $content -replace "icon:\s*.*", "icon: book"
            Write-Host "  - Updated icon to book"
        } else {
            # Add icon after title if it doesn't exist
            $content = $content -replace "title: (Unit \d+)", "title: `$1`nicon: book"
            Write-Host "  - Added icon: book"
        }
        
        # Remove sidebar configuration to enable auto-generation
        if ($content -match "sidebar:\s*.*") {
            $content = $content -replace "sidebar:\s*.*\r?\n", ""
            Write-Host "  - Removed sidebar configuration for auto-generation"
        }
        
        # Write back to file
        Set-Content -Path $readmeFile -Value $content -NoNewline
        
        Write-Host "  - Updated $unitName configuration"
    }
}

Write-Host "`nAll unit configurations have been unified!"
Write-Host "- All units now use 'icon: book'"
Write-Host "- All units will have auto-generated sidebars based on content" 