# ⚠️ ATENÇÃO: Node.js Não Instalado

## 🔴 Problema Atual

Você tem **717 erros** porque o **Node.js não está instalado** no seu computador.

Todos esses erros são normais e vão desaparecer assim que você:
1. Instalar o Node.js
2. Executar `npm install`

## 📥 PASSO A PASSO - Instalação do Node.js

### 1️⃣ Baixar o Node.js

1. Abra seu navegador
2. Acesse: **https://nodejs.org/**
3. Você verá dois botões:
   - 🟢 **LTS (Long Term Support)** ← **ESCOLHA ESTE!**
   - ⚪ Current

4. Clique no botão verde **LTS**
5. O download começará automaticamente (arquivo .msi ~50MB)

### 2️⃣ Instalar o Node.js

1. Localize o arquivo baixado (geralmente em `Downloads`)
2. **Clique duas vezes** no arquivo `.msi`
3. **Siga o instalador**:

```
┌─────────────────────────────────────┐
│  Welcome to Node.js Setup           │
│                                     │
│  Click "Next" →                     │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  License Agreement                  │
│                                     │
│  ☑ I accept...                      │
│  Click "Next" →                     │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Destination Folder                 │
│                                     │
│  C:\Program Files\nodejs\           │
│  Click "Next" →                     │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Custom Setup                       │
│                                     │
│  ☑ Node.js runtime                  │
│  ☑ npm package manager              │
│  ☑ Add to PATH                      │
│  Click "Next" →                     │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Tools for Native Modules           │
│                                     │
│  ☑ Automatically install tools      │
│  Click "Next" →                     │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Ready to Install                   │
│                                     │
│  Click "Install" →                  │
└─────────────────────────────────────┘
```

4. ⏱️ **Aguarde a instalação** (2-5 minutos)
5. Pode aparecer uma janela para instalar ferramentas adicionais
6. Click "Finish"

### 3️⃣ **IMPORTANTE: Reiniciar**

🔴 **FECHE O VS CODE COMPLETAMENTE**
🔴 **REINICIE SEU COMPUTADOR** (ou pelo menos feche todos os terminais)

### 4️⃣ Verificar a Instalação

1. Abra o **PowerShell** ou **VS Code** novamente
2. No terminal, digite:

```powershell
node --version
```

Deve aparecer algo como: `v20.10.0` ✅

3. Digite:

```powershell
npm --version
```

Deve aparecer algo como: `10.2.3` ✅

## 🚀 Depois de Instalar o Node.js

### No Terminal do VS Code, execute:

```powershell
# 1. Instalar todas as dependências
npm install
```

⏱️ **Aguarde** (pode demorar 2-5 minutos na primeira vez)

Você verá algo assim:
```
added 245 packages, and audited 246 packages in 45s
```

### Agora execute o projeto:

```powershell
# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Você verá algo assim:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Abra no navegador:

Digite na barra de endereços: **http://localhost:5173**

## 🎉 Pronto!

Os 717 erros desaparecerão automaticamente após `npm install`!

---

## ❓ Problemas?

### "node não é reconhecido"
- ✅ Reinicie o computador
- ✅ Feche e abra o VS Code novamente

### "npm install" trava
- ✅ Aguarde (pode demorar)
- ✅ Verifique sua conexão com a internet

### Erros de permissão
- ✅ Execute o PowerShell como Administrador
- ✅ Ou execute: `npm install --legacy-peer-deps`

---

## 📞 Links Úteis

- **Download Node.js**: https://nodejs.org/
- **Documentação**: https://nodejs.org/docs
- **Troubleshooting**: https://docs.npmjs.com/troubleshooting

---

**⚡ Ação Imediata:**
1. Instale o Node.js agora: https://nodejs.org/
2. Reinicie o computador
3. Execute: `npm install`
4. Execute: `npm run dev`
