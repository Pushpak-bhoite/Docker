FROM node:alpine - this alpine version is more lightweight than others  

docker exec -it dd8 bash - Go into container.
exit - come out of container


* you can install vim inside container, which we can run only use in linux/unix based os, but our images by default gets created using linux based os so inside container there is kind of ubuntu environment.
* container persists that vim throught its life. 
* vim we use for editing files inside terminal. 
common commands-
press i - for insert mode or Edit
press esc  - to come out of insert mode
after esc you can press:
:wq - save and quit 
:w - only saves edited files 
:q - quit vim after saving changes  
:q! - force quit without changes 
