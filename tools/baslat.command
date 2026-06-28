#!/bin/bash
cd "$(dirname "$0")"

PORT=8477

echo ""
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║   Değerleme Raporu Analiz Aracı              ║"
echo "  ║   Başlatılıyor...                            ║"
echo "  ╚══════════════════════════════════════════════╝"
echo ""

# Check if port already in use
if lsof -i :$PORT -sTCP:LISTEN >/dev/null 2>&1 || ss -tlnp 2>/dev/null | grep -q ":$PORT "; then
    echo "  Port $PORT zaten kullanılıyor, tarayıcı açılıyor..."
    if command -v open &>/dev/null; then open "http://localhost:$PORT/degerleme-analiz.html"
    elif command -v xdg-open &>/dev/null; then xdg-open "http://localhost:$PORT/degerleme-analiz.html"
    fi
    echo "  Tarayıcınızda açık olmalı."
    exit 0
fi

echo "  Sunucu başlatılıyor..."
echo "  Tarayıcınız otomatik açılacak."
echo ""
echo "  *** BU PENCEREYİ KAPATMAYIN — aracı kullanırken açık kalmalı ***"
echo ""

# Open browser
sleep 1
if command -v open &>/dev/null; then
    open "http://localhost:$PORT/degerleme-analiz.html"
elif command -v xdg-open &>/dev/null; then
    xdg-open "http://localhost:$PORT/degerleme-analiz.html"
else
    echo "  Tarayıcıda açın: http://localhost:$PORT/degerleme-analiz.html"
fi

# Start server
if command -v python3 &>/dev/null; then
    python3 -m http.server $PORT
elif command -v python &>/dev/null; then
    python -m http.server $PORT
else
    echo "  HATA: Python bulunamadı. Lütfen Python yükleyin: https://python.org"
    echo "  Ctrl+C ile kapatın."
    read -r
fi
