# Node.js

Node.js is a **JavaScript runtime environment** that allows developers to run JavaScript outside of a web browser.  

---

## Origins

- Created by **Ryan Dahl**.  
- First released in *2009*.  
- Built on the **V8 JavaScript engine** from Google Chrome.  

---

## Key Features

1. Non-blocking, event-driven architecture.  
2. Lightweight and efficient for building web servers.  
3. Large ecosystem of libraries via **npm (Node Package Manager)**.  

---

## Example

```javascript
const http = require('http');

const server = http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(3000);

---

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting  

