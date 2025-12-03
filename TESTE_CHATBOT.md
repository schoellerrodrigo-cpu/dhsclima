# 🧪 Guia de Teste do Chatbot com IA

## ✅ Checklist de Configuração

1. ✅ Dependência `@google/generative-ai` instalada
2. ⚠️ Criar arquivo `.env` com sua chave API
3. ⚠️ Reiniciar servidor de desenvolvimento

## 🔑 Obter Chave API (2 minutos)

1. Acesse: https://makersuite.google.com/app/apikey
2. Faça login com Google
3. Clique em **"Create API Key"**
4. Copie a chave gerada

## 📝 Configurar .env

Crie o arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=AIzaSy...sua_chave_aqui
```

## 🚀 Testar o Chatbot

### Perguntas Sugeridas para Teste:

#### Teste 1: Conceitos Básicos
```
Pergunta: "O que é DHS?"
Resposta esperada: Deve mencionar processo evolutivo, focos prioritários, 3 eixos, 3 setores, convergência
```

#### Teste 2: Dados Específicos
```
Pergunta: "Quantas crianças estão na fila de creches?"
Resposta esperada: Deve mencionar 632.763 crianças (dados 2024)
```

#### Teste 3: Metodologias
```
Pergunta: "Quais são os 8 passos do PLANCON?"
Resposta esperada: Deve listar os 8 passos detalhados (Diagnóstico, Mapeamento, etc.)
```

#### Teste 4: Critérios do PGS
```
Pergunta: "Quais são os 5 critérios do PGS?"
Resposta esperada: Foco prioritário, Atender necessidades, 3 eixos, Convergência, Atuações resolutivas
```

#### Teste 5: Resultados Comprovados
```
Pergunta: "Quais foram os resultados do PGS no Rio Grande do Sul?"
Resposta esperada: 90% resolutividade, R$ 49M economia, 100+ casos/mês
```

#### Teste 6: Ratios da Educação Infantil
```
Pergunta: "Quantas crianças por educador em creche?"
Resposta esperada: Deve detalhar os ratios por faixa etária (5 bebês 0-12m, 8 bebês 12-24m, etc.)
```

#### Teste 7: NUPDECs
```
Pergunta: "Como criar um NUPDEC?"
Resposta esperada: Grupos de 10-20 voluntários, passos de criação, treinamento
```

#### Teste 8: Convergência
```
Pergunta: "O que é convergência estrutural?"
Resposta esperada: Alinhamento de setores, planejamento integrado, orçamento alinhado
```

## ✅ Validação de Qualidade

O chatbot está funcionando bem se:

- ✅ Responde com dados ESPECÍFICOS (números, percentuais)
- ✅ Cita BASE LEGAL quando relevante (Lei 12.608/2012, etc.)
- ✅ Usa TERMINOLOGIA CORRETA (PGS, DHS, PLANCON, NMC)
- ✅ Fornece PASSOS PRÁTICOS (8 passos do PLANCON, 13 atividades, etc.)
- ✅ Menciona RESULTADOS COMPROVADOS (RS, economia, resolutividade)
- ✅ Mantém CONTEXTO da conversa (se perguntar "e sobre primeira infância?", lembra do tópico anterior)

## 🐛 Solução de Problemas

### "API key not configured"
```bash
# Verifique se o arquivo .env existe na raiz
ls .env

# Verifique se a variável está definida
cat .env

# Reinicie o servidor
npm run dev
```

### Respostas genéricas (sem dados específicos)
- ✅ O contexto foi atualizado com dados reais
- ⚠️ Se as respostas ainda forem genéricas, verifique se o servidor foi reiniciado após editar geminiService.ts

### "Quota exceeded"
- Limite gratuito: 1.500 requisições/dia
- Aguarde 24h ou use outra conta Google

## 📊 Comparação: Antes vs. Depois

### ANTES (Respostas Hardcoded)
❌ Limitado às keywords pré-definidas
❌ Sem capacidade de entender contexto
❌ Respostas rígidas e repetitivas

### DEPOIS (Gemini com Contexto Rico)
✅ Entende perguntas em linguagem natural
✅ Contextualiza respostas baseado na conversa
✅ Fornece dados específicos e atualizados
✅ Adapta explicações ao nível da pergunta
✅ Sugere próximos passos relevantes

## 🎯 Exemplos de Conversas Esperadas

### Conversa 1: Implementação Prática
```
Usuário: "Quero implementar DHS no meu município"
Bot: [Explica Matriz de Convergência, sugere começar por foco prioritário]

Usuário: "Como escolher o foco?"
Bot: [Critérios de conveniência, oportunidade, urgência. Sugere problemas com alta judicialização]

Usuário: "Temos muitas enchentes"
Bot: [Explica PLANCON, 8 passos, NUPDECs, base legal]
```

### Conversa 2: Educação Infantil
```
Usuário: "Qual a situação das creches no Brasil?"
Bot: [632.763 crianças na fila, cobertura 41,2%, meta PNE 50%]

Usuário: "Por que investir em primeira infância?"
Bot: [Curva de Heckman, retorno 6-17x, neurociência, impacto social]

Usuário: "Como o MP deve atuar?"
Bot: [Abandono de judicialização individual, atuação estrutural via PGS]
```

## 📈 Métricas de Sucesso

- ⏱️ Tempo de resposta: < 3 segundos
- 🎯 Precisão: Responde corretamente a perguntas específicas sobre dados
- 💬 Contexto: Mantém thread de conversa
- 📚 Profundidade: Fornece informações detalhadas quando solicitado
- 🔗 Relevância: Sugere tópicos relacionados apropriadamente

---

**✨ Pronto para testar! Configure sua API Key e experimente o chatbot inteligente.**
