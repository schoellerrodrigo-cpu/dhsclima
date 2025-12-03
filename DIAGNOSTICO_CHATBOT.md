# 🔧 Diagnóstico Rápido do Chatbot

## 1️⃣ Verificar Console do Navegador

Abra o console (F12 → Console) e procure por:

### ✅ Sucesso:
```
✅ API Key encontrada, inicializando Gemini...
✅ Gemini inicializado com sucesso!
📚 Contexto carregado com informações sobre DHS, PLANCON, PGS, NMC, etc.
```

### ⚠️ API Key não configurada:
```
⚠️ VITE_GEMINI_API_KEY não configurada.
📝 Para configurar:
   1. Crie arquivo .env na raiz do projeto
   2. Adicione: VITE_GEMINI_API_KEY=sua_chave_aqui
   ...
```

### ❌ Erro de inicialização:
```
❌ Erro ao inicializar Gemini: [detalhes do erro]
```

## 2️⃣ Mensagens de Erro e Soluções

### "⚠️ Chatbot não configurado"
**Causa:** Arquivo `.env` não existe ou está vazio

**Solução:**
```bash
# Na raiz do projeto (mesma pasta do package.json)
echo VITE_GEMINI_API_KEY=AIzaSy...sua_chave_aqui > .env
```

Depois reinicie o servidor:
```bash
Ctrl+C
npm run dev
```

### "🔑 Erro de API Key"
**Causa:** Chave API inválida ou mal formatada

**Solução:**
1. Verifique se a chave começa com `AIza`
2. Não deve ter espaços antes/depois
3. Não deve ter aspas ao redor
4. Gere uma nova chave em: https://makersuite.google.com/app/apikey

**Formato correto do .env:**
```env
VITE_GEMINI_API_KEY=AIzaSyBn8C9...resto_da_chave
```

**❌ ERRADO:**
```env
VITE_GEMINI_API_KEY="AIzaSyBn8C9..."  # Não use aspas
VITE_GEMINI_API_KEY= AIzaSyBn8C9...   # Não deixe espaço
```

### "⏱️ Limite de uso atingido"
**Causa:** Mais de 1.500 requisições em 24h

**Solução:**
- Aguarde 24h, OU
- Use outra conta Google

### "🌐 Erro de conexão"
**Causa:** Sem internet ou firewall bloqueando

**Solução:**
1. Verifique conexão internet
2. Desative VPN/proxy temporariamente
3. Verifique firewall corporativo

### "🛡️ Conteúdo bloqueado"
**Causa:** Filtros de segurança do Gemini

**Solução:**
- Reformule a pergunta de forma mais neutra

## 3️⃣ Verificação Passo a Passo

### Passo 1: Arquivo .env existe?
```powershell
# No PowerShell, na raiz do projeto
Test-Path .env
```
- **True**: ✅ Arquivo existe
- **False**: ❌ Crie o arquivo

### Passo 2: API Key está no .env?
```powershell
Get-Content .env
```
Deve mostrar algo como:
```
VITE_GEMINI_API_KEY=AIzaSy...
```

### Passo 3: Servidor reconheceu o .env?
```powershell
# Reinicie o servidor
Ctrl+C
npm run dev
```

Aguarde e abra o console do navegador (F12). Deve ver:
```
✅ API Key encontrada, inicializando Gemini...
```

### Passo 4: Teste uma pergunta simples
No chat, digite:
```
olá
```

**Resposta esperada:**
```
Olá! Bem-vindo ao...
```

**Se der erro:**
- Verifique o console do navegador (F12)
- Leia a mensagem de erro completa
- Siga as instruções da mensagem

## 4️⃣ Checklist Completo

- [ ] Node.js instalado (`node --version`)
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` criado na raiz
- [ ] Chave API válida no `.env`
- [ ] Servidor reiniciado após criar `.env`
- [ ] Console do navegador sem erros
- [ ] Chatbot abre ao clicar no ícone
- [ ] Mensagem de boas-vindas aparece

## 5️⃣ Estrutura Correta de Arquivos

```
dhsclima/
├── .env                    ← DEVE ESTAR AQUI (raiz)
├── .env.example
├── package.json
├── README.md
├── src/
│   ├── services/
│   │   └── geminiService.ts
│   └── components/
│       └── ChatBot.tsx
└── ...
```

## 6️⃣ Comandos Úteis de Diagnóstico

### Verificar se .env está na raiz:
```powershell
Get-ChildItem -Path . -Filter .env
```

### Ver conteúdo do .env (sem expor a chave):
```powershell
if (Test-Path .env) {
    $content = Get-Content .env
    Write-Host "✅ Arquivo .env encontrado"
    Write-Host "Número de linhas: $($content.Count)"
    if ($content -match "VITE_GEMINI_API_KEY") {
        Write-Host "✅ VITE_GEMINI_API_KEY encontrada"
    } else {
        Write-Host "❌ VITE_GEMINI_API_KEY NÃO encontrada"
    }
} else {
    Write-Host "❌ Arquivo .env NÃO existe"
}
```

### Limpar cache e reiniciar:
```powershell
# Limpar cache do npm
npm cache clean --force

# Deletar node_modules e reinstalar
Remove-Item -Recurse -Force node_modules
npm install

# Reiniciar servidor
npm run dev
```

## 7️⃣ Teste Final

Cole este código no console do navegador (F12 → Console):

```javascript
// Verificar se Gemini Service está configurado
import { geminiService } from '/src/services/geminiService';
console.log('Configurado?', geminiService.isConfigured());
```

**Resultado esperado:**
```
Configurado? true
```

Se retornar `false`, o `.env` não foi reconhecido.

## 8️⃣ Contato para Suporte

Se nada funcionar:
1. Tire screenshot do console do navegador (F12)
2. Copie o conteúdo do arquivo `.env` (ocultando os últimos caracteres da chave)
3. Informe qual erro exato está aparecendo no chat

---

**💡 Dica:** A maioria dos erros é resolvida simplesmente **reiniciando o servidor** após criar/editar o `.env`!
