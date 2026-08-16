const os = require("os");

console.log("Operating System:", os.platform());
console.log("Computer Name:", os.hostname());
console.log("CPU Cores:", os.cpus().length);
console.log("Home Directory:", os.homedir());


/------------output-------------------/
PS C:\Users\AISHWARYA\OneDrive\Desktop\new> node --version
v24.19.0
PS C:\Users\AISHWARYA\OneDrive\Desktop\new> node core.js
Operating System: win32
Computer Name: LAPTOP-20P84C19
CPU Cores: 8
Home Directory: C:\Users\AISHWARYA
