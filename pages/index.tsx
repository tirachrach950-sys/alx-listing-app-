# alx-listing-app-
pages/index.tsx,components/common/Card.tsx,components/common/Button.tsx,interfaces/index.ts,constants/index.ts,public/assets/,README.md
import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="ALX Listing App - Airbnb-style listing scaffold" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">ALX Listing App</h1>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment"
            description="Beautiful 2-bedroom apartment in downtown."
            image="/assets/placeholder.png"
          />
          <Card
            title="Beachside Villa"
            description="Relax by the sea with amazing sunsets."
            image="/assets/placeholder.png"
          />
          <Card
            title="Cozy Cabin"
            description="Quiet getaway surrounded by nature."
            image="/assets/placeholder.png"
          />
        </section>

        <div className="text-center mt-8">
          <Button label="Explore More" />
        </div>
      </main>
    </>
  )
}
