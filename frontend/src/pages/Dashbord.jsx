import { Link } from 'react-router-dom'
import IncomeShow from './IncomeShow'

const Dashbord = () => {


  return (
    <div>
      <h2>Dashbord</h2>
      <Link to={'/income'}>Income</Link>
      <IncomeShow/>
    </div>
  )
}

export default Dashbord
