import { AppDataSource } from './dataSource'
AppDataSource.initialize()
  .then(() => {
    console.log('Database is running')
  })
  .catch((error) => console.log(error))
