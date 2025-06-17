
@echo off
echo Adicionando imagens ao catálogo...
setlocal enabledelayedexpansion

set "src=%~dp0"
set "dest=%~dp0imagens\produtos"

if not exist "!dest!" mkdir "!dest!"

echo Arraste suas imagens para esta janela e pressione Enter.
pause

for %%f in (*.*) do (
    if not "%%~xff"=="" (
        copy "%%f" "!dest!"
    )
)
echo Imagens adicionadas com sucesso em "!dest!"
pause
