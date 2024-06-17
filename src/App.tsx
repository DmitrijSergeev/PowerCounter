import './styles/App.css'

import { Counter } from './components/counter/counter'
export function App() {
  return (
    <div className={'wrapper'}>
      <Counter id={1} max={12} min={5} />
    </div>
  )
}
