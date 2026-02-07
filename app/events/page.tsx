// app/events/page.tsx
export default function EventsPage() {
  const events = [
    {
      date: 'February 29, 2024',
      title: 'AI Regulation in Quebec: Bill 25 Discussion',
      location: 'Notman House, Montreal',
      description: 'Exploring Quebec\'s new AI regulation framework and its implications.'
    },
    {
      date: 'March 28, 2024',
      title: 'Ethical Data Collection Practices',
      location: 'Online (Zoom)',
      description: 'How can organizations ethically collect data for AI training?'
    },
    {
      date: 'April 25, 2024',
      title: 'Community Panel: AI in Montreal Healthcare',
      location: 'Montreal General Hospital (Tentative)',
      description: 'Discussion on AI applications in local healthcare settings.'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Events & Meetings</h1>
      
      <div className="mb-10 p-6 bg-blue-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Regular Meeting Pattern</h2>
        <p className="text-lg">
          We meet <strong>every last Thursday of the month</strong> at 6:30 PM. 
          Locations vary between in-person (various Montreal venues) and online meetings.
        </p>
        <p className="mt-2 text-gray-600">
          Check this page or contact us for the latest information.
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
              <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mt-2 md:mt-0">
                {event.date}
              </span>
            </div>
            <p className="text-gray-600 mb-3">
              <strong> Location:</strong> {event.location}
            </p>
            <p className="text-gray-700">{event.description}</p>
            <button className="mt-4 px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
              More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
