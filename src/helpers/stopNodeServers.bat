@Echo Off

TASKLIST /FI "IMAGENAME eq node.exe"
Echo ================================================================================
Echo:
Echo This will stop all running node servers.
Echo:

Set "#="
Set /P "=Press Y to continue (press any other key to stop) :"<Nul
For /F Skip^=1^ Delims^=^ EOL^= %%$ In ('Replace ? . /U /W') Do If Not Defined # Set "#=%%$"
Echo(
If /I Not "%#%"=="Y" Exit /B

TASKKILL /F /IM node.exe
TASKLIST /FI "IMAGENAME eq node.exe"

TIMEOUT 5
Exit(0)
