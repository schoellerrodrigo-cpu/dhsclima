# ❓ Perguntas Frequentes (FAQ)

## 🔴 Por que tenho 717 erros?

**Resposta:** Porque o Node.js não está instalado. Esses erros são **completamente normais** e **esperados**.

### O que fazer:
1. Instale o Node.js: https://nodejs.org/
2. Reinicie o computador
3. Execute `npm install`
4. ✅ Todos os erros desaparecerão

---

## 🤔 O que é Node.js e por que preciso dele?

**Node.js** é um ambiente de execução JavaScript que permite:
- Instalar dependências do projeto (React, TypeScript, etc.)
- Executar o servidor de desenvolvimento
- Compilar o código TypeScript para JavaScript
- Usar ferramentas modernas de desenvolvimento

**Sem o Node.js**, você não consegue executar aplicações React/Vite.

---

## 💾 Onde baixo o Node.js?

**Link oficial:** https://nodejs.org/

### Qual versão escolher?
- 🟢 **LTS (Long Term Support)** ← **RECOMENDADO**
- ⚪ Current (mais recente, mas pode ter bugs)

**Sempre escolha a versão LTS** (botão verde no site).

---

## 🔧 Já instalei o Node.js mas ainda dá erro "node não é reconhecido"

### Soluções:

1. **Reinicie o computador** (mais importante!)
2. **Feche e abra o VS Code**
3. **Verifique a instalação:**
   ```powershell
   node --version
   npm --version
   ```

4. **Se ainda não funcionar:**
   - Desinstale o Node.js
   - Reinicie o computador
   - Reinstale o Node.js
   - Reinicie novamente

---

## 📦 O que faz o comando `npm install`?

O comando `npm install`:
- Lê o arquivo `package.json`
- Baixa todas as dependências listadas
- Cria a pasta `node_modules` com ~245 pacotes
- Prepara o projeto para ser executado

**Tempo estimado:** 2-5 minutos (depende da sua internet)

---

## 🚀 Como executo o projeto depois de instalar tudo?

```powershell
# 1. Instalar dependências (apenas uma vez)
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

Para **parar o servidor**, pressione `Ctrl + C` no terminal.

---

## 🌐 Posso ver o projeto sem instalar Node.js?

**Sim!** Abra o arquivo **`preview.html`** no navegador.

Porém, essa é apenas uma **prévia estática**. Para ver o projeto completo e interativo, você **precisa** instalar o Node.js.

---

## ⚡ O servidor está muito lento

### Possíveis causas:

1. **Primeira vez:** A primeira execução é sempre mais lenta
2. **Antivírus:** Pode estar escaneando os arquivos
3. **Computador lento:** Vite é rápido, mas precisa de recursos

### Soluções:
- Aguarde alguns segundos
- Adicione a pasta do projeto às exceções do antivírus
- Feche programas desnecessários

---

## 🔄 Como atualizo o projeto?

```powershell
# Baixar atualizações das dependências
npm update

# Ou reinstalar tudo
rm -r node_modules
npm install
```

---

## 📱 O projeto funciona no celular?

**Sim!** O projeto é totalmente responsivo.

Para acessar no celular na mesma rede:

```powershell
# Execute com --host
npm run dev -- --host

# Acesse no celular:
# http://192.168.x.x:5173
```

O IP exato será mostrado no terminal.

---

## 🏗️ Como faço o build para produção?

```powershell
# Gerar build otimizado
npm run build

# Os arquivos ficam em: dist/
```

Para testar o build:
```powershell
npm run preview
```

---

## 📂 Posso deletar alguma pasta?

### ❌ NÃO DELETE:
- `src/` - Código-fonte do projeto
- `public/` - Arquivos estáticos
- `node_modules/` - Dependências (mas pode reinstalar)

### ✅ PODE DELETAR:
- `dist/` - Build gerado (pode regenerar)
- `node_modules/` - Pode reinstalar com `npm install`

---

## 🐛 Encontrei um bug, o que faço?

1. Verifique se o erro persiste após:
   ```powershell
   npm install
   npm run dev
   ```

2. Limpe o cache:
   ```powershell
   rm -r node_modules
   rm package-lock.json
   npm install
   ```

3. Verifique a versão do Node.js:
   ```powershell
   node --version
   # Deve ser 16.0.0 ou superior
   ```

---

## 💻 Qual editor devo usar?

**Recomendado:** Visual Studio Code (VS Code)
- Download: https://code.visualstudio.com/

**Extensões úteis:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier

---

## 🎨 Como personalizo as cores?

Edite o arquivo **`tailwind.config.js`**:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores aqui
        600: '#0ea5e9', // Azul principal
      },
      accent: {
        600: '#22c55e', // Verde de destaque
      },
    },
  },
}
```

---

## 📝 Preciso saber React para usar?

**Para usar:** Não, é só instalar e executar.

**Para modificar:** Sim, conhecimento básico de:
- React (componentes, props, hooks)
- TypeScript (tipos)
- Tailwind CSS (classes utilitárias)

---

## 🆘 Nada funciona! E agora?

### Checklist de emergência:

- [ ] Node.js instalado? (`node --version`)
- [ ] npm instalado? (`npm --version`)
- [ ] Reiniciou o computador?
- [ ] Executou `npm install`?
- [ ] Está na pasta correta? (`cd c:\Users\usuario10\Desktop\dhsclima`)
- [ ] Tem conexão com internet?
- [ ] Antivírus não está bloqueando?

Se tudo estiver OK e ainda não funcionar:

1. Delete a pasta do projeto
2. Extraia novamente do backup
3. Reinstale o Node.js
4. Tente novamente

---

## 📞 Onde obter mais ajuda?

- **Documentação Node.js:** https://nodejs.org/docs
- **Documentação React:** https://react.dev
- **Documentação Vite:** https://vitejs.dev
- **Documentação Tailwind:** https://tailwindcss.com/docs

---

## ✅ Resumo Rápido

```
1. Instalar Node.js → https://nodejs.org/ (versão LTS)
2. Reiniciar computador
3. Abrir terminal no VS Code (Ctrl + `)
4. npm install
5. npm run dev
6. Abrir http://localhost:5173
7. 🎉 Pronto!
```

---

**Última atualização:** 18 de outubro de 2025
