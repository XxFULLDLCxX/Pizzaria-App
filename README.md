# Pizzaria App
#### Deploy: https://pizzaria-app-one.vercel.app/
<details open> 
    <summary style="font-size: 20px; font-weight: bold;"> Sobre </summary> 
    <p style="font-size: 16px;">Pizzaria App exemplifica o uso completo da stack Full Stack com Next.js 14.1.4.</p> 
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">Como Executar na Máquina Host</summary>
  <ul>
    <li>
      <h4>1. Clone o repositório:</h4>
      <pre><code>git clone https://github.com/XxFULLDLCxX/Pizzaria-App.git</code></pre>
    </li>
    <li>
      <h4>2. Entre no diretório:</h4>
      <pre><code>cd Pizzaria-App</code></pre>
    </li>
    <li>
      <h4>3. Instale o pnpm:</h4>
      <pre><code>npm install -g pnpm</code></pre>
    </li>
    <li>
      <h4>4. Execute o PostgreSQL:</h4>
      <i>Via docker ou máquina local, atualize o <code>.env.local</code></i>
    </li>
    <li>
      <h4>5. Execute o setup.sh</h4>
      <pre><code>pnpm local:host-setup</code></pre>
    </li>
    </ul>
      <h3>Isso iniciará o Projeto em sua máquina host.</h3>
    <ul>
    <li>Serviço Next.js:       
      <code>http://localhost:3000</code>.
    </li>
  </ul>
</details>

<br>
<details open> 
    <summary style="font-size: 20px; font-weight: bold;"> Como Executar com Docker Compose</summary> 
    <ul> 
        <li> 
            <h4>1. Clone:</h4> 
            <pre><code>git clone https://github.com/XxFULLDLCxX/Pizzaria-App.git</code></pre> 
        </li> 
        <li> 
            <h4>2. Entre no diretório:</h4> 
            <pre><code>cd Pizzaria-App</code></pre> 
        </li> 
        <li> 
            <h4>3. Instale o pnpm:</h4> 
            <pre><code>cp .env.example .env.local</code></pre> 
            <i>Edite conforme necessário.</i> 
        </li> 
        <li> 
            <h4>4. Execute Docker Compose:</h4> 
            <pre><code>docker compose --env-file .env.local --profile dev up</code></pre> 
            <h5><i><code>--profile dev</code>Inicia pgAdmin e PostgreSQL.</i>.</h5> 
        </li> 
        <li> 
            <h4>5. Se houver erro de portas em uso na máquina host, altere <code>.env.local</code></h4> 
        </li> 
    </ul> 
          <h3>Isso iniciará no Projeto localmente.</h3>
      <ul>
        <li>Serviço Next.js:       
          <code>http://localhost:3000</code>.
        </li>
        <li>Serviço PostgreSQL:
          <ul>
          <li>hostname - postgres</li>
          <li>port - 5432</li>
          <li>password - <i>changeme</i></li>
          </ul>       
        </li>
        <li>Serviço PgAdmin:       
          <code>http://localhost/browser</code>.
        </li>
      </ul>
</details>

