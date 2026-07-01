
const fs = require('fs'),
      path = require('path');

const configs = {
    androidPath: "/platforms/android/app/src/main/assets/www/",
    androidMainPath: "/platforms/android/app/src/main/",
    androidAppPath: "/platforms/android/app/",
    configPathAndroid: "/platforms/android/app/src/main/res/xml/config.xml",
    configPathIos: "/platforms/ios/ECOP Mobile TeamC/config.xml",
    androidManifest: "AndroidManifest.xml",
    iosPath: "/platforms/ios/www/",
    iosMainPath: "/platforms/ios/"
};

module.exports=function(ctx){
  console.log("Copy GTM container hook placeholder");

  fs.copyFileSync("/resources/container/GTM-KLBN64W6.json", "/platforms/android/app/src/main/assets/containers/GTM-KLBN64W6.json");
  fs.copyFileSync("/resources/container/GTM-KLBN64W6.json", "/platforms/ios/container/GTM-KLBN64W6.json");
  
  
};

function moveGSFiles(oldPath, newPath){
    fs.copyFileSync(oldPath, newPath);
  }
