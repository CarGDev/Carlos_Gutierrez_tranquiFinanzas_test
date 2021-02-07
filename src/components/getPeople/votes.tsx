const Votes = (props: any) => {
  console.log(props.value)
  let sum: number = 0
  props.value.map((x: { votes: number; }) => sum += x.votes)
  const text: string = `Total de votos = ${sum}`
  return <h1>{text}</h1>
}

export default Votes;