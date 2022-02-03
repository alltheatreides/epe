export async function getStaticProps() {

   // Contentful access information
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   })

   // Get the result and Contentful content type
   const res = await client.getEntries({ content_type: "asset" })

   return {
      props: {
         assets: res.items,
      }
   }
}