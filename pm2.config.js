module.exports = {
  apps : [{
    name: "vc-contact_peer-server",
    script: "app.js",
    exec_mode: 'cluster',
    instances: 2,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
