@echo off
echo Starting FreeFuse Intern Hub Web Server...
echo.
echo Choose your preferred method:
echo 1. Node.js (if you have Node.js installed)
echo 2. PHP (if you have PHP installed)
echo 3. Open directly in browser (file:// protocol)
echo.
echo Attempting to start with Node.js...
npx http-server -p 8000 -c-1 --cors
if %errorlevel% neq 0 (
    echo.
    echo Node.js method failed. Trying PHP...
    php -S localhost:8000
    if %errorlevel% neq 0 (
        echo.
        echo Both Node.js and PHP failed.
        echo.
        echo Alternative: Open index.html directly in your browser
        echo File location: %cd%\index.html
        echo.
        pause
    )
)
