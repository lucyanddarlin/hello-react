import { useNavigate } from 'react-router-dom'
function withRouter (WrapComponent) {
  return function (props) {
    const navigate = useNavigate()
    const router = { navigate }
    return <WrapComponent {...props} router={router} />
  }
}

export default withRouter