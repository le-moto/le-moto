# le-moto
Le Moto Micro Financing Site

#Development

Download the git repository 

    $ git clone https://github.com/le-moto/le-moto.git

Install nodejs

## Linux 

    $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    $ sudo apt-get install -y nodejs

Install firebase cli and login

    $ npm install -g firebase-tools
    $ firebase login

Note: if running a virtual machine, the redirect links will break, you'll notice that 'localhost' is used in this link.  You should just grab your local virtual machine adddress, such as 10.0.0.251 and replace 'localhost' with this number.  Login should work just fine. 

Download and install NVM
https://github.com/creationix/nvm#install-script

Follow the instructions here for using NVM to install npm 6.11.5
https://cloud.google.com/nodejs/docs/setup

From the main directory run 
    $ npm install

From the functions directory run
    $ npm install 


## Running the server 
This function will differ depending on setup.  Running from a virtual machine will require the user to enter the ip address the server should be accesible on.  Below is an example of how to declare the host ip. 

        $ firebase serve --host 10.0.0.251 

## Rendering css

        $ ./node_modules/node-sass/bin/node-sass  public/scss/styles.scss public/css/

        or

        $ make sass 
