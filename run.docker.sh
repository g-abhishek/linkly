export PORT=80
export NODE_ENV=development
export POSTGRES_DB_URL="postgresql://root:root@postgres:5432/linkly"
export REDIS_DB_URL="redis://redis:6379/0"

export POSTGRES_DB="linkly"
export POSTGRES_USER="root"
export POSTGRES_PASSWORD="root"

# npm run migrate
# npm run rollback
# npm run dev

docker compose up -d

# The -v flag removes the named volumes including pgdata.
# docker-compose down -v
