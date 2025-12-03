# Configuração do Chatbot com IA (Gemini)

## 🎯 O que mudou?

O chatbot agora usa **Google Gemini AI** para responder perguntas de forma inteligente e contextualizada, ao invés de respostas pré-definidas.

## 🔧 Como Configurar

### 1. Obter Chave API do Google Gemini (GRATUITO)

1. Acesse: https://makersuite.google.com/app/apikey
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave gerada

**Nota:** O sistema usa automaticamente o modelo `gemini-1.5-flash` (estável e rápido).

### 2. Configurar Variável de Ambiente

Crie um arquivo `.env` na **raiz do projeto** (mesma pasta do `package.json`):

```bash
# .env
VITE_GEMINI_API_KEY=AIzaSy...sua_chave_aqui
```

### 3. Reiniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

## ✅ Verificar se está funcionando

1. Abra o chat no site
2. Se a API estiver configurada, verá: **"Assistente virtual do DHS Guide com IA"**
3. Se NÃO estiver configurada, verá instruções de configuração

## 🆓 Limites Gratuitos do Gemini

- **1.500 requisições por dia** (suficiente para uso pessoal/teste)
- **1 milhão de tokens por mês**
- Sem necessidade de cartão de crédito

## 🔒 Segurança

**IMPORTANTE:** 
- O arquivo `.env` está no `.gitignore` e **NÃO será enviado ao GitHub**
- Nunca compartilhe sua chave API publicamente
- Use variáveis de ambiente na Vercel para produção

## 🚀 Deploy na Vercel

### ⚠️ Importante: .env NÃO vai para o GitHub

O arquivo `.env` está no `.gitignore` e **não será enviado ao GitHub** por segurança. Você precisa configurar as variáveis de ambiente diretamente na Vercel.

### Passos para Deploy:

1. **Push para GitHub**
   ```bash
   git add .
   git commit -m "Add AI chatbot"
   git push origin main
   ```

2. **Importar na Vercel**
   - Acesse: https://vercel.com
   - Clique em **"New Project"**
   - Importe seu repositório do GitHub

3. **Configurar Variável de Ambiente**
   - Durante o import, ou depois em: Dashboard → Project → Settings → Environment Variables
   - Adicione:
     - **Name:** `VITE_GEMINI_API_KEY`
     - **Value:** sua chave API (obtida em https://makersuite.google.com/app/apikey)
     - **Environments:** Marque ✅ Production, ✅ Preview, ✅ Development
   - Clique em **Save**

4. **Deploy**
   - A Vercel fará deploy automaticamente
   - Ou force redeploy se já estava configurado: **Deployments** → **⋯** → **Redeploy**

5. **Verificar**
   - Abra seu site em produção
   - Abra o Console (F12)
   - Deve ver: `✅ Gemini inicializado com sucesso!`
   - Teste o chatbot

### 📝 Via Vercel CLI (Alternativo):

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Adicionar variável de ambiente
vercel env add VITE_GEMINI_API_KEY
# Cole sua chave quando solicitado
# Selecione: Production, Preview, Development

# Redeploy
vercel --prod
```

### 🔄 Atualizar API Key em Produção

Se precisar trocar a chave:

1. **Via Dashboard:**
   - Settings → Environment Variables
   - Edite `VITE_GEMINI_API_KEY`
   - Salve e faça redeploy

2. **Via CLI:**
   ```bash
   vercel env rm VITE_GEMINI_API_KEY
   vercel env add VITE_GEMINI_API_KEY
   vercel --prod
   ```

## 🧠 Como Funciona

O chatbot agora:
1. Recebe sua pergunta
2. Envia para o Gemini junto com **contexto detalhado sobre DHS** extraído diretamente do conteúdo da aplicação
3. Gemini responde de forma inteligente baseado no contexto rico
4. Mantém histórico da conversa para respostas mais contextualizadas

## 📚 Contexto Fornecido ao Gemini

O serviço `geminiService.ts` inclui contexto COMPLETO e ATUALIZADO sobre:

### Conceitos Fundamentais
- **Definição completa do DHS** (processo evolutivo, focos prioritários, 3 eixos, 3 setores)
- Diagnóstico da Crise (Tripulação à Deriva, Crise de Valores, Paradigmas Limitantes)
- Pensamento Sistêmico vs. Linear (Multi/Inter/Transdisciplinar)

### Metodologias Detalhadas
- **PGS**: 5 critérios de mensuração, resultados comprovados no RS (90% resolutividade, R$ 49M economia)
- **NMC**: Comunicação Não-Violenta e Mediativa
- **Matriz de Convergência**: 6 orientações, passos de implementação, 13 atividades

### Áreas Específicas com Dados Reais

**PLANCON (Plano de Contingência):**
- 8 passos detalhados (Diagnóstico, Mapeamento, Estruturação, Sistema de Alerta, etc.)
- NUPDECs: Como criar grupos de 10-20 voluntários
- Base legal: Lei 12.608/2012, Lei 12.983/2014

**Primeira Infância:**
- **Dados 2024**: 632.763 crianças na fila de creches, 78.237 fora de pré-escola
- Cobertura atual: 41,2% vs. Meta PNE: 50%
- Ratios criança/educador por faixa etária (5 bebês 0-12m, 8 bebês 12-24m, etc.)
- Curva de Heckman: retorno de 6 a 17 dólares por dólar investido
- 3 estratégias de expansão (curto, médio, longo prazo)
- Financiamento: FUNDEB, DONQEEI

**Organizações Criminosas:**
- PNAE 2025, GAECOs, convergência interinstitucional

**Violência Doméstica e ECA:**
- Protocolos de enfrentamento, avaliação de risco, medidas protetivas

### Convergência Estrutural
- Planejamento integrado, orçamento alinhado, indicadores compartilhados

## ⚙️ Arquivos Modificados

- ✅ `src/services/geminiService.ts` - Novo serviço de IA
- ✅ `src/components/ChatBot.tsx` - Atualizado para usar Gemini
- ✅ `.env.example` - Template de configuração
- ✅ `package.json` - Adicionado `@google/generative-ai`

## 🐛 Solução de Problemas

### "API key not configured"
- Verifique se criou o arquivo `.env` na raiz
- Confirme que o servidor foi reiniciado após criar `.env`

### "API key not valid"
- Verifique se copiou a chave completa
- Gere uma nova chave em: https://makersuite.google.com/app/apikey

### "Quota exceeded"
- Limite diário atingido (1.500 req/dia no plano gratuito)
- Aguarde 24h ou use outra conta Google

### ⚠️ Melhorias no Sistema de Diagnóstico
- ✅ **Mensagens de erro específicas** - O chatbot agora identifica o tipo exato do problema:
  - 🔑 Problemas com API Key
  - ⏱️ Limite de uso atingido  
  - 🌐 Problemas de conexão
  - 🛡️ Conteúdo bloqueado
  - 🔧 **Erro 404** - API endpoint não encontrado
- 📋 **Logs detalhados** - Console do navegador (F12) mostra informações técnicas
- 📚 **Guias completos**:
  - `DIAGNOSTICO_CHATBOT.md` - Solução passo a passo
  - `ERROS_404_API.md` - Específico para erros 404 da API Gemini

## 🔄 Voltar para Respostas Pré-definidas

Se preferir o sistema antigo, restaure o backup:
```bash
git checkout HEAD -- src/components/ChatBot.tsx
```

## 📞 Suporte

Em caso de dúvidas, consulte a documentação oficial:
- [Google AI for Developers](https://ai.google.dev/)
- [Gemini API Quickstart](https://ai.google.dev/tutorials/get_started_web)
