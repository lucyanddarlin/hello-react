function loginAuth(OriginalComponent) {
  return (props) => {
    const token = localStorage.getItem('token')
    if (token) {
      return (
        <OriginalComponent {...props} />
      )
    }
    return <h2>请登录</h2>
  }

}

export default loginAuth