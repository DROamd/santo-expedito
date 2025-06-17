
@echo off
echo ============================================
echo Adicionando imagens ao catálogo Santo Expedito
echo ============================================
set "dest=%~dp0imagens\produtos"

if not exist "!dest!" mkdir "!dest!"

echo Arraste as imagens para esta janela e pressione ENTER.
pause

for %%f in (*.*) do (
    if not "%%~xff"=="" (
        copy "%%f" "!dest!"
    )
)

echo ============================================
echo Imagens adicionadas com sucesso!
echo ============================================
pause
