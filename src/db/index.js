import Sequelize from 'sequelize'
import connection from './connections.json'

export default new Sequelize(connection.development)
