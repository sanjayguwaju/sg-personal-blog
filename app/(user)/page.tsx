import { previewData } from "next/headers";
import { groq } from "next-sanity";
import {client} from "../../lib/sanity.client"
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

// Yo chai haamile data fetch gareko sanity bata * bhaneko chai All ho andi | yesto sign le chai piping gareko so fetch garisake paxi chai order garnu descending order ma on the basis of creadedAt date.
const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`

export default async function Homepage() {
    if(previewData()) {
        return (
            <PreviewSuspense fallback={
                <div role="status">
                    <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
                        Loading Preview Data...
                    </p>
                </div>
            }>
                <PreviewBlogList query={query}/>
            </PreviewSuspense>
        )
    }

    const posts = await client.fetch(query);
    console.log(posts);
    return <BlogList posts={posts}/>
}