{
  "targets": [
    {
      "target_name": "NativeExtension",
      "sources": [
        "NativeExtension.cc",
        "functions.cc",
        "alsa-getvolume.cc",
        "alsa-setvolume.cc"
      ],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ],
      "libraries": [
          "-lasound"
      ]
    }
  ],
}