export PORT=3000
export NODE_ENV=development
export POSTGRES_DB_URL="postgresql://postgres:root@0.0.0.0:5433/linkly"
export REDIS_DB_URL="redis://127.0.0.1:6379/0"

# npm run migrate
# npm run rollback
npm run dev

