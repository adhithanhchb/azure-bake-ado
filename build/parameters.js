exports.artifactsDirectory = process.env.BUILD_ARTIFACTSTAGINGDIRECTORY || "./artifacts";
exports.buildRequestedFor = process.env.BUILD_REQUESTEDFOR || 'Pipeline Dream'
exports.buildRequestedForEmail = process.env.BUILD_REQUESTEDFOREMAIL || 'HCHB-Pipeline-Dream@hchb.com'
exports.buildRepositoryURI = process.env.BUILD_REPOSITORY_URI;
exports.buildSourceBranch = process.env.BUILD_SOURCEBRANCHNAME || 'master';
exports.gitToken = process.env.VSMARKETPLACETOKEN;
exports.isRunningOnADO = !!process.env.AGENT_ID;
exports.isLocalBuild = !process.env.AGENT_ID;
exports.isPullRequest = !!process.env.SYSTEM_PULLREQUESTID;
exports.environmentName = process.env.RELEASE_ENVIRONMENTNAME;
exports.orgShare = process.env.ORGSHARE || 'HCHB';
exports.pullRequestID = process.env.SYSTEM_PULLREQUESTID;
exports.pullRequestSourceBranch = process.env.SYSTEM_PULLREQUEST_SOURCEBRANCH;
exports.pullRequestTargetBranch = process.env.SYSTEM_PULLREQUEST_TARGETBRANCH || 'master';
exports.sourceVersion = process.env.BUILD_SOURCEVERSION || '0.0.1';
exports.vsixDirectory = process.env.BUILD_ARTIFACTSTAGINGDIRECTORY + '/extension';

exports.execOptions = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
    customTemplatingThing: "test" // content passed to lodash.template()
};
exports.execReporterOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
};