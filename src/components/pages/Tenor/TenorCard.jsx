

export const TenorCard = ( {
        id, 
        content_description,
        gif

}) => {

  return (
    <div key={id} className="tenor_cards">
        <h1> {content_description} </h1>
        <img src= {gif[0].gif.url} />
    </div>
  )
}
