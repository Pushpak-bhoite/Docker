docker run --name my-container- 1 - d - p 27017: 27017 - v mongo - data: /data/db mongo - (create image and run docker container)

//-------**--------------
docker images   --(List all images  ) 
docker ps  --(List all running  ) 
docker rmi NAME  --(remive image ) 

// -------* VOLUME *-----------
* we need to mention volume while creating the container, we cant change the volume of container or either change it. 
docker volume create my_volume - (manual way to create voulme, BTW we can create it while running container) 
docker run -v mongo-data-1:/data/db - p 27018: 27017 mongo - (we havent mentioned name of container, docker will automatically give it one )

//-----* Create our own code custom image *----------
docker build -t testImage . (. is for where you want to create)
docker run -p 3000:3000 express-app 

// ----------* NETWORK *---------------
docker network create my_custom_network
docker network ls - List the all networks 
docker run --network my-network-1 --name mongo-server-1 -d -p 27018:27017 mongo 

<!-- Join backend with frontend via NETWORK -->
//Create Mongo cintainer with one network 
 docker run --network my-network-1 --name mongo-container-1 -d -p 27018:27017 mongo
 //Add name of container to mungo base url (as we want to run mongo in our local container not in Altlas clusture)
mongoose.connect('mongodb://mongo-container-1/HelloDatabase', {
//Run express container with same network 
 docker run --name my-express-container-1 --network  my-network-1 -p 3000:3000  backend-image