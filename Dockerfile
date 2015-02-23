FROM quay.io/codius/codius.org:base
WORKDIR /var/www

# Install NPM packages
# We do this first so Docker doesn't re-do it when we change other files in the
# project.
ADD package.json /var/www/package.json
RUN npm install

ADD . /var/www

# Compile
RUN node node_modules/.bin/gulp

ENV PORT 8080
EXPOSE 8080
CMD npm start
