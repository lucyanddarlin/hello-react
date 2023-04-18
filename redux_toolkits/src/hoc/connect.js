import { PureComponent } from "react"
import store from "../store"

export function connect (mapStoreToProps, mapDispatchToProps) {

  return function (OriginalComponent) {
    return class extends PureComponent {
      constructor() {
        super()
        this.state = mapStoreToProps(store.getState())
      }
      componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
          this.setState(mapStoreToProps(store.getState()))
        })
      }
      componentWillUnmount () {
        this.unsubscribe()
      }
      render () {
        const storeObj = mapStoreToProps ? mapStoreToProps(store.getState()) : {}
        const dispatchObj = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
        return (
          <OriginalComponent {...this.props} {...storeObj} {...dispatchObj} />
        )
      }
    }
  }
}