# 🔍 Solução de Erros 404 da API Gemini

## ❓ O que significa o erro 404?

Erro 404 significa que a URL da API do Gemini não foi encontrada. Isso pode acontecer por várias razões.

## 🔧 Soluções

### 1️⃣ Verificar API Key

O erro 404 geralmente ocorre quando a API Key é inválida ou não tem as permissões corretas.

**Verificação:**
```powershell
# Verificar se .env existe
Get-Content .env

# Deve mostrar algo como:
# VITE_GEMINI_API_KEY=AIzaSy...
```

**Solução:**
1. Acesse: https://makersuite.google.com/app/apikey
2. **DELETE** a chave antiga (se houver)
3. Clique em **"Create API Key"**
4. Copie a NOVA chave
5. Atualize o arquivo `.env`:
   ```env
   VITE_GEMINI_API_KEY=AIzaSy...nova_chave_aqui
   ```
6. Reinicie o servidor:
   ```powershell
   Ctrl+C
   npm run dev
   ```

### 2️⃣ Verificar Região/Disponibilidade

O sistema agora tenta automaticamente vários modelos em ordem de preferência:
1. `gemini-2.0-flash-exp` - Mais recente (experimental)
2. `gemini-1.5-flash` - Estável e rápido
3. `gemini-1.5-flash-latest` - Última versão
4. `gemini-pro` - Fallback confiável

**Verificar no Console (F12):**
```
🔄 Tentando modelo: gemini-2.0-flash-exp...
⚠️ Modelo gemini-2.0-flash-exp não disponível: ...
🔄 Tentando modelo: gemini-1.5-flash...
✅ Modelo inicializado com sucesso: gemini-1.5-flash
```

O sistema escolhe automaticamente o melhor modelo disponível na sua região!

### 3️⃣ Verificar Permissões da API Key

1. Acesse: https://makersuite.google.com/app/apikey
2. Clique na sua API Key
3. Verifique se está **ativa** e **sem restrições**
4. Se houver restrições de IP/domain, remova-as para teste

### 4️⃣ Limpar Cache e Reinstalar

```powershell
# Parar servidor (Ctrl+C)

# Limpar cache
npm cache clean --force

# Remover node_modules
Remove-Item -Recurse -Force node_modules

# Reinstalar
npm install

# Reiniciar
npm run dev
```

### 5️⃣ Verificar Firewall/Proxy

Se você está em rede corporativa:

1. **Desative VPN temporariamente**
2. **Teste em outra rede** (celular, hotspot)
3. **Verifique proxy** - O Gemini API pode estar bloqueado

### 6️⃣ Verificar Console do Navegador

Abra F12 → Console e procure por:

**Erro de CORS:**
```
Access to fetch at 'https://generativelanguage.googleapis.com/...' 
from origin 'http://localhost:5174' has been blocked by CORS policy
```

**Solução:** Isso é normal em desenvolvimento. A API deve funcionar mesmo assim.

**Erro de Network:**
```
Failed to fetch
net::ERR_CONNECTION_REFUSED
```

**Solução:** Problema de firewall/proxy. Teste em outra rede.

## 🧪 Teste Manual da API

Teste se a API está funcionando diretamente:

1. Abra: https://makersuite.google.com/app/prompts/new_freeform
2. Digite qualquer pergunta
3. Se funcionar lá, o problema está na configuração local

## 📊 Verificação de Status

Verifique se a API do Google está online:
- Status: https://status.cloud.google.com/

Se houver problemas reportados, aguarde a Google resolver.

## 🔄 Seleção Automática de Modelo

O sistema agora tenta automaticamente vários modelos até encontrar um disponível:

```typescript
// Ordem de tentativa (automático):
1. gemini-2.0-flash-exp     // Mais recente (experimental)
2. gemini-1.5-flash          // Estável e rápido
3. gemini-1.5-flash-latest   // Última versão
4. gemini-pro                // Fallback confiável
```

**Verifique qual modelo está sendo usado:**
- Abra Console (F12)
- Procure por: `✅ Modelo inicializado com sucesso: [nome-do-modelo]`

**Se TODOS os modelos falharem:**
- Problema é com a API Key ou conectividade
- Siga os passos da Seção 1 (Verificar API Key)

## ⚠️ Erros Comuns e Soluções

### "404 - Model not found"
- **Causa:** Modelo especificado não existe ou não está disponível
- **Solução:** Use `gemini-pro` ao invés de `gemini-1.5-flash`

### "404 - Invalid API key"
- **Causa:** Chave API mal formatada
- **Solução:** Gere nova chave e verifique que começa com `AIza`

### "404 - Endpoint not found"
- **Causa:** URL da API mudou (raro)
- **Solução:** Atualize a biblioteca: `npm update @google/generative-ai`

## 🎯 Checklist Rápido

- [ ] API Key gerada recentemente (menos de 1 hora)
- [ ] Arquivo `.env` está na RAIZ do projeto
- [ ] API Key começa com `AIza`
- [ ] Servidor foi REINICIADO após criar/editar `.env`
- [ ] Console do navegador (F12) mostra logs detalhados
- [ ] Não está usando VPN/proxy
- [ ] Testou em: https://makersuite.google.com/app/prompts/new_freeform

## 📞 Se Nada Funcionar

1. **Exporte logs do console:**
   - F12 → Console
   - Clique direito → "Save as..."
   - Envie para análise

2. **Teste com API Key diferente:**
   - Use outra conta Google
   - Gere nova chave
   - Teste se funciona

3. **Verifique versão da biblioteca:**
   ```powershell
   npm list @google/generative-ai
   ```
   - Deve ser versão 0.24.x ou superior
   - Se não, atualize: `npm update @google/generative-ai`

---

**💡 Na maioria dos casos, gerar uma NOVA API Key resolve o problema!**
