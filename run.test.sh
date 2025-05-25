# export PORT=3000
export NODE_ENV=test
export POSTGRES_DB_URL="postgresql://root:root@0.0.0.0:5434/linkly-test"
export REDIS_DB_URL="redis://127.0.0.1:6379/0"

npm run migrate
npm run test
