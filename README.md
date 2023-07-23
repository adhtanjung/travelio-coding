## Running the Script Using Docker and Makefile

Before running the script to check for palindromes, ensure that you have Docker installed on your system and can execute Makefile scripts.

### Clone the Repository

Clone the repository containing the script to your local machine:

```bash
git clone https://github.com/adhtanjung/travelio-coding.git
cd travelio-coding
```

### Building the Docker Image
To build the Docker image, use the following command:

bash
Copy code
make build
This command will use the provided Dockerfile to build an image that includes the required environment for running the script.

4.2. Running the Docker Container
Once the Docker image is built, you can run the script inside a Docker container using the following command:

```
make build
make run
```
### Script Output
After running the script using the Makefile and Docker, you should see the results displayed in the terminal. 

