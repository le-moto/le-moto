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
