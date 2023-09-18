export default TVpages ({tvdata}){
    return(<div>
        <h1>TV Series</h1>
{JSON.stringify(tvdata)}
        </div>)
}

export async function getServerSideProps(context) {
    const { TVid } = context.query

    const url = 'https://api.themoviedb.org/3/tv/series_id?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw'
      }
    };
    
    const response = await fetch(url, options)
    const data = await response.json()
  return {
    props: {tvdata: data,},
  }
}