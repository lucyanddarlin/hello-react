import { PureComponent } from "react"
import { storeContext } from "./storeContext"

export function connect (mapStoreToProps, mapDispatchToProps) {

  return function (OriginalComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = mapStoreToProps(context.getState())
      }
      componentDidMount () {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStoreToProps(this.context.getState()))
        })
      }
      componentWillUnmount () {
        this.unsubscribe()
      }
      render () {
        const storeObj = mapStoreToProps ? mapStoreToProps(this.context.getState()) : {}
        const dispatchObj = mapDispatchToProps ? mapDispatchToProps(this.context.dispatch) : {}
        return (
          <OriginalComponent {...this.props} {...storeObj} {...dispatchObj} />
        )
      }
    }
    NewComponent.contextType = storeContext
    return NewComponent
  }
}