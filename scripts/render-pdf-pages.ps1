$ErrorActionPreference = "Stop"

$candidates = @(
  "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe",
  "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe",
  "python.exe",
  "python"
)

$python = $null
foreach ($candidate in $candidates) {
  $command = Get-Command $candidate -ErrorAction SilentlyContinue
  if ($command) {
    $python = $command.Source
    break
  }
}

if (-not $python) {
  throw "Python was not found. Install Python 3.11+ and pypdfium2, then rerun npm run pdf:images."
}

$env:PYTHONIOENCODING = "utf-8"
& $python "scripts/render-pdf-pages.py"
