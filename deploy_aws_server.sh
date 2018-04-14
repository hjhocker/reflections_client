## command taken from jenkins

/usr/bin/npm install
/usr/local/bin/ng test --browsers ChromeNoSandboxHeadless --singleRun true
/usr/local/bin/ng build --environment=prod

sudo rm -rvf /software/reflections_client/dist/
sudo cp -rv dist/ /software/reflections_client/dist/

sudo service nginx start
sudo service nginx reload
