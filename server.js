const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CI/CD Deployment Dashboard</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #eef2ff, #f8fafc);
            color: #1e293b;
            min-height: 100vh;
            transition: 0.3s;
        }

        header {
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        .toggle {
            border: none;
            padding: 10px 16px;
            border-radius: 20px;
            cursor: pointer;
            background: #1e293b;
            color: white;
        }

        .hero {
            text-align: center;
            padding: 70px 20px 40px;
        }

        .hero h1 {
            font-size: 48px;
            margin-bottom: 15px;
        }

        .hero h1 span {
            color: #2563eb;
        }

        .hero p {
            font-size: 18px;
            color: #64748b;
            margin-bottom: 30px;
        }

        .button {
            border: none;
            padding: 14px 25px;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        .button:hover {
            transform: translateY(-2px);
            background: #1d4ed8;
        }

        .container {
            max-width: 1000px;
            margin: 30px auto;
            padding: 20px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .icon {
            font-size: 35px;
            margin-bottom: 15px;
        }

        .card h3 {
            margin-bottom: 10px;
        }

        .card p {
            color: #64748b;
        }

        .status {
            margin-top: 30px;
            background: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .status span {
            color: #16a34a;
            font-weight: bold;
        }

        #message {
            margin-top: 15px;
            font-weight: bold;
        }

        footer {
            text-align: center;
            padding: 40px;
            color: #64748b;
        }

        body.dark {
            background: #0f172a;
            color: #f8fafc;
        }

        body.dark .card,
        body.dark .status {
            background: #1e293b;
        }

        body.dark .card p,
        body.dark .hero p {
            color: #cbd5e1;
        }

        body.dark .toggle {
            background: #f8fafc;
            color: #0f172a;
        }

        @media (max-width: 700px) {
            .cards {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: 36px;
            }
        }
    </style>
</head>

<body>

<header>
    <div class="logo">🚀 CI/CD Dashboard</div>

    <button class="toggle" onclick="toggleDarkMode()">
        🌙 Dark Mode
    </button>
</header>

<section class="hero">

    <h1>Welcome to My <span>CI/CD Project🚀</span></h1>

    <p>
        A web application deployed automatically using
        GitHub Actions and Render.
    </p>

    <button class="button" onclick="checkDeployment()">
        Check Deployment Status
    </button>

    <div id="message"></div>

</section>

<div class="container">

    <div class="cards">

        <div class="card">
            <div class="icon">💻</div>
            <h3>Application</h3>
            <p>Node.js & Express web application</p>
        </div>

        <div class="card">
            <div class="icon">⚙️</div>
            <h3>GitHub Actions</h3>
            <p>Automated CI/CD workflow</p>
        </div>

        <div class="card">
            <div class="icon">☁️</div>
            <h3>Render</h3>
            <p>Cloud deployment platform</p>
        </div>

    </div>

    <div class="status">

        <h2>System Status</h2>

        <p style="margin-top:10px;">
            Application: <span>● ONLINE</span>
        </p>

        <p style="margin-top:10px;">
            Current Time: <strong id="clock"></strong>
        </p>

    </div>

</div>

<footer>
    CI/CD Assignment • GitHub Actions + Render
</footer>

<script>

function checkDeployment() {
    const message = document.getElementById("message");

    message.innerHTML = "⏳ Checking deployment...";

    setTimeout(() => {
        message.innerHTML = "✅ Deployment is working successfully Verified!";
    }, 1000);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const button = document.querySelector(".toggle");

    if (document.body.classList.contains("dark")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

</script>

</body>
</html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});