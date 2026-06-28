@echo off
chcp 65001 >nul 2>&1
title Degerleme Analiz Araci
cd /d "%~dp0"

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║   Degerleme Raporu Analiz Araci              ║
echo  ║   Baslatiliyor...                            ║
echo  ╚══════════════════════════════════════════════╝
echo.

set PORT=8477

:: Check if port is already in use
netstat -an | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 (
    echo  Port %PORT% zaten kullaniliyor, tarayici aciliyor...
    start http://localhost:%PORT%/degerleme-analiz.html
    echo.
    echo  Tarayicinizda acik olmali. Bu pencereyi kapatabilirsiniz.
    timeout /t 5
    exit /b
)

:: Try python3 first, then python
where python3 >nul 2>&1
if %errorlevel%==0 (
    echo  Sunucu baslatiliyor (python3)...
    echo  Tarayiciniz otomatik acilacak.
    echo.
    echo  *** BU PENCEREYI KAPATMAYIN — araci kullanirken acik kalmali ***
    echo.
    start http://localhost:%PORT%/degerleme-analiz.html
    python3 -m http.server %PORT%
    goto :end
)

where python >nul 2>&1
if %errorlevel%==0 (
    echo  Sunucu baslatiliyor (python)...
    echo  Tarayiciniz otomatik acilacak.
    echo.
    echo  *** BU PENCEREYI KAPATMAYIN — araci kullanirken acik kalmali ***
    echo.
    start http://localhost:%PORT%/degerleme-analiz.html
    python -m http.server %PORT%
    goto :end
)

:: No python found - try PowerShell as HTTP server
echo  Python bulunamadi, PowerShell sunucu deneniyor...
start http://localhost:%PORT%/degerleme-analiz.html
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$http = [System.Net.HttpListener]::new(); $http.Prefixes.Add('http://localhost:%PORT%/'); $http.Start(); Write-Host '  Sunucu calisiyor: http://localhost:%PORT%'; Write-Host '  *** BU PENCEREYI KAPATMAYIN ***'; while ($http.IsListening) { $ctx = $http.GetContext(); $req = $ctx.Request; $resp = $ctx.Response; $path = $req.Url.LocalPath; if ($path -eq '/') { $path = '/degerleme-analiz.html' }; $file = Join-Path '%~dp0' $path.TrimStart('/'); if (Test-Path $file) { $bytes = [IO.File]::ReadAllBytes($file); $ext = [IO.Path]::GetExtension($file); $mime = @{'.html'='text/html;charset=utf-8';'.js'='application/javascript';'.css'='text/css';'.wasm'='application/wasm';'.gz'='application/gzip';'.png'='image/png'}; $resp.ContentType = if($mime[$ext]){$mime[$ext]}else{'application/octet-stream'}; $resp.ContentLength64 = $bytes.Length; $resp.OutputStream.Write($bytes, 0, $bytes.Length) } else { $resp.StatusCode = 404 }; $resp.Close() }"

:end
echo.
echo  Sunucu kapatildi.
pause
