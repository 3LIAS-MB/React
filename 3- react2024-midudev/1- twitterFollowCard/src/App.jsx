import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const user = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'phralb',
    name: 'Pablo H.',
    isFollowing: true
  },
  {
    name: 'Paco hdez',
    isFollowing: true
  },
  {
    userName: 'TMHchein',
    name: 'Tomas XD',
    isFollowing: true
  }
]

function App () {
  // const format = (userName) => `@${userName}` -> función
  // const formattedUserName = <span>@midudev</span> // -> elemento de react

  // Pasar todas las props juntas como un objeto -> medio mala practica xd
  // const midudev = { isFollowing: true, userName: 'midudev' } -> {...midudev} -> rest operator

  const [namexd, setName] = useState('midudev')

  return (
    <section className='App'>

      {
        user.map(({ userName, name, isFollowing }, index) => (
          <TwitterFollowCard
            key={index}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )
      }

      <TwitterFollowCard userName={namexd} initialIsFollowing>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard userName='Elas81775213' initialIsFollowing>
        MB Elias
      </TwitterFollowCard>

      <TwitterFollowCard userName='pheralb' initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard userName='pheralbxd' initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard userName='pheralbxddd' initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>

      <button onClick={() => setName('pedromichel')}>
        Cambio nombre
      </button>
    </section>
  )
}

export default App
