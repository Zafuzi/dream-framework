// This would be a separate CLI tool not directly part of this app
// a cli tool that would let me package, version, and publish to nodes.sleepless.com or elsewhere

// it would use dotenv to load .env to get publishing credentials and location
// it would use package.json to get the name, version, and description
// it would create a tarball of the entire app packaged and minified
// then upload it to the location specified in .env
// unpack it
// run npm install
// run npm start
// maybe it would also restart the nodes process...
// maybe it would check if the deployment succeeded by curling the publishURL and checking the response

/*
    I could call this with
    npx sleepless-publish
        only packages the app and tarballs it locally with NODE_ENV=dev set 
    npx sleepless-publish --dry-run
        only packages the app and tarballs it locally with NODE_ENV=production set
        also spits out size of tarball and tries to ping the upload location
    npx sleepless-publish --production
        pings the upload location to make sure it exists
        tries to create the upload location if it doesn't exist
        packages the app and tarballs it locally with NODE_ENV=production set
        uploads the tarball to the upload location
        unpacks the tarball
        runs npm install
        tries to ping the publishURL and checks the response
 */