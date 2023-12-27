docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba22-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba22-java/app ../../..
