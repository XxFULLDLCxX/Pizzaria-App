logs() {
  # TODO: Centralizar os logs do script
  return 0
}

docs() {
  if [ "$1" = "pnpm" ]; then
    echo "pnpm -> https://pnpm.io/installation"
  elif [ "$1" = "docker" ]; then
    echo "Docker Engine  -> https://docs.docker.com/engine/install/#supported-platforms &"
    echo "Compose -> https://docs.docker.com/compose/install/linux/#install-using-the-repository"
  elif [ "$1" = "postgres" ]; then
    echo "Postgres -> https://www.postgresql.org/download/"
  else
    echo "Pizzaria App -> https://github.com/XxFULLDLCxX/Pizzaria-App"
  fi
}

deps() {
  # Check the basic environment
  if [ -f ".env.local.example" ]; then
    if [ -f ".env.local" ]; then
      echo "INFO: .env.local já existe."
    else
      echo ">: create a .env.local em $1"
      cp .env.local.example .env.local
      echo $1
    fi
  else
    echo "ERROR: .env.local.example não encontrado." >&2
    docs
    exit 1
  fi

  # Check the package manager
  if { ! check pnpm; }; then
    if command -v yarn &>/dev/null; then
      pkg_manager="yarn"
    elif command -v npm &>/dev/null; then
      pkg_manager="npm"
    else
      echo "ERROR: Nenhum gerenciador de pacotes (pnpm, npm ou yarn) encontrado." >&2
      exit 1
    fi

    # read -p "Tentar installar com o $pkg_manager? (Y\̲n) (Não recomendado) " to_continue
    if [ "$to_continue" != "Y" ]; then
      echo "Saindo... Tente novamente após instalar do pnpm: "
      docs pnpm
      exit 0
    fi
  fi
}

check() {
  # $1 as the command, $2 as the success message, and $3 as the failure message
  if { [ -n "$4" ] && $4 || command -v "$1"; } &>/dev/null; then
    echo "${2:-"INFO: O $1 está instalado..."}"
    return 0
  else
    echo "${3:-"WARNING: O $1 não está instalado..."}"
    echo "$5"
    return 1
  fi
}

install() {
  if check docker '' '' pg_isready 'WARNING: PostgreSQL não está em execução ou instalado.'; then
    pnpm i && pnpm exec dotenv -e .env.local -- pnpm local:prisma
  else
    echo "ALERTA: Configure o .env.local com o PostgreSQL em execução na máquina host ou no Docker."
    docs postgres
    echo "OR"
    docs docker
    return 1
  fi

  return $?
}

build() {
  $pkg_manager build
  $pkg_manager start
}

pkg_manager=pnpm

echo $NODE_ENV
echo $pkg_manager
main() {
  deps
  install
  $pkg_manager dev
}

main
