// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Our Group</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl mb-6">
          The AI Ethics Project is an informal community group based in Montreal, Quebec, 
          focused on exploring the ethical dimensions of artificial intelligence.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Origins</h2>
        <p>
          Founded in 2024 by a group of Montreal citizens concerned about the rapid 
          development of AI without sufficient public discourse on its ethical implications.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What We Are (and Are Not)</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="font-bold text-lg mb-2"> What We ARE:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>An informal discussion group</li>
            <li>A community of concerned citizens</li>
            <li>A bilingual (French/English) forum</li>
            <li>Open to all perspectives</li>
          </ul>
          
          <h3 className="font-bold text-lg mt-6 mb-2"> What We Are NOT:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>A registered non-profit or corporation</li>
            <li>A lobbying organization</li>
            <li>A formal research institute</li>
            <li>A commercial entity</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Montreal Context</h2>
        <p>
          As a Montreal-based group, we pay special attention to:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Quebec's AI ecosystem and regulations</li>
          <li>Bilingual accessibility (French/English)</li>
          <li>Local community impacts</li>
          <li>Canadian privacy laws and ethics frameworks</li>
        </ul>
      </div>
    </div>
  )
}
