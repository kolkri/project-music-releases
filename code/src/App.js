import React from 'react'
import data from './data.json'
import playlistdata from './stretch-goal.json'


// import { Article } from 'components/Article'
import { Albums } from 'components/Albums'
import { Singles } from 'components/Singles'
import { Playlists } from 'components/Playlists'
import { Header } from 'components/Header'

console.log('data', data)
console.log('PLAYLISTS', playlistdata)


export const App = () => {

  return (
    
  <div>
      <Header />

      <h2>New Albums</h2>

      <section>
      {data.albums.items.map((singleAlbum) => {
        if (singleAlbum.album_type === "album")
        return <Albums key={singleAlbum.id} articleDetails={singleAlbum}/>
      })}
      </section>

      <h2>New Singles</h2>

      <section>
      {data.albums.items.map((singleSingle) => {
        if (singleSingle.album_type === "single")
        return <Singles key={singleSingle.id} articleDetails={singleSingle}/>
      })}
     </section>

     <h2>Playlists</h2>

      <section>
      {playlistdata.playlists.items.map((singleList) => {
        return <Playlists key={singleList.id} articleDetails={singleList}/>
      })}
     </section>
  </div>

  )
}

