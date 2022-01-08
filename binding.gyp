{
  "targets": [
    {
      "target_name": "NativeExtension",
      "sources": [
        "NativeExtension.cc",
        "alsa-getvolume.cc",
        "alsa-setvolume.cc",
        "alsa-getmute.cc",
        "alsa-mute.cc"
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