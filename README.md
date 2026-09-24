# Site do casamento — Sara & Wilson

Site só visual, em HTML, CSS e JavaScript puro. Sem banco de dados, sem formulário.

```
index.html   ← conteúdo e links
style.css    ← visual
script.js    ← contagem regressiva e navegação lateral
capa.jpg     ← (opcional) foto do casal para a faixa "Dia do Casamento"
```

## Colocar no StackBlitz

1. Em stackblitz.com, crie um projeto com o template **Static (HTML/CSS/JS)**.
2. Substitua os arquivos `index.html`, `style.css` e `script.js` pelos daqui
   (ou arraste os três para a árvore de arquivos).
3. Se tiver a foto, envie como `capa.jpg` na raiz.

## Trocar os links

Todos os pontos clicáveis apontam para `https://www.casar.com/`.
No `index.html`, busque por `casar.com` e troque cada um pelo link certo:

| Onde | O que abre |
|---|---|
| Ícone da ampulheta (data) | salvar a data |
| Ícone do relógio (hora) | programação |
| Ícone das colunas (local) | como chegar |
| Ícone dos presentes + botão | lista de presentes |
| Ícone do check + botão | confirmação de presença |

## Trocar a data

A data aparece em três lugares:
- `script.js`, linha 3 — usada na contagem regressiva
- `index.html`, cartão da ampulheta — `12 de dezembro de 2026` e `sábado`
- `index.html`, rodapé — `12.12.2026`
