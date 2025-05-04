docker run --name my-container-1 -d -p 27017:27017 -v mongo-data:/data/db mongo          -(create image and run docker container with volume)

<!-------* Build an Image  *---------- -->
docker build -t testImage . (. is for where you want to create)
OR
docker build -t pushpakbhoitedocker/backend-nodejs:0.0.1.RELEASE .   (follow this naming convention which has your docker-hub username)
docker run -p 3000:3000 express-app 

//-------**--------------
docker images   --(List running images ) 
docker ps  --(List running containers) 
docker ps -a --(List all containers  ) 
docker rm NAME  --(remove image ) 

// -------* VOLUME *-----------
* we need to mention volume while creating the container, we cant change the volume of container or either change it. 
docker volume create my_volume - (manual way to create volume, BTW we can create it while running container) 
docker run -v mongo-data-1:/data/db -p 27018:27017 mongo - ( we haven't mentioned name of container, docker will automatically give it one ) 

// ----------* NETWORK *---------------
docker network create my_custom_network
docker network ls - List the all networks 
docker run --network my-network-1 --name mongo-server-1 -d -p 27018:27017 mongo 

<!-- Join backend with frontend via NETWORK -->
//Create Mongo container with one network 
 docker run --network my_network_1 --name mongo-container-1 -d -p 27018:27017 mongo 
 //Add name of container to mongo base url (as we want to run mongo in our local container not in Altlas clusture) 
mongoose.connect('mongodb://mongo-container-1/HelloDatabase', { 
//Run express container with same network 
 docker run --name my-express-container-1 --network  my-network-1 -p 3000:3000  backend-image 

<!-- Fully fledged cmd to keep volume attached to code editor -->
 docker run -p 3000:3000 --name backend-container-3 --network my_network_1 -v .:/usr/src/app pushpakbhoitedocker/backend-nodejs:0.0.2.RELEASE