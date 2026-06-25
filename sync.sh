#!/bin/bash
# sync.sh — копирует заметки из Obsidian Vault в Quartz /content
# Запускать из корня quartz-репо перед git push

VAULT="/Users/andrey.sidorov/Documents/Obsidian Vault/AI"
CONTENT="./content"

echo "Syncing from vault..."

# Удаляем старый контент (но сохраняем .gitkeep если есть)
if [ -d "$CONTENT" ]; then
    find "$CONTENT" -mindepth 1 -delete
fi

# Копируем публичные заметки
cp -r "$VAULT"/* "$CONTENT"/

echo "Done! Run: npx quartz build --serve  (preview)"
echo "Then:  git add content && git commit -m 'publish' && git push"
