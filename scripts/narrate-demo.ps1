$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Speech
$citedNarrationDirectory=Join-Path (Get-Location) 'artifacts/demo'
New-Item -ItemType Directory -Force -Path $citedNarrationDirectory | Out-Null
$citedScenes=Get-Content -LiteralPath 'docs/DEMO_NARRATION.json' -Raw | ConvertFrom-Json
$citedSpeaker=New-Object System.Speech.Synthesis.SpeechSynthesizer
$citedSpeaker.SelectVoice('Microsoft David Desktop')
$citedSpeaker.Rate=1
try { foreach($citedScene in $citedScenes){
  $citedSpeaker.SetOutputToWaveFile((Join-Path $citedNarrationDirectory ($citedScene.id+'.wav')))
  $citedSpeaker.Speak($citedScene.text)
  $citedSpeaker.SetOutputToNull()
  Write-Output ('Narration ready: '+$citedScene.id)
} } finally { $citedSpeaker.Dispose() }
