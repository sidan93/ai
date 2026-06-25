#!/bin/bash
# sync.sh — копирует заметки из Obsidian Vault в Quartz /content
# Запускать из корня quartz-репо перед git push

VAULT="/Users/andrey.sidorov/Documents/Obsidian Vault/AI"
CONTENT="./content"
INDEX_SRC="$VAULT/!Home.md"

echo "Syncing from vault..."

# Удаляем старый контент
if [ -d "$CONTENT" ]; then
    find "$CONTENT" -mindepth 1 -delete
fi

# Копируем публичные заметки
cp -r "$VAULT"/* "$CONTENT"/

# Создаём index.md из !Home.md (Quartz не понимает ! как главную)
if [ -f "$INDEX_SRC" ]; then
    cp "$INDEX_SRC" "$CONTENT/index.md"
    echo "✓ index.md → from !Home.md"
fi

echo ""
echo "Done! Next:"
echo "  npx quartz build --serve   (preview)"
echo "  git add content && git commit -m 'publish' && git push"
