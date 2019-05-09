module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
