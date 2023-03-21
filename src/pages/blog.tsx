export default function Blog(props: {}) {
  return (
    <>
      <h1 className="accent">Blog 🖋️</h1>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
