import React from 'react'
import Counter from './ui/Counter'

export default function CounterSection() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Counter title="Average Rating" count="4.8/5" varient="green"/>
                    <Counter title="Reviews" count="2,000+" varient="yellow"/>
                    <Counter title="Happy Customers" count="5K+" varient="green"/>
                    <Counter title="Satisfaction Rating" count="99.8%" varient="yellow"/>
                </div>
            </div>
        </section>
    )
}
