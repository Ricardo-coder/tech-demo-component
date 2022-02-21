# tech-demo-component

Exemplo de componente de Card genérico para utilização em projetos React, criado para exibição em uma demonstração.

## Configurações

### Etapa 1 - Adicione tech-demo-component às dependências do seu projeto.

`npm install tech-demo-component` ou `yarn add tech-demo-component`

### Etapa 2 - Importando o aplicativo e utilizando-o em seu projeto.

```
import React from 'react'
import TechDemo from 'tech-demo-component'

const Example = () => {
  const TechDemoProps = {
  img: '',
  title: '',
  alt: '',
  text: '',
  styles: {
    container: {},
    img: {},
    title: {},
    text: {}
  },
}

  return (
    <TechDemo {...TechDemoProps} />
  )
}

export default Example
```

## Dicas

#### `tech-demo-component` props

| Nome      | Tipo          | Descrição                    |
| :------------: | :-----------: | :----------------------------: |
| `img` | `[string]` | Permite a alteração da imagem do card. |
| `alt` | `[string]` | Permite definir um alt a imagem. |
| `title` | `[string]` | Exibe um titulo para o card. |
| `text` | `[string]` | Exibe um parágrafo com o texto desejado no card. |
| `style` | `[object]` | Recebe a estilização do componente, tendo como propriedades do objecto `container`, `img`, `title` e `text`. |

**OBS: A inclusão de novos estilos dentro do objeto style não remove a estilização base, porém esta pode ser sobrescrita**