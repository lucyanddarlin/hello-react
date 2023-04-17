import { PureComponent } from "react";
import store from "../store";
import { changeCountAction } from "../store/actionCreators";

export function countWrapper (OriginalComponent) {

  return class extends PureComponent {
    constructor() {
      super()
      this.state = {
        count: store.getState().count
      }
    }
    componentDidMount () {
      store.subscribe(() => {
        this.setState({
          count: store.getState().count
        })
      })
    }
    handleChangeCount (count) {
      store.dispatch(changeCountAction(count))
    }
    render () {
      return <OriginalComponent {...this.state} changeCount={(count) => this.handleChangeCount(count)} />
    }
  }

}