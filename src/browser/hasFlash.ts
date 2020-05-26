const hasFlash = (): boolean => {
  let hasFlashPlayer = false;
  let xFlash;
  let plugins = navigator.plugins;
  let shockwave =
    navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"];

  xFlash = function () {
    let result = false;
    let versions = [
      "ShockwaveFlash.ShockwaveFlash.6",
      "ShockwaveFlash.ShockwaveFlash.7",
      "ShockwaveFlash.ShockwaveFlash",
    ];

    for (let i = 0; i < versions.length; i++) {
      if (!result)
        try {
          result = new ActiveXObject(versions[i]);
        } catch (e) {
          console.log(e);
        }
    }

    return !!result;
  };

  hasFlashPlayer =
    (plugins && plugins.length && shockwave && shockwave.enabledPlugin) ||
    (typeof ActiveXObject !== "undefined" && xFlash()) ||
    false;

  return !!hasFlashPlayer;
};
export default hasFlash;
