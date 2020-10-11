export function getCurrentTime(){
    var today = new Date(),
    time = `${today.getHours()}-${today.getMinutes()}-${today.getSeconds()},${today.getMilliseconds()}`;
    
    return time;
}