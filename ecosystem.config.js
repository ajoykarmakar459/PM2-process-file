module.exports = {
  apps : [{
    name   : "project-name", //change it accordingly
    script: 'yarn prod',
    env_production: {
      NODE_ENV: "production",
      PORT: 4000 //change it accordingly
    }
  }],
};
