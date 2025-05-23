# PowerShell script to add icons to all unit files

$unitsDir = "docs\units"

# Define icons for each unit (using FontAwesome icons)
$unitIcons = @{
    "unit1" = "lightbulb"
    "unit2" = "heart"
    "unit3" = "user-md"
    "unit4" = "leaf"
    "unit5" = "graduation-cap"
    "unit6" = "comments"
    "unit7" = "clock"
    "unit8" = "globe"
    "unit9" = "music"
    "unit10" = "mountain"
    "unit11" = "star"
    "unit12" = "trophy"
}

# Get all unit directories
$unitDirs = Get-ChildItem -Path $unitsDir -Directory | Where-Object { $_.Name -match "^unit\d+$" }

foreach ($unitDir in $unitDirs) {
    $unitName = $unitDir.Name
    $readmeFile = Join-Path $unitDir.FullName "README.md"
    
    if (Test-Path $readmeFile) {
        Write-Host "Adding icon to $readmeFile"
        
        # Read the file content
        $content = Get-Content $readmeFile -Raw
        
        # Check if icon already exists
        if ($content -notmatch "icon:") {
            # Find the title line and add icon after it
            $icon = $unitIcons[$unitName]
            if ($icon) {
                # Replace the title line to include icon
                $content = $content -replace "title: (Unit \d+)", "title: `$1`nicon: $icon"
                
                # Write back to file
                Set-Content -Path $readmeFile -Value $content -NoNewline
                
                Write-Host "Added icon '$icon' to $readmeFile"
            }
        } else {
            Write-Host "Icon already exists in $readmeFile"
        }
    }
}

Write-Host "All unit icons have been added!" 