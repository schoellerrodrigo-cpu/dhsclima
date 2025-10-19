# ✅ Checklist de Instalação e Execução

Use este checklist para garantir que tudo está funcionando corretamente.

---

## 📋 Pré-Instalação

- [ ] Tenho acesso à internet
- [ ] Tenho permissões de administrador no computador
- [ ] Tenho pelo menos 500MB de espaço livre em disco
- [ ] Estou usando Windows 10 ou superior

---

## 📥 Passo 1: Instalar Node.js

- [ ] Acessei https://nodejs.org/
- [ ] Baixei a versão **LTS** (botão verde)
- [ ] Executei o instalador `.msi`
- [ ] Aceitei os termos de licença
- [ ] Mantive o caminho de instalação padrão
- [ ] Marquei "Add to PATH"
- [ ] Marquei "Automatically install necessary tools"
- [ ] Aguardei a instalação completar
- [ ] Cliquei em "Finish"

**Status:** ⬜ Pendente | ⏳ Em andamento | ✅ Concluído

---

## 🔄 Passo 2: Reiniciar

- [ ] Fechei **todos** os programas abertos
- [ ] Fechei o **VS Code**
- [ ] Reiniciei o computador

**Por que é importante?**
- O Windows precisa recarregar as variáveis de ambiente
- O PATH precisa ser atualizado

**Status:** ⬜ Pendente | ✅ Concluído

---

## ✔️ Passo 3: Verificar Instalação

Abra o PowerShell e execute:

- [ ] `node --version` retorna uma versão (ex: v20.10.0)
- [ ] `npm --version` retorna uma versão (ex: 10.2.3)

**Se deu erro "não é reconhecido":**
- [ ] Reiniciei o computador novamente
- [ ] Fechei e abri o PowerShell/VS Code
- [ ] Reinstalei o Node.js

**Status:** ⬜ Pendente | ❌ Erro | ✅ Concluído

---

## 📂 Passo 4: Navegar até o Projeto

No terminal do VS Code:

- [ ] Abri o VS Code
- [ ] Abri o terminal (`Ctrl + ` `)
- [ ] Estou na pasta do projeto
  ```powershell
  cd c:\Users\usuario10\Desktop\pgs3
  ```
- [ ] Verifiquei com `pwd` ou `ls`

**O que você deve ver:**
```
README.md
package.json
src/
index.html
...
```

**Status:** ⬜ Pendente | ✅ Concluído

---

## 📦 Passo 5: Instalar Dependências

- [ ] Executei: `npm install`
- [ ] Aguardei a instalação (2-5 minutos)
- [ ] Vi a mensagem "added X packages"
- [ ] Não houve erros críticos
- [ ] A pasta `node_modules` foi criada

**Verificação:**
```powershell
ls node_modules
# Deve mostrar várias pastas
```

**Se deu erro:**
- [ ] Tentei: `npm install --legacy-peer-deps`
- [ ] Tentei: `npm cache clean --force` e depois `npm install`

**Status:** ⬜ Pendente | ⏳ Instalando | ❌ Erro | ✅ Concluído

---

## 🚀 Passo 6: Executar o Projeto

- [ ] Executei: `npm run dev`
- [ ] Vi a mensagem "VITE ready in XX ms"
- [ ] Vi a URL: `http://localhost:5173`
- [ ] O servidor não parou (não houve erros)

**O que você deve ver no terminal:**
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Status:** ⬜ Pendente | ❌ Erro | ✅ Concluído

---

## 🌐 Passo 7: Abrir no Navegador

- [ ] Abri o navegador (Chrome, Edge, Firefox)
- [ ] Digitei: `http://localhost:5173`
- [ ] A página carregou corretamente
- [ ] Vi o título "Guia de Desenvolvimento Harmônico e Sustentável"
- [ ] Consigo clicar e navegar pelas páginas

**Se a página não carregar:**
- [ ] Verifiquei se o servidor está rodando no terminal
- [ ] Tentei `Ctrl + F5` para forçar atualização
- [ ] Tentei outro navegador

**Status:** ⬜ Pendente | ❌ Erro | ✅ Concluído

---

## ✅ Passo 8: Verificar Erros no VS Code

- [ ] Abri um arquivo `.tsx` (ex: `src/App.tsx`)
- [ ] **NÃO** vejo mais 717 erros
- [ ] Vejo no máximo alguns warnings (avisos)
- [ ] O código tem syntax highlighting (cores)

**Erros esperados após npm install: 0 ❌ | Alguns warnings: OK ✅**

**Status:** ⬜ Pendente | ❌ Ainda com erros | ✅ Sem erros

---

## 🎉 Conclusão

### Tudo Funcionando! ✅

Se todos os itens acima estão marcados como ✅, parabéns!

Você está pronto para:
- [ ] Explorar as páginas do guia DHS
- [ ] Modificar o código
- [ ] Aprender sobre o DHS
- [ ] Personalizar o projeto

---

### Ainda com Problemas? ❌

Se algum item está com ❌, consulte:

1. **FAQ.md** - Perguntas e respostas comuns
2. **INSTALAR_NODEJS.md** - Guia detalhado de instalação
3. **README.md** - Documentação completa do projeto

---

## 🔧 Comandos Úteis

### Durante o Desenvolvimento

```powershell
# Iniciar servidor (use sempre este)
npm run dev

# Parar servidor
Ctrl + C

# Limpar cache e reinstalar
rm -r node_modules
npm install

# Ver versões instaladas
node --version
npm --version
```

### Build e Deploy

```powershell
# Criar build de produção
npm run build

# Testar build
npm run preview

# Verificar erros
npm run lint
```

---

## 📊 Status Geral do Projeto

Marque conforme você progride:

- [ ] ✅ Node.js instalado
- [ ] ✅ Dependências instaladas (`npm install`)
- [ ] ✅ Servidor funcionando (`npm run dev`)
- [ ] ✅ Página abre no navegador
- [ ] ✅ Sem erros no VS Code
- [ ] 🎯 **PROJETO FUNCIONANDO 100%**

---

## 🆘 Suporte de Emergência

Se **nada** funcionar após seguir todos os passos:

1. [ ] Tire um print do erro
2. [ ] Anote a versão do Node.js (`node --version`)
3. [ ] Anote o sistema operacional (Windows 10/11)
4. [ ] Verifique o arquivo FAQ.md
5. [ ] Tente reinstalar Node.js do zero

---

## 📅 Histórico

- [ ] **Primeira instalação:** ___/___/2025
- [ ] **Última atualização:** ___/___/2025
- [ ] **Última vez que funcionou:** ___/___/2025

---

**Mantenha este checklist salvo para consultas futuras!**

**Versão:** 1.0 | **Data:** 18 de outubro de 2025
