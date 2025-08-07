📚 Sistema Web - TCC Final
Sistema web desenvolvido como Trabalho de Conclusão de Curso (TCC), utilizando Node.js, Express e MySQL. O projeto possui autenticação JWT, gerenciamento de usuários, chat em tempo real e controle de tarefas.

🚀 Tecnologias Utilizadas
Node.js (Backend)

Express.js (Framework web)

MySQL (Banco de dados relacional)

HTML5, CSS3 e JavaScript (Frontend)

JWT (JSON Web Token) para autenticação segura

Socket.io (Chat em tempo real)

bcrypt para criptografia de senhas

Cors e dotenv para configuração e segurança

🛠 Funcionalidades
✅ Cadastro e login de usuários com autenticação JWT
✅ Gerenciamento de tarefas (CRUD)
✅ Chat em tempo real com múltiplos contatos
✅ Interface web responsiva e intuitiva
✅ Integração com banco de dados MySQL
✅ Proteção de rotas para usuários autenticados
✅ Estrutura modular e escalável para manutenção futura

🗄 Estrutura do Banco de Dados
Principais tabelas:

Usuarios: Armazena informações de login e perfil.

Tarefas: Gerencia as tarefas dos usuários autenticados.

Mensagens: Registro de conversas entre usuários no chat.

Departamentos: Classificação e organização interna.

🔧 Como Executar o Projeto

1️⃣ Clonar o repositório

bash

git clone https://github.com/usuario/TCC-Final.git
cd TCC-Final

2️⃣ Instalar dependências

bash

npm install

3️⃣ Configurar o ambiente

Crie um arquivo .env na raiz do projeto com as variáveis:

.env

DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=bancoTCC
JWT_SECRET=seu_segredo_jwt

4️⃣ Criar o banco de dados
No MySQL:

sql

CREATE DATABASE bancoTCC;
Depois, execute os scripts SQL fornecidos na pasta /database.

5️⃣ Iniciar o servidor

bash

npm start
O servidor estará disponível em: http://localhost:3000

💻 Pré-requisitos
Node.js v18+

MySQL 8+

Navegador moderno (Google Chrome, Edge, etc.)

🖥 Interface
O projeto possui páginas principais:

login.html (Acesso ao sistema)

registro.html (Cadastro de usuários)

historico.html (Histórico de tarefas)

emprestimo.html (Gestão de tarefas e recursos)

chat.html (Chat com contatos e mensagens)

📌 Observações
Este projeto foi desenvolvido para fins acadêmicos (TCC).

Pode ser expandido para aplicações empresariais ou pessoais.
