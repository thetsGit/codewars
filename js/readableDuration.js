function formatDuration (s) {
    let seconds = s;
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let finalSeconds = 0;
    let result = "";
    if (!seconds) {
      return "now";
    } else {
      if (seconds >= 31536000) {
        years = Math.floor(seconds / 31536000);
        seconds = seconds % 31536000;
      }
      if (seconds < 31536000 && seconds >= 86400) {
        days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;
      }
      if (seconds < 86400 && seconds >= 3600) {
        hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
      }
      if (seconds < 3600 && seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
      }
      if (seconds < 60) {
        finalSeconds = seconds;
      } 
      result  += `${years ? years > 1 ? `${years} years,` : `${years} year,` : ""}`;
      result  += `${days ? days > 1 ? `${days} days,` : `${days} day,` : ""}`;
      result  += `${hours ? hours > 1 ? `${hours} hours,` : `${hours} hour,` : ""}`;
      result  += `${minutes ? minutes > 1 ? `${minutes} minutes,` : `${minutes} minute,` : ""}`;
      result  += `${finalSeconds ? finalSeconds > 1 ? `${finalSeconds} seconds,` : `${finalSeconds} second,` : ""}`;
    }
    if (result[result.length - 1] === ","){
        result = result.slice(0, -1);
    }
    let chunks = result.split(",");
    if (chunks.length > 1) {
        chunks.splice(-1, 0, " and ");
        if (chunks.length > 3) {
            chunks = chunks.map((chunk,i) => {
                return chunks.length - i > 3 ? chunk + ", " : chunk;
            })
        }
    }
    return chunks.join("");
}

console.log(formatDuration(3662));