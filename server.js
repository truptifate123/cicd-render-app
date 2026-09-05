const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>CI/CD Render App</title>
        </head>

        <body style="text-align:center; font-family:Arial; margin-top:100px;">
            <h1>🚀 CI/CD Deployment Successful!</h1>
            <p>My application is deployed using GitHub Actions and Render.</p>
            <p>Automatic deployment is working.</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});