## Getting Started

1. install depedencies `npm i`
2. define your dictionary => `en.json`
3. update index.js `outputLanguages` to select your output languages
4. run the script `node index.js`


### example input 

`en.json`
```json
{
  "FileUpload": {
    "failedToOpenCamera": "Kamera konnte nicht geöffnet werden",
    "browserNotSupported": "Es scheint, dass Ihr Browser oder Ihre App in der App-Aufnahme nicht unterstützt.",
    "tapToUpload": "Tippen Sie auf, um Ihre Datei hochzuladen",
    "maxSize": "maximale Größe",
    "seePreview": "Siehe Vorschau.",
    "pleaseDoNotClose": "Es dauert einige Minuten, bitte schließen Sie die App nicht.",
    "delete": "Löschen",
    "replace": "Ersetzen",
    "deleteConfirmation": "Möchten Sie sicher, dass Sie seine Datei löschen möchten?",
    "yesDelete": "Ja, delete.",
    "cancel": "Abbrechen"
  }
}
```

### example output

`output/de.json`

```json
{
  "FileUpload": {
    "failedToOpenCamera": "Kamera konnte nicht geöffnet werden",
    "browserNotSupported": "Es scheint, dass Ihr Browser oder Ihre App in der App-Aufnahme nicht unterstützt.",
    "tapToUpload": "Tippen Sie auf, um Ihre Datei hochzuladen",
    "maxSize": "maximale Größe",
    "seePreview": "Siehe Vorschau.",
    "pleaseDoNotClose": "Es dauert einige Minuten, bitte schließen Sie die App nicht.",
    "delete": "Löschen",
    "replace": "Ersetzen",
    "deleteConfirmation": "Möchten Sie sicher, dass Sie seine Datei löschen möchten?",
    "yesDelete": "Ja, delete.",
    "cancel": "Abbrechen"
  }
}
```
