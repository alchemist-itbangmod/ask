import IndexPage from '../containers/IndexPage'
import withApp from '../libs/withApp'

const Index = props => (<IndexPage {...props} />)

export default withApp('Index')(Index)
