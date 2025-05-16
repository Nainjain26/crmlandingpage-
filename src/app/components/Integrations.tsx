import React from 'react'

const Integrations = () => {
    const benefits = [
    { name: 'Increased Efficiency', description: 'Reduce manual work with integrated workflows.' },
    { name: 'Better Decisions', description: 'Access real-time data across ERP and CRM.' },
    { name: 'Scalability', description: 'Grow your business with a flexible, modular system.' },
    { name: 'Enhanced Experience', description: 'Personalize interactions with ERP insights.' },
  ];
  return (
     <div className="py-12 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our CRM?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Unlock the full potential of your business with our ERP-integrated CRM.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="pt-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
                  <h3 className="text-lg font-medium text-gray-900">{benefit.name}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-gray-600">
           &quot;This CRM has transformed how we manage our customers. The ERP integration is a game-changer!&quot;
            
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Integrations
