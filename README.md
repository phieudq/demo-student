# demo-student
#Docker build
docker build --rm -t demo/student-api:latest .

#Docker run
docker run --rm -p 8000:5000 demo/student-api

