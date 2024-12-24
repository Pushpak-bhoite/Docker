docker run --name my-container-1 -d -p 27017:27017 -v mongo-data:/data/db mongo -(create image and run docker container)
-------* VOLUME *-----------
* we need to mention volume while creating the container, we cant change the volume of container or either change it. 
  docker volume create my_volume -(manual way to create voulme, BTW we can create it while running container 
docker run -v mongo-data-1:/data/db -p 27018:27017 mongo -(we havent mentioned name of container, docker will automatically give it one )
