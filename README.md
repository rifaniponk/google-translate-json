## Getting Started

1. install depedencies `npm i`
2. define your dictionary => `en.json`
3. update index.js `outputLanguages` to select your output languages
4. run the script `node index.js` and wait
5. check the output on `/output` folder


### example input 

`en.json`
```json
{
  "FileUpload": {
    "failedToOpenCamera": "Failed to Open Camera",
    "browserNotSupported": "It seems your browser or app doesn’t support in-app recording.",
    "tapToUpload": "Tap to upload your file",
    "maxSize": "max size",
    "seePreview": "See Preview",
    "pleaseDoNotClose": "It will take a few minutes, please do not close the app.",
    "delete": "Delete",
    "replace": "Replace",
    "deleteConfirmation": "Are you sure you want to delete this file?",
    "yesDelete": "Yes, delete",
    "cancel": "Cancel",
    "fileNotSupported": "Sorry, you can’t upload that kind of file. You can upload any of the following files: {{formatsxxx}}",
    "videoTooLarge": "Sorry, that video is too large. Reduce to size of your video to {{sizexxx}} or less or select a different one.",
    "photoTooLarge": "Sorry, that photo is too large. Reduce to size of your photo to {{sizexxx}} or less or select a different one.",
    "yourUploadWillBeRemoved": "Your uploaded file would be removed",
    "yourUploadWillBeRemovedIfModalClosed": "Your uploaded file will be removed if you close this view",
    "pleaseUploadFile": "Please upload a file before continuing",
    "only1FileAccepted": "Sorry, you can’t upload multiple files. Please select a single file.",
    "leaveConfirmation": "Are you sure you want to leave?",
    "videoIsNotSupported": "Sorry, your browser can’t play this type of video file",
    "stay": "Stay",
    "leave": "Leave",
    "ok": "OK"
  }
}
```

### example output

`output/de.json`

```json

```

### Notes

if you want to use variable like `Reduce to size of your video to {{size}}`. You need to use unknown word first then rename it later on your project. 
for example `Reduce to size of your video to {{sizexxx}}`. By this way we can avoid `size` to be translated.
