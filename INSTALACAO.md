# 🚀 Guia de Instalação e Execução

## ⚠️ Importante: Node.js Necessário

Para executar este projeto, você precisa ter o **Node.js** instalado em seu computador.

## 📥 Como Instalar o Node.js

### Windows

1. **Acesse o site oficial**: https://nodejs.org/
2. **Baixe a versão LTS** (Long Term Support) - recomendada
3. **Execute o instalador** baixado (.msi)
4. **Siga o assistente de instalação**:
   - Aceite os termos de licença
   - Mantenha o caminho de instalação padrão
   - Marque a opção "Automatically install the necessary tools"
5. **Reinicie o computador** após a instalação

### Verificar a Instalação

Abra o PowerShell e execute:

```powershell
node --version
npm --version
```

Se os comandos retornarem versões (ex: `v20.10.0` e `10.2.3`), a instalação foi bem-sucedida! ✅

## 🎯 Executando o Projeto

Após instalar o Node.js:

### 1. Abrir o Terminal no Projeto

No VS Code, pressione `` Ctrl + ` `` ou vá em `Terminal > New Terminal`

### 2. Instalar Dependências

```powershell
npm install
```

⏱️ Este processo pode demorar alguns minutos na primeira vez.

### 3. Executar o Projeto

```powershell
npm run dev
```

### 4. Acessar o Aplicativo

Abra seu navegador e acesse: **http://localhost:5173**

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala todas as dependências |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run lint` | Executa o linter |

## ❓ Problemas Comuns

### "npx não é reconhecido"
- **Solução**: Instale o Node.js conforme instruções acima

### "Porta 5173 já está em uso"
- **Solução**: Feche outros processos usando a porta ou o Vite escolherá outra automaticamente

### Erros de Permissão
- **Solução no Windows**: Execute o PowerShell como Administrador

### node_modules não encontrado
- **Solução**: Execute `npm install` primeiro

## 📞 Precisa de Ajuda?

- **Documentação Node.js**: https://nodejs.org/docs
- **Documentação Vite**: https://vitejs.dev
- **Documentação React**: https://react.dev

---

✨ **Pronto para começar!** Execute `npm install` e depois `npm run dev`
