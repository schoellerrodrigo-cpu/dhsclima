# 🚀 GUIA: Publicar Projeto DHS no GitHub

**Data:** 19 de outubro de 2025  
**Projeto:** Guia DHS - Desenvolvimento Harmônico e Sustentável

---

## ⚠️ PRÉ-REQUISITOS

Antes de publicar no GitHub, você precisa:

### 1. **Instalar o Git**
- Acesse: https://git-scm.com/download/win
- Baixe o instalador para Windows
- Execute e siga o assistente de instalação
- **Importante:** Deixe todas as opções padrão marcadas

### 2. **Criar conta no GitHub** (se não tiver)
- Acesse: https://github.com
- Clique em "Sign up"
- Siga o processo de criação de conta

---

## 📋 PASSO A PASSO

### **PASSO 1: Verificar se Git foi instalado**

Abra um **novo** PowerShell e execute:
```powershell
git --version
```

✅ **Esperado:** `git version 2.x.x`  
❌ **Erro:** Se ainda der erro, reinicie o computador

---

### **PASSO 2: Configurar Git (primeira vez)**

Execute no PowerShell:
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

**Substitua:**
- `Seu Nome` → Seu nome real
- `seu-email@example.com` → Email usado no GitHub

---

### **PASSO 3: Criar arquivo .gitignore**

O arquivo `.gitignore` já existe no projeto. Verifique se está correto:

**Arquivo:** `.gitignore`
```
# Dependências
node_modules/
package-lock.json

# Build
dist/
build/

# Ambiente
.env
.env.local

# Logs
*.log

# Cache
.vite/
.cache/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

---

### **PASSO 4: Inicializar repositório local**

No PowerShell, dentro da pasta do projeto (`C:\Users\usuario10\Desktop\dhsclima`):

```powershell
# Navegar para pasta do projeto
cd C:\Users\usuario10\Desktop\dhsclima

# Inicializar repositório git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "🎉 Projeto inicial: Guia DHS completo com Calculadora"
```

---

### **PASSO 5: Criar repositório no GitHub**

1. **Acesse:** https://github.com
2. **Faça login** com sua conta
3. **Clique** no botão verde "**New**" ou "**+**" → "**New repository**"
4. **Preencha:**
   - **Repository name:** `dhsclima`
   - **Description:** `Guia prático de Desenvolvimento Harmônico e Sustentável com Calculadora interativa`
   - **Visibilidade:** 
     - ✅ **Public** (público - qualquer um pode ver)
     - ⬜ Private (privado - só você)
   - **NÃO marque:** "Add a README file"
   - **NÃO marque:** "Add .gitignore"
   - **NÃO marque:** "Choose a license"
5. **Clique:** "**Create repository**"

---

### **PASSO 6: Conectar local ao GitHub**

Após criar o repositório, o GitHub mostrará comandos. Execute no PowerShell:

```powershell
# Adicionar origem remota (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/dhsclima.git

# Renomear branch para main (padrão do GitHub)
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

**⚠️ Importante:** 
- Substitua `SEU-USUARIO` pelo seu username do GitHub
- Quando pedir senha, use um **Personal Access Token** (não a senha da conta)

---

### **PASSO 7: Criar Personal Access Token** (se necessário)

Se o git pedir senha ao fazer push:

1. GitHub → **Settings** (canto superior direito)
2. **Developer settings** (menu esquerdo, no final)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. **Preencha:**
   - **Note:** `Token para dhsclima`
   - **Expiration:** 90 days (ou No expiration)
   - **Marque:** `repo` (acesso completo a repositórios)
6. **Generate token**
7. **COPIE O TOKEN** (só aparece uma vez!)
8. **Use esse token como senha** no git push

---

## 🎯 COMANDOS RESUMIDOS

```powershell
# 1. Navegar para projeto
cd C:\Users\usuario10\Desktop\dhsclima

# 2. Inicializar git
git init

# 3. Adicionar arquivos
git add .

# 4. Primeiro commit
git commit -m "🎉 Projeto inicial: Guia DHS completo"

# 5. Conectar ao GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/dhsclima.git

# 6. Enviar para GitHub
git branch -M main
git push -u origin main
```

---

## 📝 PRÓXIMAS ATUALIZAÇÕES

Sempre que fizer mudanças no código:

```powershell
# Ver o que mudou
git status

# Adicionar mudanças
git add .

# Fazer commit com mensagem descritiva
git commit -m "✨ Descrição da mudança"

# Enviar para GitHub
git push
```

### Exemplos de mensagens de commit:
```bash
git commit -m "✨ Adiciona calculadora de índice DHS"
git commit -m "🐛 Corrige erro na página de recursos"
git commit -m "📝 Atualiza documentação do FAQ"
git commit -m "🎨 Melhora design da página inicial"
git commit -m "♻️ Refatora componente de header"
```

---

## 🌟 MELHORIAS OPCIONAIS

### **1. Adicionar README.md no GitHub**

Após o push, crie um `README.md` bonito:

