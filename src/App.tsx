import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import {useState} from "react";


export function App(){
 const [name, setName] = useState('midudev')
 console.log('render with name', name)
  return (
    <section className='App'>
      <TwitterFollowCard userName={name}
      initialIsFollowing={true} >
      Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard  userName='pheralb' initialIsFollowing={false} >
      Pablo Heraldo
      </TwitterFollowCard>
      <TwitterFollowCard  userName='elonmusk' initialIsFollowing >
      Elon Musk
      </TwitterFollowCard>
        <button onClick={() => setName('pedromichel')}>
            Cambio nombre
        </button>
    </section>
  )
}