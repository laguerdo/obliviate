# Obliviate *v.0.1 beta*
Obliviate is a Ultimate PHP Logic Obfuscator. It shuffles your logics and take care for every single logics you've written. It does also doing some code obfuscation, with considering performance
## How to use
1. First install node.js (if not installed) and run `npm install -g obliviate`
2. Next execute `oblv init` or `obliviate init`
3. After you executed command above, you will be asked for {PHP} Executable file location path *(Path where PHP Executable lives in. e.g: D:/path/to/example/php/php.exe)*
4. Use command `oblv auto` to allow Obliviate to watch each **.oblv.php* file for change in your project folder and compiles them automatically
5. If you want to compile your project manually, you can run `oblv compile` or just `oblv` command

## Note
* It designed for Version Control System like GIT
* You can exclude **.oblv.php* with *.gitignore*