import { useContext, useState, useEffect } from "react"
import { ReactReduxContext } from "react-redux"

const useStore = () => {
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch: mapDispatchToProps, subscribe } = store

  const [mapStateToProps, setStoreState] = useState(getState())

  useEffect(() =>
    subscribe(() => {
      setStoreState(getState())
    }, [])
  )

  return [mapStateToProps, mapDispatchToProps]
}

export { useStore }