```markdown
# 🌱 Guia DHS - Desenvolvimento Harmônico e Sustentável

Aplicação web interativa para implementação prática do Desenvolvimento Harmônico e Sustentável (DHS).

## ✨ Funcionalidades

- 📊 **Calculadora de Índice DHS** - Avalie sua iniciativa
- 📚 **6 Seções Completas** - Do diagnóstico à implementação
- 🎯 **Casos de Sucesso** - Exemplos reais de aplicação
- 🔍 **Busca Inteligente** - Encontre recursos rapidamente
- ❓ **FAQ Interativo** - 20+ perguntas respondidas

## 🚀 Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

## 💻 Como executar

\`\`\`bash
npm install
npm run dev
\`\`\`

Acesse: http://localhost:5173

## 📖 Estrutura

- `/diagnostico` - Análise da crise
- `/solucoes` - Pensamento sistêmico e DHS
- `/metodologias` - PGS e casos de sucesso
- `/implementacao` - Guia passo a passo
- `/calculadora` - Avaliação de índice DHS
- `/recursos` - Documentos e ferramentas
- `/faq` - Perguntas frequentes

## 📄 Licença

[Especifique sua licença aqui]
```

---

### **2. Configurar GitHub Pages (hospedar gratuitamente)**

```powershell
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar no package.json (dentro de "scripts"):
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Fazer deploy
npm run deploy
```

Depois:
1. GitHub → Repositório → **Settings**
2. **Pages** (menu esquerdo)
3. **Source:** `gh-pages` branch
4. **Save**
5. Aguarde alguns minutos
6. Site estará em: `https://SEU-USUARIO.github.io/dhsclima`

---

## ❓ TROUBLESHOOTING

### **Erro: "git not found"**
- **Solução:** Instale o Git e reinicie o terminal

### **Erro: "permission denied"**
- **Solução:** Use Personal Access Token como senha

### **Erro: "failed to push"**
- **Solução:** Verifique se o repositório existe no GitHub

### **Erro: "updates were rejected"**
- **Solução:** Execute `git pull origin main` antes do push

---

## 📊 ESTRUTURA DO PROJETO NO GITHUB

```
dhsclima/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── node_modules/ (ignorado)
├── .gitignore
├── package.json
├── README.md
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎯 CHECKLIST

Antes de fazer push:

- [ ] Git instalado e configurado
- [ ] Conta GitHub criada
- [ ] Repositório criado no GitHub
- [ ] `.gitignore` configurado
- [ ] `node_modules/` NÃO será enviado
- [ ] Commit inicial feito
- [ ] Remote origin adicionado
- [ ] Push realizado com sucesso

---

## 🔗 LINKS ÚTEIS

- **Git para Windows:** https://git-scm.com/download/win
- **GitHub:** https://github.com
- **Git Tutorial:** https://docs.github.com/pt/get-started
- **Personal Access Token:** https://github.com/settings/tokens

---

## 🔐 VARIÁVEIS DE AMBIENTE EM PRODUÇÃO

### ❓ O arquivo .env vai para o GitHub?

**❌ NÃO!** O `.env` está no `.gitignore` por segurança. Ele contém informações sensíveis (API Keys).

### ✅ Como configurar em produção então?

Configure as variáveis de ambiente **diretamente na plataforma de hospedagem**:

#### 🔷 **Vercel** (Recomendado)

1. Faça deploy: `vercel`
2. Acesse: https://vercel.com/dashboard
3. Selecione seu projeto → **Settings** → **Environment Variables**
4. Adicione:
   - **Key**: `VITE_GEMINI_API_KEY`
   - **Value**: `AIzaSy...sua_chave_aqui`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
5. Redeploy: `vercel --prod`

**✅ Pronto!** O chatbot funciona em produção.

#### 🟦 **Netlify**

1. Deploy: `netlify deploy --prod`
2. Acesse: https://app.netlify.com
3. Site settings → **Environment variables**
4. Add variable: `VITE_GEMINI_API_KEY` = `sua_chave`
5. Redeploy

#### 📋 **Checklist de Deploy**

- [ ] API Key gerada em: https://makersuite.google.com/app/apikey
- [ ] Variável configurada na plataforma (Vercel/Netlify)
- [ ] Nome EXATO: `VITE_GEMINI_API_KEY`
- [ ] Redeploy feito após adicionar variável
- [ ] Testado em produção (F12 → Console)

**📚 Guia Completo:** Consulte `CHATBOT_AI_SETUP.md` para instruções detalhadas sobre deploy e variáveis de ambiente.

---

## 📞 SUPORTE

Se encontrar problemas:

1. **Verifique o erro** no terminal
2. **Consulte o troubleshooting** acima
3. **Google** a mensagem de erro exata
4. **Stack Overflow** tem muitas respostas
5. **GitHub Docs** em português

---

**Criado em:** 19 de outubro de 2025  
**Status:** 📝 Guia Pronto para Uso  

🚀 **Boa sorte com a publicação!**
