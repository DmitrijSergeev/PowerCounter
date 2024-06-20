import { Counter } from '@/components/counter/Counter'

import './styles/App.css'
export function App() {
  return (
    <div className={'wrapper'}>
      <Counter id={1} max={12} min={5} />
    </div>
  )
}
