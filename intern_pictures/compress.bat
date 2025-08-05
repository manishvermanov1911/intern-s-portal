@ECHO OFF

FOR %%a in (*.jpg *.jpeg) DO (
    ECHO Compressing %%a...
    magick "%%a" -quality 80 "%%~na_temp%%~xa"
    IF EXIST "%%~na_temp%%~xa" (
        DEL "%%a"
        REN "%%~na_temp%%~xa" "%%a"
        ECHO Compressed %%a successfully
    ) ELSE (
        ECHO Failed to compress %%a
    )
)

ECHO Compression complete!
PAUSE